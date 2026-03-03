  import { useQuery } from "@tanstack/react-query";
  import { getproduct } from "../../api/productapi";
  import { Link } from "@tanstack/react-router";
  import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
  import hero from "@/image/home_men/1.jpg";
import { useCart } from "react-use-cart";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import { loginHandleError, loginHandleSuccess } from "../../lib/utils";


  const Home = () => {
    
    const {addItem} = useCart();
    const navigate = useNavigate();
    const user = localStorage.getItem("loggedInUser");
    const { data, isLoading, isError } = useQuery({
      queryKey: ["products"],
      queryFn: getproduct,
    });

    if (isLoading)
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
          Loading products...
        </div>
      );

    if (isError)
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-red-400">
          Failed to load products
        </div>
      );


const handleAddToCart = (product) => {
  if (!user) {
    loginHandleError("Please login first");
    navigate({ to: "/auth/login" });
    return;
  }

  addItem({
    ...product,
    id: product._id,   // required for react-use-cart
  });

  loginHandleSuccess("Added to cart");
  navigate({ to: "/cart" });
};
        
    return (
      <div className="relative min-h-screen text-white">

        {/* ⭐ Full Galaxy Background */}
        <StarsBackground className="fixed inset-0 -z-10 pointer-events-none" />

        {/* HERO SECTION */}
       <section className="relative h-[500px] flex items-center justify-center text-center px-4 bg-slate-950">
          {/* Hero image overlay */}
          <img
            src={hero}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/80 to-slate-950" />

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight">
              Welcome to <span className="text-blue-400">Our Store</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover amazing products at unbeatable prices.
            </p>
            <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition duration-300 shadow-lg">
              Shop Now
            </button>
          </div>
        </section>
      {/* PROMO BAR */}
  <div className="bg-blue-600 text-center py-2 text-sm font-medium">
    🚚 Free Shipping on orders above ₹999 | 🎉 20% OFF on New Arrivals
  </div>
        {/* FEATURED TITLE */}
        <section className="container mx-auto px-4 mt-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Products
          </h2>

          {/* PRODUCTS GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.products?.map((p) => (
              <div
                key={p.id}
                className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                <Link to={`/product/${p._id}`}>
                  <div className="bg-slate-800 rounded-xl p-4">
                    <img
                      src={p.image}
                      className="h-48 mx-auto object-contain"
                    />
                  </div>

                  <p className="mt-5 font-semibold text-lg line-clamp-2">
                    {p.title}
                  </p>

                  <p className="mt-2 text-blue-400 font-bold text-xl">
                    ₹{p.price}
                  </p>
                </Link>

                <button className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition font-medium"
onClick={() => handleAddToCart(p)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
            {/* CATEGORIES */}
  <section className="container mx-auto px-4 mt-16">
    <h2 className="text-3xl font-bold text-center mb-10">
      Shop by Category
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {["Men", "Women", "Accessories", "New Arrivals"].map((cat) => (
        <div
          key={cat}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:bg-slate-800 transition cursor-pointer"
        >
          <p className="text-xl font-semibold">{cat}</p>
        </div>
      ))}
    </div>
  </section>
  {/* WHY CHOOSE US */}
  <section className="container mx-auto px-4 mt-20">
    <h2 className="text-3xl font-bold text-center mb-12">
      Why Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-10 text-center">
      <div>
        <div className="text-blue-400 text-4xl mb-4">🚀</div>
        <h3 className="font-semibold text-xl">Fast Delivery</h3>
        <p className="text-gray-400 mt-2">
          Lightning fast shipping across India.
        </p>
      </div>

      <div>
        <div className="text-blue-400 text-4xl mb-4">💎</div>
        <h3 className="font-semibold text-xl">Premium Quality</h3>
        <p className="text-gray-400 mt-2">
          High quality curated products for you.
        </p>
      </div>

      <div>
        <div className="text-blue-400 text-4xl mb-4">🔒</div>
        <h3 className="font-semibold text-xl">Secure Payments</h3>
        <p className="text-gray-400 mt-2">
          100% safe & secure checkout process.
        </p>
      </div>
    </div>
  </section>
  {/* CALL TO ACTION */}
  <section className="mt-24 bg-gradient-to-r py-16 text-center">
    <h2 className="text-3xl font-bold">
      Ready to Elevate Your Style?
    </h2>
    <p className="mt-4 text-gray-200">
      Explore our latest collection and discover your perfect look.
    </p>
    <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
      Explore Now
    </button>
  </section>
  {/* NEWSLETTER */}
  <section className="container mx-auto px-4 mt-20 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Join Our Newsletter
    </h2>
    <p className="text-gray-400 mb-6">
      Get exclusive offers & updates directly to your inbox.
    </p>

    <div className="flex justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 w-64 rounded-l-lg text-black"
      />
      <button className="bg-blue-500 px-6 py-2 rounded-r-lg hover:bg-blue-600">
        Subscribe
      </button>
    </div>
  </section>
      </div>
    );
  };

  export default Home;