const Contack = () => {
  return (
    <section className=" relative py-20">
      <div
        className="absolute  inset-0 bg-Blue-600 h-full w-screen -z-10"
        style={{
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
          <p className="text-white uppercase tracking-widest text-sm mb-4 font-display">
            35,000+ already joined
          </p>
          <h1 className="text-3xl md:text-1xl font-medium text-white mb-8 leading-tight px-25 font-display">
            <span className="inline-block">Stay up-to-date with what</span>
            <span className="inline-block ml-2">we're doing</span>
          </h1>
          <input
            type="email"
            placeholder="Enter your email address"
            className="py-3 px-4 w-70 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-Grey-50 mr-3"
          />
          <button className="bg-Red-400 text-white px-6 py-3 rounded font-display cursor-pointer hover:bg-white hover:text-Red-400 border-2 border-transparent hover:border-Red-400 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contack;
