import { useState, useEffect } from "react";

import {
  LuChevronLeft,
  LuChevronRight,
  LuTruck,
  LuShieldCheck,
  LuHeadphones
} from "react-icons/lu";

import products from "../data/products";
import useCart from "../hooks/useCart";
import ProductImage from "./ProductImage";

const slideData = [
  {
    id: 16,
    backgroundText: "PRO",
    description: "Experience premium sound with Royal Studio PRO.",
    feature1: "Premium Audio",
    feature2: "Wireless Sound"
  },
  {
    id: 1,
    backgroundText: "5G",
    description: "Experience next-generation smartphone technology.",
    feature1: "Powerful Performance",
    feature2: "Advanced Camera"
  },
  {
    id: 36,
    backgroundText: "BASS",
    description: "Bring your favourite music to life.",
    feature1: "Powerful Bass",
    feature2: "Wireless Audio"
  },
  {
    id: 22,
    backgroundText: "BUDS",
    description: "Enjoy your favourite music anytime, anywhere.",
    feature1: "Compact Design",
    feature2: "Portable Audio"
  },
  {
    id: 12,
    backgroundText: "WATCH",
    description: "Upgrade your everyday lifestyle with smart technology.",
    feature1: "Premium Design",
    feature2: "Everyday Wear"
  },
  {
    id: 31,
    backgroundText: "65W",
    description: "Power up your devices with fast charging.",
    feature1: "Fast Charging",
    feature2: "Compact Design"
  },
  {
    id: 34,
    backgroundText: "POWER",
    description: "Keep your devices powered wherever you go.",
    feature1: "Portable Charging",
    feature2: "Travel Friendly"
  },
  {
    id: 28,
    backgroundText: "GAME",
    description: "Upgrade your gaming and entertainment experience.",
    feature1: "Gaming Audio",
    feature2: "Premium Design"
  }
];

const slides = slideData
  .map((slide) => ({
    ...products.find((product) => product.id === slide.id),
    ...slide
  }))
  .filter((slide) => slide.name);

export default function HeroSlider() {

  const [active, setActive] = useState(0);

  const { addToCart } = useCart();

  const product = slides[active];

  // Automatic Slider

  useEffect(() => {

    if (slides.length === 0) return;

    const timer = setInterval(() => {

      setActive((prev) => (prev + 1) % slides.length);

    }, 3000);

    return () => clearInterval(timer);

  }, []);


  // Previous Slide

  function previousSlide() {

    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  }


  // Next Slide

  function nextSlide() {

    setActive((prev) =>
      (prev + 1) % slides.length
    );

  }

  if (!product) return null;


  return (

    <section className="w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12">

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Left Section */}

        <div className="w-full lg:w-[55%] min-w-0">

          {/* Main Product Image */}

          <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[480px] flex items-center justify-center overflow-hidden">

            <h1 className="absolute text-[90px] sm:text-[140px] lg:text-[190px] font-bold text-black/5 select-none">

              {product.backgroundText}

            </h1>

            <div
              key={product.id}
              className="relative z-10 w-full h-full flex items-center justify-center fade-up"
            >

              <ProductImage
                product={product}
                loading="eager"
                className="w-full h-full object-contain p-4 sm:p-8 floating mix-blend-multiply"
              />

            </div>

          </div>


          {/* Product Thumbnails */}

          <div className="flex items-center justify-between gap-3 mt-8">

            <button
              onClick={previousSlide}
              aria-label="Previous slide"
              className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center hover:bg-white transition-all"
            >

              <LuChevronLeft size={24} />

            </button>


            <div className="flex items-center gap-3 overflow-x-auto py-2">

              {slides.map((item, index) => (

                <button
                  key={item.id}
                  onClick={() => setActive(index)}
                  aria-label={`View ${item.name}`}
                  className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] shrink-0 rounded-full bg-white border-2 overflow-hidden flex items-center justify-center transition-all duration-300
                    ${active === index
                      ? "border-royal"
                      : "border-gray-300 hover:border-royal"
                    }`}
                >

                  <ProductImage
                    product={item}
                    className="w-full h-full object-contain p-1"
                  />

                </button>

              ))}

            </div>


            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center hover:bg-white transition-all"
            >

              <LuChevronRight size={24} />

            </button>

          </div>


          {/* Slider Dots */}

          <div className="flex items-center justify-center gap-2 mt-5">

            {slides.map((item, index) => (

              <button
                key={item.id}
                onClick={() => setActive(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300
                  ${active === index
                    ? "w-8 bg-royal"
                    : "w-2 bg-gray-400"
                  }`}
              />

            ))}

          </div>

        </div>


        {/* Right Section */}

        <div
          key={product.id}
          className="w-full lg:flex-1 min-w-0 fade-up"
        >

          <p className="text-sm tracking-[4px] text-gray-500 uppercase">

            Premium Collection

          </p>


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">

            {product.name}

          </h1>


          <p className="text-base sm:text-lg text-gray-500 mt-5 leading-relaxed">

            {product.description}

          </p>


          {/* Product Features */}

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-white/60 rounded-2xl p-4 sm:p-5">

              <h3 className="text-base sm:text-lg font-semibold">

                {product.feature1}

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Designed for your lifestyle.

              </p>

            </div>


            <div className="bg-white/60 rounded-2xl p-4 sm:p-5">

              <h3 className="text-base sm:text-lg font-semibold">

                {product.feature2}

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Explore our collection.

              </p>

            </div>

          </div>


          {/* Add To Cart Button */}

          <button
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-between gap-4 bg-royal text-white rounded-full px-6 sm:px-8 py-5 mt-8 hover:bg-gold hover:text-black transition-all duration-300"
          >

            <span className="text-xl sm:text-2xl font-bold">

              ₹{product.price.toLocaleString("en-IN")}

            </span>

            <span className="text-base sm:text-lg font-medium">

              Add To Cart

            </span>

          </button>


          {/* Product Information */}

          <div className="flex flex-col gap-4 mt-8 text-gray-600">

            <div className="flex items-center gap-4">

              <LuTruck size={22} />

              <span>Shipping Information</span>

            </div>


            <div className="flex items-center gap-4">

              <LuShieldCheck size={22} />

              <span>Product Information</span>

            </div>


            <div className="flex items-center gap-4">

              <LuHeadphones size={22} />

              <span>Customer Support</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}