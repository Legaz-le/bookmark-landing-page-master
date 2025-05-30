const Features = () => {
  return (
    <section className="flex-col flex items-center justify-center pt-20-pb-20 ">
      <div className="max-w-2xl px-6 text-center mb-12">
        <h2 className="text-3xl  font-display mb-4 font-[500] text-Blue-950">
          Features
        </h2>
        <p className="text-gray-400 font-[400] font-display text-lg  leading-relaxed">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto flex-col  flex mb-12">
        <div className="flex flex-wrap gap-6 md:gap-16  font-display mb-8  justify-center ">
          <a className="relative pb-4 cursor-pointer ">
            Simple Bookmarking
            <div className="absolute -bottom-8 -left-10 w-55 h-1 bg-Red-400 rounded"></div>
          </a>
          <a className="pb-4 cursor-pointer text-gray-400 hover:text-Red-400 transition-colors">
            Speedy Searching
          </a>
          <a className="pb-4 cursor-pointer text-gray-400 hover:text-Red-400 transition-colors">
            Easy Sharing
          </a>
        </div>
         <div className="w-full flex justify-center">
        <div className="border-b border-gray-200  w-148 flex justify-center "/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 pb-20">
        <div className="flex-1 relative ">
          <div className="relative z-10">
            <img
              src="/src/assets/images/illustration-features-tab-1.svg"
              alt="features-1"
              className=""
            />
          </div>
          <img
            src="/src/assets/images/illustration-features-tab-2.svg"
            alt="features-2"
            className="hidden"
          />
          <img
            src="/src/assets/images/illustration-features-tab-3.svg"
            alt="features-3"
            className="hidden"
          />
          <div className="absolute -bottom-15 -left-18 w-135 h-82 bg-Blue-600 rounded-e-full -z-10" />
        </div>
        <div className="flex-1 ">
          <div className="p-13">
            <h3 className="text-3xl md:text-3xl font-display font-medium mb-6">
              Bookmark in one click
            </h3>
            <p className="text-gray-400 font-display text-[1.1rem] leading-relaxed mb-8">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="bg-Blue-600 text-white px-6 py-3 rounded font-display cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-blue-600 transition-all duration-300">
              More Info
            </button>
          </div>
          <div className="hidden">
            Intelligent search Our powerful search feature will help you find
            saved sites in no time at all. No need to trawl through all of your
            bookmarks. More Info Share your bookmarks Easily share your
            bookmarks and collections with others. Create a shareable link that
            you can send at the click of a button. More Info
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
