import {
  LuCrown,
  LuShieldCheck,
  LuTruck,
  LuHeadphones,
  LuAward
} from "react-icons/lu";

import { Link } from "react-router-dom";

export default function About() {

  const services = [
    {
      icon: LuAward,
      title: "Premium Quality",
      description: "Discover our premium electronics collection."
    },
    {
      icon: LuTruck,
      title: "Fast Delivery",
      description: "Convenient delivery for your favourite products."
    },
    {
      icon: LuShieldCheck,
      title: "Trusted Shopping",
      description: "A simple and reliable shopping experience."
    },
    {
      icon: LuHeadphones,
      title: "Customer Support",
      description: "We are here to help you."
    }
  ];

  return (
    <section className="px-6 md:px-12 py-12">

      <div className="flex flex-col lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2">

          <p className="text-sm tracking-widest text-gray-500">
            OUR STORY
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Technology Meets
            <span className="text-gold"> Luxury.</span>
          </h1>

          <p className="text-gray-600 leading-8 mt-6">
            Welcome to Royal Collection, your destination
            for premium electronics and modern accessories.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            Our collection includes smartphones, headphones,
            wireless earbuds, chargers, speakers and mobile
            accessories designed for your everyday lifestyle.
          </p>

          <Link
            to="/products"
            className="inline-block bg-royal text-white px-8 py-4 rounded-full mt-8"
          >
            Explore Collection
          </Link>

        </div>

        <div className="w-full lg:w-1/2 h-[380px] bg-royal rounded-3xl flex flex-col items-center justify-center text-white">

          <LuCrown
            size={120}
            className="text-gold floating"
          />

          <h2 className="text-4xl font-bold mt-8">
            Royal Collection
          </h2>

          <p className="text-gray-400 tracking-widest mt-3">
            EXPERIENCE PREMIUM
          </p>

        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us?
        </h2>

        <p className="text-gray-500 text-center mt-3">
          Designed around your shopping experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center">

                  <Icon size={30} />

                </div>

                <h3 className="text-xl font-semibold mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {service.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );

}