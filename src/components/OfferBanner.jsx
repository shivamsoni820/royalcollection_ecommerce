import { Link } from "react-router-dom";
import { LuArrowRight, LuBadgePercent } from "react-icons/lu";

export default function OfferBanner() {

  return (
    <section className="px-6 md:px-12 py-8">

      <div className="bg-gold rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div>

          <p className="text-sm tracking-widest">
            THE ROYAL SALE
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Upgrade Your Lifestyle.
          </h2>

          <h3 className="text-5xl md:text-7xl font-extrabold mt-4">
            Up to 50% OFF
          </h3>

          <p className="mt-5 text-gray-700">
            Discover exclusive deals on premium electronics.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-royal text-white rounded-full px-8 py-4 mt-8"
          >

            Shop Now

            <LuArrowRight size={20} />

          </Link>

        </div>

        <div className="w-56 h-56 bg-royal text-gold rounded-full flex items-center justify-center floating">

          <LuBadgePercent size={120} />

        </div>

      </div>

    </section>
  );

}