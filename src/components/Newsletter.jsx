import { useState } from "react";
import { LuMail, LuArrowRight } from "react-icons/lu";

export default function Newsletter() {

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {

    e.preventDefault();

    const emails = JSON.parse(
      localStorage.getItem("royalSubscribers") || "[]"
    );

    if (!emails.includes(email)) {

      localStorage.setItem(
        "royalSubscribers",
        JSON.stringify([...emails, email])
      );

    }

    setSubscribed(true);
    setEmail("");

  }

  return (
    <section className="px-6 md:px-12 py-12">

      <div className="bg-white rounded-3xl p-8 md:p-16 text-center">

        <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto">

          <LuMail size={35} />

        </div>

        <p className="text-sm tracking-widest text-gray-500 mt-6">
          STAY CONNECTED
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Join The Royal Community
        </h2>

        <p className="text-gray-500 mt-4">
          Sign up for our newsletter and discover new collections.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto mt-8"
        >

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full flex-1 bg-gray-100 rounded-full px-6 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-royal text-white rounded-full px-7 py-4"
          >

            Subscribe

            <LuArrowRight size={18} />

          </button>

        </form>

        {subscribed && (

          <p className="text-sm text-gray-600 mt-5">
            Email saved successfully for this demo.
          </p>

        )}

      </div>

    </section>
  );

}