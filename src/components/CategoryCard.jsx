import { LuArrowUpRight } from "react-icons/lu";

export default function CategoryCard({ category }) {

  const Icon = category.icon;

  return (
    <a
      href={`/products?category=${category.slug}`}
      className="group bg-white rounded-3xl p-6
      flex flex-col items-center relative
      hover:-translate-y-2 hover:shadow-xl
      transition-all duration-300"
    >

      <LuArrowUpRight
        className="absolute top-5 right-5 text-gray-400
        group-hover:text-black"
        size={20}
      />

      <div className="w-24 h-24 rounded-full bg-surface
      flex items-center justify-center my-5
      group-hover:bg-royal group-hover:text-gold
      transition-all duration-300">

        <Icon size={40} />

      </div>

      <h2 className="text-lg font-semibold text-center">
        {category.name}
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {category.count} Products
      </p>

    </a>
  );
}