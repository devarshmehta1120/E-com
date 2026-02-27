export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Logo + about */}
        <div>
          <h2 className="text-2xl font-bold">My Store</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Discover amazing products at unbeatable prices. 
            Quality fashion & accessories delivered to your door.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">All Products</li>
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe for latest offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full rounded-l-lg text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} My Store. All rights reserved by Devarsh Mehta.
      </div>
    </footer>
  );
}