import { useState, useEffect } from "react";

import {
  LuX,
  LuStar,
  LuShoppingBag,
  LuPlus,
  LuMinus,
  LuTruck,
  LuShieldCheck,
  LuHeadphones
} from "react-icons/lu";

import useCart from "../hooks/useCart";
import ProductImage from "./ProductImage";

export default function ProductDetails({ product, onClose }) {

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleEscape(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
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
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >

      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[950px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-5 md:p-8 fade-up"
      >

        {/* Close Button */}

        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-all"
        >
          <LuX size={22} />
        </button>


        <div className="flex flex-col md:flex-row gap-8">

          {/* Product Image */}

          <div className="w-full md:w-1/2">

            <div className="h-[280px] md:h-[420px] bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">

              <ProductImage
                product={product}
                loading="eager"
                className="w-full h-full object-contain p-8 mix-blend-multiply"
              />

            </div>

          </div>


          {/* Product Information */}

          <div className="w-full md:w-1/2 flex flex-col">

            <p className="text-sm tracking-[4px] uppercase text-gray-500">
              {product.brand}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-3">
              {product.name}
            </h1>


            {/* Rating */}

            <div className="flex items-center gap-2 mt-4">

              <LuStar
                size={20}
                className="text-gold fill-gold"
              />

              <span className="text-gray-600">
                {product.rating} / 5
              </span>

            </div>


            {/* Price */}

            <h2 className="text-3xl font-bold mt-5">
              ₹{product.price.toLocaleString("en-IN")}
            </h2>


            {/* Description */}

            <div className="mt-6">

              <h3 className="font-semibold text-lg">
                Description
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-2">

                {product.description ||
                  `${product.name} from the Royal Collection electronics catalogue.`}

              </p>

            </div>


            {/* Specifications */}

            <div className="mt-6 border-y border-gray-200 py-4 space-y-3">

              <h3 className="font-semibold text-lg">
                Product Specifications
              </h3>

              <div className="flex justify-between text-sm">

                <span className="text-gray-500">Brand</span>

                <span className="font-medium">
                  {product.brand}
                </span>

              </div>

              <div className="flex justify-between text-sm">

                <span className="text-gray-500">Category</span>

                <span className="font-medium capitalize">
                  {product.category.replaceAll("-", " ")}
                </span>

              </div>

              <div className="flex justify-between text-sm">

                <span className="text-gray-500">Product ID</span>

                <span className="font-medium">
                  RC-{String(product.id).padStart(3, "0")}
                </span>

              </div>

              {Object.entries(product.specifications || {}).map(
                ([name, value]) => (

                  <div
                    key={name}
                    className="flex justify-between gap-4 text-sm"
                  >

                    <span className="text-gray-500">
                      {name}
                    </span>

                    <span className="font-medium text-right">
                      {value}
                    </span>

                  </div>

                )
              )}

            </div>


            {/* Quantity */}

            <div className="flex items-center gap-5 mt-6">

              <p className="font-medium">Quantity</p>

              <div className="flex items-center border border-gray-300 rounded-full">

                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                  className="p-3 disabled:opacity-30"
                >
                  <LuMinus size={18} />
                </button>

                <span className="w-10 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="p-3"
                >
                  <LuPlus size={18} />
                </button>

              </div>

            </div>


            {/* Add To Cart */}

            <button
              onClick={handleAddToCart}
              className="w-full bg-royal text-white hover:bg-gold hover:text-black rounded-full py-4 px-5 mt-6 flex items-center justify-between transition-all duration-300"
            >

              <span className="flex items-center gap-3">

                <LuShoppingBag size={20} />

                Add To Cart

              </span>

              <span className="font-semibold">

                ₹{(product.price * quantity).toLocaleString("en-IN")}

              </span>

            </button>

          </div>

        </div>


        {/* Services */}

        <div className="grid grid-cols-3 gap-3 border-t border-gray-200 mt-8 pt-6">

          <div className="flex flex-col items-center text-center gap-2">

            <LuTruck size={25} className="text-gold" />

            <p className="text-xs sm:text-sm">Delivery</p>

          </div>

          <div className="flex flex-col items-center text-center gap-2">

            <LuShieldCheck size={25} className="text-gold" />

            <p className="text-xs sm:text-sm">Quality</p>

          </div>

          <div className="flex flex-col items-center text-center gap-2">

            <LuHeadphones size={25} className="text-gold" />

            <p className="text-xs sm:text-sm">Customer Support</p>

          </div>

        </div>

      </div>

    </div>
  );
}