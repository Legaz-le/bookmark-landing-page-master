import FaqSection from "./data/Faq";

const Faqs = () => {
  return (
    <section className="flex-col flex items-center justify-center pt-30 pb-20 ">
      <div className="max-w-2xl md:px-17 text-center mb-12 intersect:motion-preset-slide-up intersect:delay-300">
        <h2 className="text-3xl  font-display mb-4 font-[500] text-Blue-950 ">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 font-[400] font-display text-lg  leading-relaxed">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
        <FaqSection />
      <button className="bg-Blue-600 mt-10
       text-white px-6 py-3 rounded font-display cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-blue-600 transition-all duration-300"> More Info</button>
    </section>
  );
};

export default Faqs;
