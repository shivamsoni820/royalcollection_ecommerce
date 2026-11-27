import { Link } from "react-router-dom";

import {
  LuShoppingBag,
  LuArrowRight,
  LuTrash2
} from "react-icons/lu";

import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";

export default function Cart() {

  const {
    cart,
    totalItems,
    totalPrice,
    clearCart
  } = useCart();

  if (cart.length === 0) {

    return (
      <section className="min-h-[65vh] flex flex-col items-center justify-center p-6 text-center">

        <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">

          <LuShoppingBag size={45} />

        </div>

        <h1 className="text-3xl font-bold mt-6">

          Your Cart is Empty

        </h1>

        <p className="text-gray-500 mt-3">

          Explore our premium collection.

        </p>

        <Link
          to="/products"
          className="bg-royal text-white rounded-full px-7 py-4 mt-6"
        >

          Continue Shopping

        </Link>

      </section>
    );

  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        <div>

          <p className="text-xs tracking-widest text-gray-500">

            YOUR COLLECTION

          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3">

            Shopping Cart

          </h1>

          <p className="text-gray-500 mt-3">

            {totalItems} items in your cart

          </p>

        </div>

        <button
          onClick={() => {
            if (window.confirm("Clear your shopping cart?")) {
              clearCart();
            }
          }}
          className="flex items-center gap-2 text-red-500 bg-white px-5 py-3 rounded-full"
        >

          <LuTrash2 size={18} />

          Clear Cart

        </button>

      </div>

      <div className="flex flex-col lg:flex-row items-start gap-6">

        <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-4">

          {cart.map((product) => (

            <CartItem
              key={product.id}
              product={product}
            />

          ))}

        </div>

        <div className="w-full lg:w-[380px] bg-white rounded-3xl p-6 lg:sticky lg:top-5">

          <h2 className="text-2xl font-bold">

            Order Summary

          </h2>

          <div className="flex flex-col gap-5 mt-7 text-gray-500">

            <div className="flex justify-between">

              <span>Total Items</span>

              <span>{totalItems}</span>

            </div>

            <div className="flex justify-between">

              <span>Subtotal</span>

              <span>
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Delivery</span>

              <span>FREE</span>

            </div>

          </div>

          <div className="border-t border-gray-200 mt-6 pt-6 flex items-center justify-between">

            <h3 className="font-semibold">
              Total
            </h3>

            <h3 className="text-2xl font-bold">

              ₹{totalPrice.toLocaleString("en-IN")}

            </h3>

          </div>

          <Link
            to="/checkout"
            className="w-full bg-royal text-white rounded-full py-4 mt-7 flex items-center justify-center gap-3"
          >

            Proceed to Checkout

            <LuArrowRight size={20} />

          </Link>

          <Link
            to="/products"
            className="block text-center text-gray-500 text-sm mt-5"
          >

            Continue Shopping

          </Link>

        </div>

      </div>

    </section>
  );

}