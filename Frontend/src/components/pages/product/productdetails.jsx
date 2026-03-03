import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getproductbyid } from "../../../api/productapi";
import { useCart } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import { loginHandleError, loginHandleSuccess } from "../../../lib/utils";

function ProductDetails() {

  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const { addItem } = useCart();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getproductbyid(id),
  });

  const handleAddToCart = () => {

    if (!user) {
      loginHandleError("Please login first");
      navigate({ to: "/auth/login" });
      return;
    }

    addItem({
      ...data.product,
      id: data.product._id,  // VERY IMPORTANT
    });

    loginHandleSuccess("Added to cart");
    navigate({ to: "/cart" });
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading product</h2>;

  return (
    <div className="min-h-screen py-10 px-4">
       <Link to="/">
            <h1 className="text-xl font-semibold text-yellow-700 mb-2">← Continue Shopping</h1>
       </Link>
       
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={data?.product?.image}
            alt={data?.product?.title}
            className="w-full max-w-md h-96 object-contain rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {data?.product?.title}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {data?.product?.description}
          </p>

          <h2 className="text-3xl font-semibold text-indigo-600 mt-6">
            ₹ {data?.product?.price}
          </h2>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;