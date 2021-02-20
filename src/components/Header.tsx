import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Brand from "./Brand";

const HeaderLink: React.FC<{ url: string; display: string }> = ({
  url,
  display,
}) => {
  return (
    <Link href={url}>
      <a className="block font-semibold lg:inline-block hover:text-blue-500 duration-300 mr-6">
        {display}
      </a>
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  return (
    <>
      <header className="mb-6 lg:mb-12">
        <div className="m-auto py-2 items-center justify-between flex lg:h-16 lg:py-4 lg:mb-20">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <a className="text-gray-500 hover:text-blue-500">
                <Brand height={32} width={32} />
              </a>
            </Link>
          </div>
          <nav className="hidden md:block items-center text-gray-500 lg:flex lg:w-auto">
            <div className="text-lg lg:flex-grow">
              <HeaderLink url="/posts" display="Writing" />
              <HeaderLink url="/projects" display="Projects" />
              <HeaderLink url="/resume" display="Resume" />
            </div>
          </nav>
          <div
            className="block md:hidden"
            onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen && (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {!isMobileMenuOpen && (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="pb-4 pt-2 pl-2 space-y-2 border-b border-gray-400 text-gray-500">
            <HeaderLink url="/posts" display="Writing" />
            <HeaderLink url="/projects" display="Projects" />
            <HeaderLink url="/resume" display="Resume" />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
