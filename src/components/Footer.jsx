import { Link } from "react-router-dom";

import {
  LuCrown,
  LuMail,
  LuPhone,
  LuMapPin,
  LuArrowUpRight
} from "react-icons/lu";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Shopping Cart", path: "/cart" }
  ];

  const categories = [
    { name: "Mobiles", slug: "mobiles" },
    { name: "Mobile Accessories", slug: "mobile-accessories" },
    { name: "Headphones & Earbuds", slug: "headphones" },
    { name: "Chargers", slug: "chargers" },
    { name: "Speakers", slug: "speakers" }
  ];

  return (
    <footer className="bg-royal text-white rounded-t-3xl px-6 md:px-12 pt-14 pb-6 mt-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center">

              <LuCrown size={26} />

            </div>

            <h2 className="text-xl font-bold">
              Royal Collection
            </h2>

          </div>

          <p className="text-sm text-gray-400 leading-7 mt-6">
            Discover premium electronics and accessories.
            Experience technology with style and luxury.
          </p>

          <a
            href="https://wa.me/918209855879"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center mt-6 hover:bg-gold hover:text-black transition-all"
          >

            <FaWhatsapp size={22} />

          </a>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">

            {links.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-gray-400 hover:text-gold"
              >
                {link.name}
              </Link>

            ))}

          </div>

        </div>

        {/* Categories */}

        <div>

          <h3 className="text-lg font-semibold mb-6">
            Categories
          </h3>

          <div className="flex flex-col gap-4">

            {categories.map((category) => (

              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="text-sm text-gray-400 hover:text-gold"
              >
                {category.name}
              </Link>

            ))}

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-lg font-semibold mb-6">
            Contact Us
          </h3>

          <a
            href="tel:+918209855879"
            className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold"
          >

            <LuPhone size={18} className="shrink-0" />

            +91 8209855879

          </a>

          <a
            href="mailto:shivamsonishadhev@gmail.com"
            className="flex items-center gap-3 text-sm text-gray-400 mt-5 hover:text-gold"
          >

            <LuMail size={18} className="shrink-0" />

            <span className="break-all">
              shivamsonishadhev@gmail.com
            </span>

          </a>

          <div className="flex items-center gap-3 text-sm text-gray-400 mt-5">

            <LuMapPin size={18} className="shrink-0" />

            Jaipur, Rajasthan, India

          </div>

        </div>

      </div>

      <hr className="border-white/10 mt-12 mb-6" />

      <div className="flex flex-wrap items-center justify-between gap-4">

        <p className="text-sm text-gray-400">

          © {new Date().getFullYear()} Royal Collection.
          All Rights Reserved.

        </p>
        <p>Crafted By Shivam Soni</p>

        <button
          onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth"
          })}
          className="flex items-center gap-2 text-sm hover:text-gold"
        >

          Back To Top

          <LuArrowUpRight size={18} />

        </button>

      </div>

    </footer>
  );

}