import { useState } from "react";
import { LuPlus, LuMinus, LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function FAQ() {

  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "What products are available at Royal Collection?",
      answer: "We offer smartphones, mobile accessories, headphones, wireless earbuds, chargers and premium speakers."
    },
    {
      question: "How can I place an order?",
      answer: "Explore our products and add your favourite items to the shopping cart. Checkout is currently available in demo mode."
    },
    {
      question: "Is delivery free?",
      answer: "Free delivery is currently displayed in our demo shopping cart."
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Please contact our customer support team for information about returns and exchanges."
    },
    {
      question: "Which payment methods are accepted?",
      answer: "Online payment integration is currently unavailable."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our support team through WhatsApp, phone or email using our Contact page."
    },
    {
      question: "Will my cart be saved after refreshing?",
      answer: "Yes, your shopping cart is automatically saved in your browser."
    },
    {
      question: "How can I track my order?",
      answer: "Order tracking is not currently available."
    }
  ];

  function toggleFAQ(index) {

    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }

  }

  return (
    <section className="w-full px-6 md:px-12 py-16">

      {/* Heading */}

      <div className="text-center mb-12">

        <p className="text-sm tracking-widest text-gray-500">
          HAVE QUESTIONS?
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-500 mt-4">
          Everything you need to know about Royal Collection.
        </p>

      </div>


      {/* FAQ Questions */}

      <div className="max-w-[1000px] mx-auto flex flex-col gap-4">

        {faqs.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200"
          >

            <button
              onClick={() => toggleFAQ(index)}
              aria-expanded={active === index}
              className="w-full flex items-center justify-between gap-5 p-6 text-left"
            >

              <div className="flex items-center gap-5">

                <span className="text-gray-400 text-sm">

                  {String(index + 1).padStart(2, "0")}

                </span>

                <h3 className="text-base md:text-lg font-semibold">

                  {item.question}

                </h3>

              </div>


              <div
                className={`w-[40px] h-[40px] shrink-0 rounded-full flex items-center justify-center transition-all duration-300
                ${active === index
                  ? "bg-gold text-black"
                  : "bg-royal text-white"
                }`}
              >

                {active === index
                  ? <LuMinus size={20} />
                  : <LuPlus size={20} />
                }

              </div>

            </button>


            {/* Answer */}

            <div
              className={`grid transition-all duration-300
              ${active === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
              }`}
            >

              <div className="overflow-hidden">

                <p className="text-gray-500 leading-7 px-6 pb-6">

                  {item.answer}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* Contact Button */}

      <div className="text-center mt-12">

        <h3 className="text-2xl font-semibold">
          Still Have Questions?
        </h3>

        <p className="text-gray-500 mt-3">
          Our team is here to help you.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-royal text-white rounded-full px-8 py-4 mt-6 hover:bg-black transition-all"
        >

          Contact Us

          <LuArrowRight size={20} />

        </Link>

      </div>

    </section>
  );

}