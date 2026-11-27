import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

import products from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {

  const featuredIds = [16, 1, 36, 17, 3, 37, 20, 43];

  const featuredProducts = featuredIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-14">

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        <div>

          <p className="text-xs tracking-widest text-gray-500">

            PREMIUM COLLECTION

          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">

            Featured Products

          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-2">

            Discover our most popular electronics.

          </p>

        </div>

        <Link
          to="/products"
          className="flex items-center gap-2 bg-royal text-white px-5 py-3 rounded-full text-sm"
        >

          View All

          <LuArrowRight size={17} />

        </Link>

      </div>

      <div className="product-grid">

        {featuredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}