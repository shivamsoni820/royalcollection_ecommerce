import categories from "../data/categories";
import { LuSlidersHorizontal, LuRotateCcw } from "react-icons/lu";

export default function ProductFilter({ filters }) {

  return (
    <aside className="w-full lg:w-[250px] shrink-0 bg-white rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-2">
          <LuSlidersHorizontal size={20} />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>

        <button
          onClick={filters.resetFilters}
          aria-label="Reset filters"
          className="text-gray-500 hover:text-black"
        >
          <LuRotateCcw size={18} />
        </button>

      </div>

      <h3 className="font-semibold mb-4">Categories</h3>

      <div className="flex flex-col gap-3">

        <button
          onClick={() => filters.setCategory("")}
          className={`text-left px-4 py-2 rounded-xl
          ${filters.category === ""
            ? "bg-royal text-white"
            : "hover:bg-gray-100"}`}
        >
          All Products
        </button>

        {categories.map((category) => (

          <button
            key={category.id}
            onClick={() => filters.setCategory(category.slug)}
            className={`text-left text-sm px-4 py-3 rounded-xl
            ${filters.category === category.slug
              ? "bg-royal text-white"
              : "hover:bg-gray-100"}`}
          >
            {category.name}
          </button>

        ))}

      </div>

      <hr className="border-gray-200 my-6" />

      <h3 className="font-semibold mb-4">Brand</h3>

      <select
        value={filters.brand}
        onChange={(e) => filters.setBrand(e.target.value)}
        className="w-full bg-gray-100 rounded-xl p-3 outline-none"
      >
        <option value="">All Brands</option>

        {filters.brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}

      </select>

      <hr className="border-gray-200 my-6" />

      <h3 className="font-semibold mb-4">Price Range</h3>

      <input
        type="range"
        min="0"
        max="150000"
        step="500"
        value={filters.price}
        onChange={(e) => filters.setPrice(Number(e.target.value))}
        className="w-full accent-black"
        aria-label="Maximum price"
      />

      <div className="flex justify-between text-sm mt-3">
        <span>₹0</span>
        <span>₹{filters.price.toLocaleString("en-IN")}</span>
      </div>

      <hr className="border-gray-200 my-6" />

      <h3 className="font-semibold mb-4">Rating</h3>

      <select
        value={filters.rating}
        onChange={(e) => filters.setRating(Number(e.target.value))}
        className="w-full bg-gray-100 rounded-xl p-3 outline-none"
      >
        <option value="0">All Ratings</option>
        <option value="4">4 Stars & Above</option>
        <option value="4.5">4.5 Stars & Above</option>
        <option value="4.8">4.8 Stars & Above</option>
      </select>

      <button
        onClick={filters.resetFilters}
        className="w-full bg-royal text-white rounded-full py-3 mt-8"
      >
        Reset Filters
      </button>

    </aside>
  );

}