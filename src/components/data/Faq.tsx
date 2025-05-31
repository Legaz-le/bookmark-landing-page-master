import { useState } from "react";

const FaqSection = () => {
  // Fix the state type to allow string or null
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const faqItems = [
    {
      id: "first",
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      id: "second",
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: "third",
      question: "Is there a mobile app?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
    {
      id: "fourth",
      question: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
  ];

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="border-b border-gray-200 w-full"
        data-intersect
        intersect-once
        intersect:motion-preset-slide-right
      />
      {faqItems.map((item) => (
        <div className="mb-1">
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleItem(item.id)}
            data-intersect
            intersect-once
            intersect:motion-preset-slide-right
          >
            <p className="font-display hover:text-Red-400 text-lg">
              {item.question}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              className={`transform transition-transform duration-300 ${
                activeItem === item.id ? "rotate-180 text-Red-400" : "text-Blue-600"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeItem === item.id
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-display text-gray-500 pt-2 pb-4">
              {item.answer}
            </p>
          </div>

          {/* Divider */}
          <div
            className="border-b border-gray-200 w-full"
            data-intersect
            intersect-once
            intersect:motion-preset-slide-right
          />
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
