import { useState } from "react";

import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuSend,
  LuClock
} from "react-icons/lu";

import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    const message = `
Hello Royal Collection,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}
    `;

    const url =
      `https://wa.me/918209855879?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

  }

  return (
    <section className="px-6 md:px-12 py-12">

      <p className="text-sm tracking-widest text-gray-500">
        GET IN TOUCH
      </p>

      <h1 className="text-5xl font-bold mt-3">
        Contact Us
      </h1>

      <p className="text-gray-500 mt-3">
        Have a question? We would love to hear from you.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 mt-10">

        {/* Left Section */}

        <div className="w-full lg:w-[35%] bg-royal text-white rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-4">
            Contact Royal Collection for product information
            and shopping assistance.
          </p>

          <div className="flex items-center gap-4 mt-10">

            <LuPhone size={24} className="text-gold shrink-0" />

            <div>

              <p className="text-sm text-gray-400">
                Phone
              </p>

              <a href="tel:+918209855879">
                +91 8209855879
              </a>

            </div>

          </div>

          <div className="flex items-center gap-4 mt-8">

            <LuMail size={24} className="text-gold shrink-0" />

            <div className="min-w-0">

              <p className="text-sm text-gray-400">
                Email
              </p>

              <a
                href="mailto:shivamsonishadhev@gmail.com"
                className="break-all text-sm"
              >
                shivamsonishadhev@gmail.com
              </a>

            </div>

          </div>

          <div className="flex items-center gap-4 mt-8">

            <LuMapPin size={24} className="text-gold shrink-0" />

            <div>

              <p className="text-sm text-gray-400">
                Location
              </p>

              <p>Jaipur, Rajasthan, India</p>

            </div>

          </div>

          <div className="flex items-center gap-4 mt-8">

            <LuClock size={24} className="text-gold shrink-0" />

            <div>

              <p className="text-sm text-gray-400">
                Customer Support
              </p>

              <p>Contact us for assistance</p>

            </div>

          </div>

          <a
            href="https://wa.me/918209855879"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gold text-black rounded-full py-4 mt-10"
          >

            <FaWhatsapp size={22} />

            Chat on WhatsApp

          </a>

        </div>

        {/* Right Section */}

        <div className="flex-1 min-w-0 bg-white rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-8"
          >

            <div>

              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-black"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-black"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-black"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Your Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                required
                className="w-full bg-gray-100 rounded-xl p-4 outline-none resize-none focus:ring-1 focus:ring-black"
              />

            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-royal text-white rounded-full py-4 hover:bg-black"
            >

              Send Message

              <LuSend size={20} />

            </button>

          </form>

        </div>

      </div>

    </section>
  );

}