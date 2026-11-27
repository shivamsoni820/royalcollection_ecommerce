import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

export default function PremiumBanner({
  label,
  title,
  description,
  image,
  backgroundText,
  link
}) {

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-6">

      <div className="bg-royal text-white rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 overflow-hidden">

        <div className="w-full lg:w-1/2">

          <p className="text-gold text-xs tracking-widest">

            {label}

          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">

            {title}

          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-7 mt-5">

            {description}

          </p>

          <Link
            to={link}
            className="inline-flex items-center gap-3 bg-gold text-black px-6 py-3 rounded-full mt-6"
          >

            Explore Collection

            <LuArrowRight size={18} />

          </Link>

        </div>

        <div className="relative w-full lg:w-1/2 h-[240px] sm:h-[320px] flex items-center justify-center overflow-hidden">

          <h2 className="absolute text-[70px] sm:text-[110px] font-black text-white/5">

            {backgroundText}

          </h2>

          {image && (

            <img
              src={image}
              alt={title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="relative w-full h-full object-contain floating rounded-2xl"
            />

          )}

        </div>

      </div>

    </section>
  );
}