import  { useState, useEffect } from "react";


const Features = () => {
  const [activeTab, setActiveTab] = useState("simple");
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    { id: "simple", label: "Simple Bookmarking" },
    { id: "speedy", label: "Speedy Searching" },
    { id: "easy", label: "Easy Sharing" },
  ];
  

  // Animation trigger
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="flex-col flex items-center justify-center pt-20 -pb-20  intersect:motion-preset-slide-up intersect:delay-100">
      <div className="max-w-2xl px-6 text-center mb-12   intersect:motion-preset-slide-up">
        <h2 className="text-3xl  font-display mb-4 font-[500] text-Blue-950">
          Features
        </h2>
        <p className="text-gray-400 font-[400] font-display text-lg  leading-relaxed">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto flex-col  flex mb-12  intersect:motion-preset-slide-up">
        <div className="flex flex-col  md:flex-row items-center gap-6 md:gap-16  font-display mb-8  justify-center ">
          <div className="border-b border-gray-200  w-85 flex justify-center md:hidden " />
          {tabs.map((tab) => (
            <>
            <div
              key={tab.id}
              className="relative pb-4 cursor-pointer"
              onClick={() => setActiveTab(tab.id)}
            >
              <span
                className={`transition-colors duration-300  ${
                  activeTab === tab.id
                    ? "text-Blue-950 font-medium "
                    : "text-gray-400 hover:text-Red-400  "
                }`}
              >
                {tab.label}
              </span>

              {/* Animated indicator */}
              <div
                className={`absolute -bottom-6 md:-bottom-8 left-0 h-1 bg-Red-400 rounded transition-all duration-300 ${
                  activeTab === tab.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </div>
            <div className="border-b border-gray-200 w-85 flex justify-center md:hidden"></div>
          </>
          ))}
        </div>
        <div className="w-full md:flex justify-center hidden">
          <div className="border-b border-gray-200  w-148 flex justify-center " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 pb-20">
        <div className="flex-1  relative intersect:motion-preset-slide-right ">
          <div className="relative z-10">
            <div
              className={`transition-all duration-500 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {activeTab === "simple" && (
                <img
                  src="/src/assets/images/illustration-features-tab-1.svg"
                  alt="Simple Bookmarking"
                  className="w-full max-w-md  mx-auto"
                />
              )}
              {activeTab === "speedy" && (
                <img
                  src="/src/assets/images/illustration-features-tab-2.svg"
                  alt="Speedy Searching"
                  className="w-full max-w-md mx-auto"
                />
              )}
              {activeTab === "easy" && (
                <img
                  src="/src/assets/images/illustration-features-tab-3.svg"
                  alt="Easy Searching"
                  className="w-full max-w-md mx-auto"
                />
              )}
              <div className="absolute -bottom-10 w-80 h-57 -left-4 lg:-bottom-15 lg:-left-10 md:w-82 xl:w-120 lg:w-113  sm:w-80 sm:-bottom-10 sm:-left-4  sm:h-53 lg:h-70 bg-Blue-600 rounded-e-full -z-10" />
            </div>
          </div>
        </div>
        <div className="flex-1 intersect:motion-preset-slide-left mt-15 md:mt-0">
          <div className="text-center lg:text-left max-w-2xl ">
            <div
              className={`transition-all duration-500  ${
                isAnimating
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
              }`}
            >
              {activeTab === "simple" && (
                <>
                  <h3 className="text-3xl md:text-3xl font-display font-medium mb-6 text-Blue-950">
                    Bookmark in one click
                  </h3>
                  <p className="text-gray-400 font-display text-[1.1rem] leading-relaxed mb-8">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                </>
              )}
              {activeTab === "speedy" && (
                <>
                  <h3 className="text-3xl md:text-4xl font-display font-medium mb-6 text-blue-950 ">
                    Intelligent search
                  </h3>
                  <p className="text-gray-400 font-display text-lg leading-relaxed mb-8">
                    Our powerful search feature will help you find saved sites
                    in no time. No need to trawl through all of your bookmarks.
                  </p>
                </>
              )}
              {activeTab === "easy" && (
                <>
                  <h3 className="text-3xl md:text-4xl font-display font-medium mb-6 text-blue-950">
                    Share your bookmarks
                  </h3>
                  <p className="text-gray-400 font-display text-lg leading-relaxed mb-8">
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a
                    button.
                  </p>
                </>
              )}
              <button className={`bg-Blue-600 text-white px-6 py-3 rounded-md font-display shadow-md
               hover:bg-white hover:text-Blue-600 hover:border-2 hover:border-Blue-600 transition-all
               ${
                  isAnimating ? 'opacity-0' : 'opacity-100 '
                }`}>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
