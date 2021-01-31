import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import data from "../data/navLinks.json";

const Header = ({ isHomePage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`relative z-20 py-4 ${isHomePage ? `` : `bg-gray-800`}`}>
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8 md:col-span-3">
            <h1>
              <Link href="/">
                <a className="font-semibold uppercase text-white text-4xl">
                  Logo
                </a>
              </Link>
            </h1>
          </div>

          <div className="col-span-4 md:col-span-9">
            <nav
              className={`md:static fixed z-20 h-full top-0 md:bg-transparent bg-black bg-opacity-90 w-full overflow-auto ${
                isNavOpen ? `left-0` : `left-full`
              }`}
            >
              <ul className="md:mt-0 mt-12 md:text-right">
                {data.map((item) => {
                  const { id, url, text } = item;

                  return (
                    <li key={id} className="md:inline-block">
                      <Link href={url}>
                        <a className="block text-white hover:opacity-50 md:border-b-0 border-b border-white border-opacity-30 uppercase mx-2 p-2">
                          {text}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              onClick={toggleNav}
              className="text-2xl relative z-30 py-2 px-3 rounded-md md:hidden float-right focus:outline-none text-white"
            >
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
