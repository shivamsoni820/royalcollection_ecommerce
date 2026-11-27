import { useState } from "react";

export default function usePagination(products, limit = 12) {

  const [page, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / limit);

  const currentPage = Math.min(page, Math.max(1, totalPages));

  const startIndex = (currentPage - 1) * limit;

  const currentProducts = products.slice(
    startIndex,
    startIndex + limit
  );

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentProducts
  };

}