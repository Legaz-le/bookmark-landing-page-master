const Faqs = () => {
  return (
    <section className="flex-col flex items-center justify-center pt-30 pb-20">
      <div className="max-w-2xl px-17 text-center mb-12">
        <h2 className="text-3xl  font-display mb-4 font-[500] text-Blue-950">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 font-[400] font-display text-lg  leading-relaxed">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className=" flex flex-col gap-5 mb-10">
        <div className="border-b border-gray-200  w-120 flex justify-center " />
        <div>
          <p className="font-display"> What is Bookmark?</p>
          <p className="hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div className="border-b border-gray-200  w-135 flex justify-center " />
        <div>
          <p className="font-display"> How can I request a new browser?</p>
          <p className="hidden">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div className="border-b border-gray-200  w-135 flex justify-center " />
        <div>
          <p className="font-display"> Is there a mobile app?</p>
          <p className="hidden">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
        <div className="border-b border-gray-200  w-135 flex justify-center " />
        <div>
          <p className="font-display"> What about other Chromium browsers?</p>
          <p className="hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div className="border-b border-gray-200  w-135 flex justify-center " />
      </div>
      <button className="bg-Blue-600 text-white px-6 py-3 rounded font-display"> More Info</button>
    </section>
  );
};

export default Faqs;
