import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen bg-white p-2 sm:p-4 lg:p-6">

      <div className="w-full max-w-[1600px] mx-auto min-h-screen bg-surface rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col">

        <Navbar />

        <main className="w-full min-w-0 flex-1">

          <Outlet />

        </main>

        <Footer />

      </div>

      <a
        href="https://wa.me/918209855879"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-4 right-4 z-50 w-[48px] h-[48px] sm:w-[55px] sm:h-[55px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl"
      >

        <FaWhatsapp size={28} />

      </a>

    </div>
  );
}