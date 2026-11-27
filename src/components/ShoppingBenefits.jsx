import {
  LuTruck,
  LuShieldCheck,
  LuHeadphones,
  LuRefreshCcw
} from "react-icons/lu";

export default function ShoppingBenefits() {

  const benefits = [
    {
      icon: LuTruck,
      title: "Free Shipping",
      description: "On eligible orders"
    },
    {
      icon: LuShieldCheck,
      title: "Premium Quality",
      description: "Quality comes first"
    },
    {
      icon: LuRefreshCcw,
      title: "Easy Returns",
      description: "Convenient shopping"
    },
    {
      icon: LuHeadphones,
      title: "Customer Support",
      description: "We are here to help"
    }
  ];

  return (
    <section className="px-6 md:px-12 py-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {benefits.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 bg-white rounded-2xl p-6"
            >

              <div className="w-14 h-14 shrink-0 bg-surface rounded-full flex items-center justify-center">

                <Icon size={25} />

              </div>

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>

              </div>

            </div>
          );

        })}

      </div>

    </section>
  );

}