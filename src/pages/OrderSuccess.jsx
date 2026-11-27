import { Link } from "react-router-dom";
import { LuCheck, LuShoppingBag } from "react-icons/lu";

export default function OrderSuccess() {

  let order = null;

  try {

    order = JSON.parse(
      localStorage.getItem("royalLastOrder")
    );

  } catch {

    order = null;

  }

  if (!order) {

    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5">

        <h2 className="text-2xl font-bold">
          No Order Found
        </h2>

        <Link to="/products">
          Continue Shopping
        </Link>

      </div>
    );

  }

  return (
    <section className="min-h-[75vh] flex items-center justify-center p-4 sm:p-8">

      <div className="w-full max-w-[600px] bg-white rounded-3xl p-6 sm:p-10 text-center fade-up">

        <div className="w-[85px] h-[85px] bg-gold rounded-full flex items-center justify-center mx-auto">

          <LuCheck size={45} />

        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mt-6">

          Order Placed Successfully!

        </h1>

        <p className="text-gray-500 mt-4">

          Thank you for shopping with Royal Collection.

        </p>

        <div className="bg-gray-100 rounded-2xl p-5 mt-7 flex flex-col gap-5 text-sm">

          <div className="flex justify-between gap-3">

            <span className="text-gray-500">Order ID</span>

            <span className="font-semibold">{order.id}</span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">Order Date</span>

            <span>{order.date}</span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">Payment Method</span>

            <span>Cash on Delivery</span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">Payment Status</span>

            <span className="text-orange-500">
              {order.paymentStatus}
            </span>

          </div>

          <div className="border-t border-gray-300 pt-5 flex justify-between font-bold">

            <span>Total Amount</span>

            <span>
              ₹{order.total.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

        <p className="text-xs text-gray-500 mt-5">
          This is a demo order. No shipment has been scheduled.
        </p>

        <Link
          to="/products"
          className="flex items-center justify-center gap-3 bg-royal text-white rounded-full py-4 mt-6"
        >

          <LuShoppingBag size={20} />

          Continue Shopping

        </Link>

      </div>

    </section>
  );

}