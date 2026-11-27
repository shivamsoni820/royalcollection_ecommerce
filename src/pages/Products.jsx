import { useEffect } from "react";
import { LuSearch, LuPackageOpen } from "react-icons/lu";

import useProducts from "../hooks/useProducts";
import usePagination from "../hooks/usePagination";

import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function Products() {

  const params = new URLSearchParams(window.location.search);

  const filters = useProducts(
    params.get("category") || "",
    params.get("search") || ""
  );

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentProducts
  } = usePagination(filters.filteredProducts, 12);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    filters.search,
    filters.category,
    filters.brand,
    filters.price,
    filters.rating,
    filters.sort,
    setCurrentPage
  ]);

  return (
    <section className="px-6 md:px-12 py-10">

      <p className="text-sm tracking-widest text-gray-500">
        ROYAL COLLECTION
      </p>

      <h1 className="text-5xl font-bold mt-3">
        Explore Products
      </h1>

      <p className="text-gray-500 mt-3">
        Discover premium technology for your lifestyle.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 mt-10 items-start">

        <ProductFilter filters={filters} />

        <div className="flex-1 w-full min-w-0">

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 flex-1 min-w-[200px]">

              <LuSearch size={20} />

              <input
                type="text"
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => filters.setSearch(e.target.value)}
                className="w-full outline-none"
              />

            </div>

            <select
              value={filters.sort}
              onChange={(e) => filters.setSort(e.target.value)}
              className="bg-white rounded-full px-5 py-3 outline-none"
            >
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

          </div>

          <p className="text-gray-500 text-sm mb-6">
            {filters.filteredProducts.length} Products Found
          </p>

          {currentProducts.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[24px]">

              {currentProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-3xl py-24 flex flex-col items-center gap-4">

              <LuPackageOpen size={60} className="text-gray-400" />

              <h2 className="text-2xl font-semibold">
                No Products Found
              </h2>

              <p className="text-gray-500">
                Try changing your search or filters.
              </p>

              <button
                onClick={filters.resetFilters}
                className="bg-royal text-white px-6 py-3 rounded-full"
              >
                Reset Filters
              </button>

            </div>

          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />

        </div>

      </div>

    </section>
  );

}