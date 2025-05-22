import Image from "next/image";
import React from "react";

const FeaturesService = ({ features, featuresTitle }) => {
  return (
    <section className="section-style x-spacing box-border text-center pt-10 md:pt-16 lg:pt-20">
      <h2 className="main-heading self-center text-secondaryColor text-center">
                  {featuresTitle.split(' ').map((word, index) => (
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
      </h2>
      <div className="box-border flex gap-11 justify-center flex-wrap p-0 m-0 mt-10 max-md:flex-col max-md:items-center ">
        {features.map((feature, index) => (
          <article
            key={index}
            className="box-border px-9 py-14 m-0 bg-white rounded-3xl shadow-[0px_69.233px_19.117px_rgba(0,0,0,0.00),0px_44.433px_17.567px_rgba(0,0,0,0.01),0px_24.8px_14.983px_rgba(0,0,0,0.05),0px_10.85px_10.85px_rgba(0,0,0,0.09),0px_2.583px_6.2px_rgba(0,0,0,0.10)] w-[285px] max-sm:w-full"
          >
            <Image
              src={feature.icon}
              alt="Feature Icon"
              width={48}
              height={48}
              className="box-border p-0 m-0 mb-3 justify-self-center"
            />
            <h3 className="box-border p-0 m-0 mb-3 text-xl font-semibold text-secondaryColor">{feature.title}</h3>
            <p className="box-border p-0 m-0 text-sm text-secondaryColor">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesService;