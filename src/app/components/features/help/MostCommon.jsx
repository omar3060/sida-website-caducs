import React from "react";
const TopicCard = ({ icon, title, description }) => {
  return (
    <article className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-9 py-5 my-auto bg-white rounded-3xl min-w-60 shadow-[0px_69px_19px_rgba(0,0,0,0)] w-[284px] max-md:px-5">
      <div className="flex flex-col items-center text-center ">
        <img
          src={icon}
          className="object-contain self-center aspect-square w-[67px]"
          alt={title}
        />
        <h3 className="mt-3 text-xl font-bold">{title}</h3>
        <p className="mt-3 text-xs">{description}</p>
      </div>
    </article>
  );
};

const MostCommon = () => {
  const topics = [
    {
      icon: "/assets/images/help/icon1.svg",
      title: "Pos",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "/assets/images/help/icon2.svg",
      title: "CDS",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "/assets/images/help/icon3.svg",
      title: "KDS",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "/assets/images/help/icon4.svg",
      title: "Printers",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "/assets/images/help/icon5.svg",
      title: "Inventory",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <section className="section-style x-spacing py-6">
    <div className="flex flex-col items-center ">
        <h2 className="main-heading mb-12 text-4xl">
            <span className="text-mainColor">Most</span> Common{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:max-w-[992px] sm:max-w-[700px] justify-items-center">
            {topics.map((topic, index) => (
                <TopicCard key={index} {...topic} />
            ))}
        </div>
    </div>
</section>
  );
};

export default MostCommon;
