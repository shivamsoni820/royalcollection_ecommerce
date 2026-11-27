import { useState } from "react";

import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  LuCrown,
  LuSearch,
  LuShoppingBag,
  LuMenu,
  LuX
} from "react-icons/lu";

import useCart from "../hooks/useCart";

export default function Navbar() {

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { totalItems } = useCart();

  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  function handleSearch(e) {

    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/products?search=${encodeURIComponent(search.trim())}`);

    setSearch("");
    setShowSearch(false);
    setShowMenu(false);

  }

  return (
    <header className="w-full px-4 sm:px-6 lg:px-10 py-5">

      <nav className="flex items-center justify-between gap-4">

        <Link to="/" className="flex items-center gap-3">

          <div className="w-[42px] h-[42px] shrink-0 bg-royal text-gold rounded-full flex items-center justify-center">

            <LuCrown size={23} />

          </div>

          <span className="font-bold text-sm sm:text-lg">

            Royal Collection

          </span>

        </Link>


        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-8">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-black"
                  : "text-gray-500 hover:text-black"
              }
            >

              {link.name}

            </NavLink>

          ))}

        </div>


        {/* Icons */}

        <div className="flex items-center gap-4">

          <button
            aria-label="Search"
            onClick={() => setShowSearch(!showSearch)}
          >

            <LuSearch size={21} />

          </button>

          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative"
          >

            <LuShoppingBag size={22} />

            {totalItems > 0 && (

              <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 bg-royal text-white text-[10px] rounded-full flex items-center justify-center">

                {totalItems}

              </span>

            )}

          </Link>

          <button
            aria-label="Toggle navigation"
            className="lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >

            {showMenu
              ? <LuX size={25} />
              : <LuMenu size={25} />
            }

          </button>

        </div>

      </nav>


      {/* Search Box */}

      {showSearch && (

        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 bg-white rounded-xl p-3 mt-5"
        >

          <LuSearch size={20} />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-0 outline-none text-sm"
          />

          <button className="bg-royal text-white px-4 py-2 rounded-lg text-sm">

            Search

          </button>

        </form>

      )}


      {/* Mobile Navigation */}

      {showMenu && (

        <div className="lg:hidden bg-white rounded-xl mt-5 p-4 flex flex-col gap-2">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `p-3 rounded-lg ${
                  isActive
                    ? "bg-royal text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >

              {link.name}

            </NavLink>

          ))}

        </div>

      )}

    </header>
  );
}