import {
  LuPlus,
  LuMinus,
  LuTrash2,
  LuImage
} from "react-icons/lu";

import useCart from "../hooks/useCart";

export default function CartItem({ product }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 bg-white rounded-3xl p-5">

      <div className="w-[130px] h-[130px] shrink-0 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">

        {product.image ? (

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-3 mix-blend-multiply"
          />

        ) : (

          <LuImage size={40} className="text-gray-400" />

        )}

      </div>


      <div className="flex-1 min-w-0">

        <p className="text-xs uppercase tracking-widest text-gray-500">
          {product.brand}
        </p>

        <h2 className="text-xl font-semibold mt-2">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <div className="flex items-center gap-4 mt-4">

          <button
            aria-label="Decrease quantity"
            disabled={product.quantity === 1}
            onClick={() => decreaseQuantity(product.id)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-40"
          >
            <LuMinus size={16} />
          </button>

          <span className="font-semibold">
            {product.quantity}
          </span>

          <button
            aria-label="Increase quantity"
            onClick={() => increaseQuantity(product.id)}
            className="w-8 h-8 rounded-full bg-royal text-white flex items-center justify-center"
          >
            <LuPlus size={16} />
          </button>

        </div>

      </div>


      <div className="flex flex-col items-end gap-5">

        <button
          aria-label="Remove product"
          onClick={() => removeFromCart(product.id)}
          className="text-gray-400 hover:text-red-500"
        >
          <LuTrash2 size={20} />
        </button>

        <h3 className="text-xl font-bold">
          ₹{(product.price * product.quantity).toLocaleString("en-IN")}
        </h3>

      </div>

    </div>
  );

}