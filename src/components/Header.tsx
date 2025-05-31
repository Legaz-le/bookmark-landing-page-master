import { useState } from "react";
import MobileNavbar from "./Navbar";

const Header = () => {
  const[navbar,setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((prev) => !prev);

  }
  return (
    <header className="sm:overflow-hidden md:overflow-visible">
      <nav className="flex justify-between items-center mt-7 mb-20 lg:pr-30">
        <img src="/src/assets/images/logo-bookmark.svg" alt="logo-bookmark" />
        <button className="md:hidden" onClick={toggleNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden gap-9 font-display md:items-center uppercase font-[400] md:flex text-sm">
          <a className="hover:text-Red-400 cursor-pointer transition-colors">Features</a>
          <a className="hover:text-Red-400 cursor-pointer transition-colors">Pricing</a>
          <a className="hover:text-Red-400 cursor-pointer transition-colors">Contact</a>
          <button
                type="submit"
                className="bg-red-500 text-white px-7 py-2 rounded font-display cursor-pointer hover:bg-white hover:text-red-500 border-2 border-transparent hover:border-red-500 transition-all duration-300 whitespace-nowrap"
              >
                Login
              </button>
        </div>
        <MobileNavbar isOpen={navbar} onClose={() => setNavbar(false)}/>
      </nav>
      <section className="flex flex-col-reverse  md:flex-row items-center justify-center gap-8 pb-20  ">
        <div className="flex-1 max-w-2xl text-center lg:text-left intersect:motion-preset-slide-right intersect:delay-100">
          <h1 className="text-3xl font-[500] mb-5 text-Blue-950 lg:text-4xl xl:text-5xl">A Simple Bookmark Manager</h1>
          <p className=" mt-5 mb-5 lg:text-xl text-gray-400 font-[400]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.Try it for
            free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-Blue-600 text-white md:px-3 lg:px-6 py-3 rounded font-display cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-blue-600 transition-all duration-300">
              Get it on Chrome
            </button>
            <button className=" bg-Grey-50 text-gray-700 md:px-3 lg:px-6 py-3 rounded font-display shadow-lg cursor-pointer hover:bg-white hover:text-Blue-950 border-2 border-transparent hover:border-Blue-950 transition-all duration-300">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex-1 relative  intersect:motion-preset-slide-left intersect:delay-100 ">
        <img src="/src/assets/images/illustration-hero.svg" alt="hero" className="w-full  max-w-md mx-auto"/>
        <div className="absolute -bottom-2 w-75 h-55 -right-4 sm:-bottom-3 sm:-right-4 sm:w-72 sm:h-50  lg:-right-10 xl:-right-0  md:w-75 lg:w-106 xl:w-105  lg:h-65 bg-Blue-600 rounded-s-full -z-10"/>
        </div>
      </section>
    </header>
  );
};

export default Header;
