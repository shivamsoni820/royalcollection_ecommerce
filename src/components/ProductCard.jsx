import { useState } from "react";
import { createPortal } from "react-dom";

import {
  LuStar,
  LuShoppingBag,
  LuArrowUpRight,
  LuCheck
} from "react-icons/lu";

import useCart from "../hooks/useCart";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

export default function ProductCard({ product }) {

  const { cart, addToCart } = useCart();

  const [showDetails, setShowDetails] = useState(false);

  const isAdded = cart.some(
    (item) => item.id === product.id
  );

  return (
    <>

      <div className="group w-full min-w-0 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col hover:shadow-xl transition-all duration-300">

        {/* Brand */}

        <div className="flex items-center justify-between">

          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-500">
            {product.brand}
          </p>

          <button
            onClick={() => setShowDetails(true)}
            aria-label="View product details"
            className="hover:text-gold transition-all"
          >
            <LuArrowUpRight size={20} />
          </button>

        </div>

        {/* Product Image */}

        <button
          onClick={() => setShowDetails(true)}
          aria-label={`View ${product.name}`}
          className="w-full h-[135px] sm:h-[200px] lg:h-[240px] bg-gray-100 rounded-xl my-3 sm:my-4 flex items-center justify-center overflow-hidden cursor-pointer"
        >

          <ProductImage
            product={product}
            className="w-full h-full object-contain p-3 sm:p-5 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
          />

        </button>

        {/* Rating */}

        <div className="flex items-center gap-2">

          <LuStar
            size={15}
            className="text-gold fill-gold"
          />

          <span className="text-xs sm:text-sm text-gray-500">
            {product.rating}
          </span>

        </div>

        {/* Product Name */}

        <h2 className="text-sm sm:text-lg font-semibold mt-3 min-h-[42px]">

          <button
            onClick={() => setShowDetails(true)}
            className="text-left line-clamp-2 hover:text-gray-500"
          >
            {product.name}
          </button>

        </h2>

        {/* Price and Cart Button */}

        <div className="flex items-center justify-between gap-1 mt-auto pt-4">

          <h3 className="text-sm sm:text-xl font-bold">
            ₹{product.price.toLocaleString("en-IN")}
          </h3>

          <button
            onClick={() => addToCart(product)}
            aria-label="Add to cart"
            className={`w-[34px] h-[34px] sm:w-[44px] sm:h-[44px] shrink-0 rounded-full flex items-center justify-center transition-all ${
              isAdded
                ? "bg-gold text-black"
                : "bg-royal text-white hover:bg-gold hover:text-black"
            }`}
          >

            {isAdded ? (
              <LuCheck size={18} />
            ) : (
              <LuShoppingBag size={18} />
            )}

          </button>

        </div>

      </div>

      {/* Product Details Popup */}

      {showDetails &&
        createPortal(
          <ProductDetails
            product={product}
            onClose={() => setShowDetails(false)}
          />,
          document.body
        )
      }

    </>
  );
}