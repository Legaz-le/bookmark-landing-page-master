import React from "react";
const Header = () => {
  return (
    <header>
      <nav className="flex align-center justify-between  mt-10 mb-20 pr-25">
        <img src="/src/assets/images/logo-bookmark.svg" alt="logo-bookmark" />
        <div className="flex gap-9 font-display uppercase">
          <a>Features</a>
          <a>Pricing</a>
          <a>Contact</a>
          <a>Login</a>
        </div>
      </nav>
      <section className=" flex flex-col lg:flex-row items-center gap-8 pb-20">
        <div className="flex-1">
          <h1 className="text-5xl font-medium mb-5">A Simple Bookmark Manager</h1>
          <p className="text-xl mt-5 mb-5 text-gray-400 font-[400]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.Try it for
            free.
          </p>
          <div className="flex gap-4">
            <button className="bg-Blue-600 text-white px-6 py-3 rounded font-display">
              Get it on Chrome
            </button>
            <button className=" bg-Grey-50 text-gray-700 px-6 py-3 rounded font-display shadow-lg">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex-1 relative inline-block">
        <img src="/src/assets/images/illustration-hero.svg" alt="hero"/>
        <div className="absolute -bottom-2 -right-10 w-100 h-65 bg-Blue-600 rounded-s-full -z-10"/>
        </div>
      </section>
    </header>
  );
};

export default Header;
