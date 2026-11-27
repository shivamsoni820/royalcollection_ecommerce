import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";

import categories from "../data/categories";

export default function Categories() {

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-14">

      <div className="mb-8">

        <p className="text-xs tracking-widest text-gray-500">

          EXPLORE COLLECTION

        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">

          Shop by Category

        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-2">

          Discover technology designed for your lifestyle.

        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5">

        {categories.map((category) => {

          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="group relative bg-white rounded-2xl min-w-0 p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all"
            >

              <LuArrowUpRight
                size={18}
                className="absolute top-3 right-3 text-gray-400"
              />

              <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-surface rounded-full flex items-center justify-center group-hover:bg-gold transition-all">

                <Icon size={30} />

              </div>

              <h3 className="text-sm sm:text-base font-semibold mt-4">

                {category.name}

              </h3>

              <p className="text-xs text-gray-500 mt-2">

                {category.count} Products

              </p>

            </Link>
          );

        })}

      </div>

    </section>
  );
}