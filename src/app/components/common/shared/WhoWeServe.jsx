import React from "react";
import SVG from "react-inlinesvg";

const WhoWeServe = () => {
  const services = [
    {
      id: "client1",
      title: "Small Business",
      icon: "/assets/images/home/WhoWeServe/icon1.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
    },
    {
      id: "client2",
      title: "Franchise",
      icon: "/assets/images/home/WhoWeServe/icon2.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
    },
    {
      id: "client3",
      title: "Fast Casual",
      icon: "/assets/images/home/WhoWeServe/icon3.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
    },
    {
      id: "client4",
      title: "Multi-Location Groups",
      icon: "/assets/images/home/WhoWeServe/icon4.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
    },
    {
      id: "client5",
      title: "Casual Dining",
      icon: "/assets/images/home/WhoWeServe/icon5.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
    },
    {
      id: "client6",
      title: "Fine Dining",
      icon: "/assets/images/home/WhoWeServe/icon6.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
    },
  ];

  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center">
        <h2 className="main-heading mb-12 text-secondaryColor">
          Who <span className="text-mainColor">We</span> Serve{" "}
          <span className="text-mainColor">?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, id }) => (
  <a href={`#${id}`}>
    <article className="flex flex-col justify-center items-center p-8 rounded-xl relative group overflow-hidden min-h-[200px]">
      <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
        {
          <SVG
            src={icon}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[41px] justify-self-center svg-main-color"
          />
        }
        <h3 className="mt-5 text-xl font-bold text-secondaryColor">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-mainColor opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-6 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={icon}
            alt={`${title} icon`}
            className="object-contain w-[41px] filter brightness-0 invert"
          />
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-white text-lg text-center leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  </a>
);

export default WhoWeServe;
