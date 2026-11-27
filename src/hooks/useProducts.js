import { useState } from "react";
import products from "../data/products";

export default function useProducts(initialCategory = "", initialSearch = "") {

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(150000);
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("");

  const brands = [...new Set(products.map((product) => product.brand))];

  let filteredProducts = products.filter((product) => {

    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category) &&
      (brand === "" || product.brand === brand) &&
      product.price <= price &&
      product.rating >= rating
    );

  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  function resetFilters() {
    setSearch("");
    setCategory("");
    setBrand("");
    setPrice(150000);
    setRating(0);
    setSort("");
  }

  return {
    search,
    setSearch,
    category,
    setCategory,
    brand,
    setBrand,
    price,
    setPrice,
    rating,
    setRating,
    sort,
    setSort,
    brands,
    filteredProducts,
    resetFilters
  };

}