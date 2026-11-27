import { useState, useEffect } from "react";
import {
  LuX,
  LuStar,
  LuShoppingBag,
  LuPlus,
  LuMinus
} from "react-icons/lu";

import useCart from "../hooks/useCart";
import ProductImage from "./ProductImage";

export default function ProductDetails({ product, onClose }) {

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    onClose();
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >

      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#222222] text-white rounded-3xl p-5 md:p-8 fade-up"
      >

        {/* Close Button */}

        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
        >
          <LuX size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Product Image */}

          <div className="w-full md:w-1/2">

            <div className="w-full h-[280px] md:h-[480px] bg-gray-100 rounded-2xl overflow-hidden p-3">

              <ProductImage
                product={product}
                loading="eager"
                className="w-full h-full object-contain rounded-xl"
              />

            </div>

          </div>

          {/* Product Information */}

          <div className="w-full md:w-1/2">

            <p className="uppercase text-gray-400 text-sm">
              {product.brand}
            </p>

            <h1 className="text-2xl md:text-3xl font-semibold mt-3">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 mt-5">

              <LuStar
                size={20}
                className="text-[#D6B66B]"
              />

              <span className="font-semibold">
                {product.rating} / 5
              </span>

            </div>

            {/* Price */}

            <h2 className="text-3xl font-bold mt-5">
              ₹{product.price.toLocaleString("en-IN")}
            </h2>

            <hr className="border-white/15 my-7" />

            {/* Product Details */}

            <h3 className="text-xl font-semibold mb-3">
              Product Details
            </h3>

            <div className="space-y-2 text-gray-300">

              <p className="capitalize">
                Category: {product.category.replaceAll("-", " ")}
              </p>

              <p>
                Brand: {product.brand}
              </p>

              <p>
                Product ID: RC-{String(product.id).padStart(3, "0")}
              </p>

            </div>

            {/* Quantity */}

            <div className="flex items-center gap-3 mt-5">

              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                aria-label="Decrease quantity"
                className="p-2 disabled:opacity-30"
              >
                <LuMinus size={20} />
              </button>

              <span className="border border-white/20 rounded-xl px-4 py-3">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
                className="p-2"
              >
                <LuPlus size={20} />
              </button>

            </div>

            {/* Add To Cart */}

            <button
              onClick={handleAddToCart}
              className="w-full mt-7 py-4 rounded-full bg-[#303030] hover:bg-[#D6B66B] hover:text-black flex items-center justify-center gap-3 transition-all duration-300"
            >

              <LuShoppingBag size={20} />

              Add To Cart

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}