import {
  LuAward,
  LuShieldCheck,
  LuPackageCheck,
  LuHeadphones
} from "react-icons/lu";

export default function WhyChooseUs() {

  const features = [
    {
      icon: LuAward,
      title: "Premium Products",
      description: "Discover a carefully selected collection of modern electronics."
    },
    {
      icon: LuShieldCheck,
      title: "Reliable Shopping",
      description: "Enjoy a simple and convenient shopping experience."
    },
    {
      icon: LuPackageCheck,
      title: "Wide Collection",
      description: "Explore smartphones, headphones, speakers and accessories."
    },
    {
      icon: LuHeadphones,
      title: "Dedicated Support",
      description: "Connect with us for your product-related questions."
    }
  ];

  return (
    <section className="px-6 md:px-12 py-16">

      <div className="text-center mb-12">

        <p className="text-sm tracking-widest text-gray-500">
          THE ROYAL EXPERIENCE
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Why Choose Royal Collection?
        </h2>

        <p className="text-gray-500 mt-4">
          Technology, quality and style in one place.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto">

                <Icon size={35} />

              </div>

              <h3 className="text-xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-7 mt-3">
                {item.description}
              </p>

            </div>
          );

        })}

      </div>

    </section>
  );

}