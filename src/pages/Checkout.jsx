import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LuSmartphone,
  LuCreditCard,
  LuBanknote,
  LuShoppingBag,
  LuArrowLeft,
  LuLock
} from "react-icons/lu";

import useCart from "../hooks/useCart";

export default function Checkout() {

  const navigate = useNavigate();

  const { cart, totalPrice, totalItems, clearCart } = useCart();

  const [payment, setPayment] = useState("cod");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      description: "Google Pay, PhonePe, Paytm",
      icon: LuSmartphone
    },
    {
      id: "card",
      name: "Credit / Debit Card",
      description: "Visa, Mastercard, RuPay",
      icon: LuCreditCard
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      description: "Pay when your order arrives",
      icon: LuBanknote
    }
  ];

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleOrder(e) {

    e.preventDefault();

    if (cart.length === 0) return;

    if (payment !== "cod") {

      alert("Online payment gateway is not connected yet.");

      return;

    }

    const order = {
      id: "RC-" + Date.now(),
      items: cart,
      total: totalPrice,
      paymentMethod: payment,
      paymentStatus: "Pending",
      date: new Date().toLocaleDateString("en-IN")
    };

    localStorage.setItem(
      "royalLastOrder",
      JSON.stringify(order)
    );

    clearCart();

    navigate("/order-success", {
      replace: true
    });

  }

  const inputStyle =
    "w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gold bg-gray-50 text-sm";

  if (cart.length === 0) {

    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 p-6">

        <LuShoppingBag size={65} />

        <h2 className="text-3xl font-bold">
          Your Cart is Empty
        </h2>

        <Link
          to="/products"
          className="bg-royal text-white px-7 py-3 rounded-full"
        >
          Continue Shopping
        </Link>

      </div>
    );

  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">

      <Link
        to="/cart"
        className="inline-flex items-center gap-2 text-gray-500 mb-6"
      >

        <LuArrowLeft size={18} />

        Back to Cart

      </Link>

      <p className="text-xs tracking-widest text-gray-500">
        COMPLETE YOUR ORDER
      </p>

      <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-8">
        Checkout
      </h1>

      <form
        onSubmit={handleOrder}
        className="flex flex-col lg:flex-row items-start gap-6"
      >

        {/* Left Section */}

        <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-6">

          {/* Delivery Details */}

          <div className="bg-white rounded-3xl p-5 sm:p-8">

            <h2 className="text-2xl font-bold mb-6">
              Delivery Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>

                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className={`${inputStyle} mt-2`}
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  className={`${inputStyle} mt-2`}
                />

              </div>

              <div className="sm:col-span-2">

                <label className="text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  className={`${inputStyle} mt-2`}
                />

              </div>

              <div className="sm:col-span-2">

                <label className="text-sm font-medium">
                  Delivery Address
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House number, street and area"
                  rows={3}
                  required
                  className={`${inputStyle} mt-2 resize-none`}
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                  className={`${inputStyle} mt-2`}
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  required
                  className={`${inputStyle} mt-2`}
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  PIN Code
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="Enter PIN code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                  className={`${inputStyle} mt-2`}
                />

              </div>

            </div>

          </div>


          {/* Payment Methods */}

          <div className="bg-white rounded-3xl p-5 sm:p-8">

            <h2 className="text-2xl font-bold mb-6">
              Payment Method
            </h2>

            <div className="flex flex-col gap-4">

              {paymentMethods.map((method) => {

                const Icon = method.icon;

                return (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 border-2 rounded-2xl p-4 cursor-pointer transition-all ${
                      payment === method.id
                        ? "border-gold bg-gold/10"
                        : "border-gray-200"
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={payment === method.id}
                      onChange={() => setPayment(method.id)}
                      className="accent-royal"
                    />

                    <Icon size={26} className="shrink-0" />

                    <div>

                      <h3 className="font-semibold">
                        {method.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {method.description}
                      </p>

                    </div>

                  </label>
                );

              })}

            </div>

            {payment !== "cod" && (

              <p className="bg-gray-100 text-sm text-gray-600 rounded-xl p-4 mt-5">

                Online payment integration is coming soon.
                Please select Cash on Delivery for demo checkout.

              </p>

            )}

          </div>

        </div>


        {/* Order Summary */}

        <div className="w-full lg:w-[380px] bg-white rounded-3xl p-5 sm:p-7 lg:sticky lg:top-5">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex flex-col gap-5">

            {cart.map((product) => (

              <div
                key={product.id}
                className="flex items-center justify-between gap-3"
              >

                <div className="min-w-0">

                  <h3 className="text-sm font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Quantity: {product.quantity}
                  </p>

                </div>

                <p className="font-semibold text-sm shrink-0">

                  ₹{(product.price * product.quantity)
                    .toLocaleString("en-IN")}

                </p>

              </div>

            ))}

          </div>

          <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col gap-4">

            <div className="flex justify-between text-gray-500">

              <span>Total Items</span>

              <span>{totalItems}</span>

            </div>

            <div className="flex justify-between text-gray-500">

              <span>Subtotal</span>

              <span>
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>

            </div>

            <div className="flex justify-between text-gray-500">

              <span>Delivery Charges</span>

              <span>FREE</span>

            </div>

          </div>

          <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center">

            <h3 className="font-semibold">
              Total Amount
            </h3>

            <h3 className="text-2xl font-bold">

              ₹{totalPrice.toLocaleString("en-IN")}

            </h3>

          </div>

          <button
            type="submit"
            className="w-full bg-royal text-white rounded-full py-4 mt-7 font-semibold hover:bg-black transition-all"
          >

            {payment === "cod"
              ? "Place Demo Order"
              : "Proceed to Payment"}

          </button>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-5">

            <LuLock size={15} />

            Demo Checkout

          </div>

        </div>

      </form>

    </section>
  );

}