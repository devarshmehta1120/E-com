// import { createFileRoute } from "@tanstack/react-router";
import { useCart } from "react-use-cart";



function Cart() {
  const {
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
    cartTotal,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Your Cart is Empty 🛒</h2>
        <p className="text-yellow-500">Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart ({totalItems} items)
        </h1>

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-6"
            >
              {/* Product Info */}
              <div className="flex items-center gap-6 w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain rounded-lg"
                />

                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-indigo-600 font-bold mt-2">
                    ₹ {item.price}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() =>
                    updateItemQuantity(item.id, item.quantity - 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  -
                </button>

                <span className="px-4">{item.quantity}</span>

                <button
                  onClick={() =>
                    updateItemQuantity(item.id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 mt-4 md:mt-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6">

          <div>
            <p className="text-xl font-semibold">
              Total: ₹ {cartTotal.toFixed(2)}
            </p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => emptyCart()}
              className="border border-red-500 text-red-500 px-6 py-2 rounded-xl hover:bg-red-50"
            >
              Clear Cart
            </button>

            <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;