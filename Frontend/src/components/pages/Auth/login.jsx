import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handlesuccess } from "../../../lib/utils";
import { Link, useNavigate } from "@tanstack/react-router";
const login = () => {
  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    const copylogininfo = { ...logininfo };
    copylogininfo[name] = value;
    setlogininfo(copylogininfo);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Signupinfo);
    const { email, password } = logininfo;
    if (!email || !password) {
      return handleError("Please fill all the fields");
    }
    try {
      const url = import.meta.env.VITE_BASE_LOGIN_URL;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logininfo),
      });
      const data = await response.json();
      const {success,message,jwtToken,name,error}=data
      if (success) {
        handlesuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser',name);
        setTimeout(() => {
          navigate({ to: "/" });
        }, 1500);
        
      } else if(error){
        const details=error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="p-8 rounded-3xl shadow-md w-full max-w-md bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">
            login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-yellow-500 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded text-yellow-200"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-yellow-500 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded text-yellow-200"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <button
              className="w-full bg-yellow-500 text-gray-800 py-2 rounded cursor-pointer hover:bg-yellow-600"
              type="submit"
            >
              login
            </button>
            <div className="text-center mt-2">
                            <span className="text-yellow-500">Don't have an a ccount ? <Link to="/auth/signup" className="text-white">Signup</Link></span>
                        </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
export default login;
