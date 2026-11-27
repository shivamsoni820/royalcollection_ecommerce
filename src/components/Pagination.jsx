import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage
}) {

  if (totalPages <= 1) return null;

  function changePage(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex items-center justify-center gap-3 py-10">

      <button
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center disabled:opacity-40"
      >
        <LuChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (

        <button
          key={index}
          onClick={() => changePage(index + 1)}
          className={`w-10 h-10 rounded-full
          ${currentPage === index + 1
            ? "bg-royal text-white"
            : "bg-white"}`}
        >
          {index + 1}
        </button>

      ))}

      <button
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center disabled:opacity-40"
      >
        <LuChevronRight size={20} />
      </button>

    </div>
  );

}