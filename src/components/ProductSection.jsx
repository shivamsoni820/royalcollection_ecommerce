import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

import ProductCard from "./ProductCard";

export default function ProductSection({
  label,
  title,
  description,
  products,
  link
}) {

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-14">

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        <div>

          <p className="text-xs tracking-widest text-gray-500">

            {label}

          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">

            {title}

          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-2">

            {description}

          </p>

        </div>

        <Link
          to={link}
          className="flex items-center gap-2 bg-royal text-white px-5 py-3 rounded-full text-sm"
        >

          View All

          <LuArrowRight size={17} />

        </Link>

      </div>

      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}