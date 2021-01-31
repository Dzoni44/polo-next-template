import { useState, useEffect } from "react";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  };

  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("scroll", checkScrollTop);

    return () => document.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-400 pt-16 pb-5">
      {showScrollBtn && (
        <button
          onClick={gotoTop}
          className="fixed z-20 right-8 bottom-14 bg-black text-white hover:bg-white hover:text-black hover:border-black focus:outline-none transition transition-colors duration-200 text-xl border border-gray-500 rounded w-10 h-10"
        >
          <FaAngleUp className="m-auto" />
        </button>
      )}

      <div className="container">
        <div className="grid grid-cols-12 md:gap-8 gap-y-6">
          <div className="md:col-span-4 col-span-12">
            <h3 className="title relative text-lg uppercase text-white font-semibold mb-3 py-1">
              Next.js Template
            </h3>
            <p className="md:mr-14">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="md:col-span-4 col-span-12">
            <h3 className="title relative text-lg uppercase text-white font-semibold mb-3 py-1">
              DISCOVER
            </h3>
            <ul>
              <li>
                <Link href="/#">
                  <a className="inline-block my-1 hover:text-white">Features</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="inline-block my-1 hover:text-white">Layouts</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="inline-block my-1 hover:text-white">
                    Corporate
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 col-span-12">
            <h3 className="title relative text-lg uppercase text-white font-semibold mb-3 py-1">
              PAGES
            </h3>
            <ul>
              <li>
                <Link href="/#">
                  <a className="inline-block my-1 hover:text-white">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="inline-block my-1 hover:text-white">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="inline-block my-1 hover:text-white">Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="inline-block my-1 hover:text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-10">
          © {new Date().getFullYear()} Shopsterano - Responsive Multi-Purpose
          Next.js Template by Dzoni. All Rights Reserved.
        </p>
      </div>
      <style jsx>{`
        .title:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          height: 2px;
          width: 40px;
          background: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
