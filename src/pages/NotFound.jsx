import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

export default function NotFound() {

  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-[130px] font-extrabold text-gold leading-none">
        404
      </h1>

      <h2 className="text-4xl font-bold mt-5">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="flex items-center gap-3 bg-royal text-white rounded-full px-8 py-4 mt-8"
      >

        <LuArrowLeft size={20} />

        Back To Home

      </Link>

    </div>
  );

}