const Pricing = () => {
  return (
    <section className="flex-col flex items-center justify-center pt-30 pb-20 ">
      <div className="max-w-2xl px-15 text-center mb-12 intersect:motion-preset-slide-up intersect:delay-300">
        <h2 className="text-3xl  font-display mb-4 font-[500] text-Blue-950">
          Download the extension
        </h2>
        <p className="text-gray-400 font-[400] font-display text-lg  leading-relaxed">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 px-4">
        <div className="max-w-xs w-full  flex flex-col  items-center rounded-2xl shadow-lg pt-8 pb-6 relative z-20 intersect:motion-preset-slide-up motion-delay-100">
          <img
            src="/src/assets/images/logo-chrome.svg"
            alt="logo-chrome"
            className="w-22 mb-6"
          />
          <h3 className="font-display font-[500] text-xl mb-1 ">
            Add to Chrome
          </h3>
          <p className="text-sm text-gray-400 mb-8">Minimum version 62</p>
          <div className="w-full py-4">
          <img
            src="/src/assets/images/bg-dots.svg"
            alt="Dotted line"
            className="w-full "
          />
          </div>
          <button className="w-5/6 py-3 bg-Blue-600 text-white rounded-md font-display hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-blue-600 transition-all duration-300 cursor-pointer">Add & Install Extension</button>
        </div>
        <div className="max-w-xs w-full flex flex-col items-center rounded-2xl shadow-lg pt-8 pb-6 mt-10 md:mt-16 relative z-20 intersect:motion-preset-slide-up motion-delay-200">
          <img
            src="/src/assets/images/logo-firefox.svg"
            alt="logo-firefox"
            className="w-22 mb-6"
          />
          <h3 className="font-display font-[500] text-xl mb-1">Add to Firefox</h3>
          <p className="text-sm text-gray-400 mb-8">Minimum version 55</p>
          <div className="w-full py-4">
          <img src="/src/assets/images/bg-dots.svg" alt="dots" className="w-full" />
          </div>
          <button className="w-5/6 py-3 bg-Blue-600 text-white rounded-md font-display hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-blue-600 transition-all duration-300 cursor-pointer">Add & Install Extension</button>
        </div>
        <div className="max-w-xs w-full  flex flex-col  items-center rounded-2xl shadow-lg pt-8 pb-6 mt-20 md:mt-32 relative z-30 intersect:motion-preset-slide-up motion-delay-300">
          <img
            src="/src/assets/images/logo-opera.svg"
            alt="logo-opera"
            className="w-22 mb-6"
          />
          <h3 className="font-display font-[500] text-xl mb-1">Add to Opera</h3>
          <p className="text-sm text-gray-400 mb-8">Minimum version 46</p>
          <div className="w-full py-4">
          <img
            src="/src/assets/images/bg-dots.svg"
            alt="Dotted line"
            className="w-full"
          />
          </div>
          <button className="w-5/6 py-3 bg-Blue-600 text-white rounded-md font-display hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-blue-600 transition-all duration-300 cursor-pointer">Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
