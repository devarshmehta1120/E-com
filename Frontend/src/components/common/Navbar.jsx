import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export  const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
    const routerState = useRouterState(); 

  // Sync user from localStorage
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, [routerState.location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate({ to: "/auth/login" });
  };

  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/src/image/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold text-yellow-500">
            MyStore
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          
          <Link to="/cart" className="hover:text-yellow-400 transition">
            Cart
          </Link>

          {loggedInUser ? (
            <>
              <span className="text-yellow-400 font-semibold">
                👋 {loggedInUser}
              </span>
              <button
                onClick={handleLogout}
                className="border border-yellow-500 text-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <button className="border border-yellow-500 text-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/auth/signup">
                <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full hover:bg-yellow-400 transition duration-300">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};