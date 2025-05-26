import React from "react";
import Image from "next/image";
import PartnersClientWrapper from "./PartnersClientWrapper";

const partners = [
  {
    id: 1,
    src: "/assets/images/home/svgs/partners/partner-1.svg",
  },
  {
    id: 2,
    src: "/assets/images/home/svgs/partners/partner-2.svg",
  },
  {
    id: 3,
    src: "/assets/images/home/svgs/partners/partner-3.svg",
  },
  {
    id: 4,
    src: "/assets/images/home/svgs/partners/partner-4.svg",
  },
  {
    id: 5,
    src: "/assets/images/home/svgs/partners/partner-5.svg",
  },
];

const Partners = () => {
  return (
    <section className="section-style x-spacing">
      <h2 className="main-heading self-center text-mainColor text-center">
        Partnering <span className="text-secondaryColor">with</span> Restaurants{" "}
        <span className="text-secondaryColor relative inline-block">
          Everywhere
          <Image
            src="/assets/images/home/svgs/partners/partners-vector.svg"
            className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px]"
            alt="underline element vector"
            width={50}
            height={30}
          />
        </span>
      </h2>

      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[50%]">
        Thousands of local and international F&B brands trust SIDA to manage
        their operations from orders to payments, inventory, and beyond—all in
        one seamless, cloud-based, POS-RMS system
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-16 lg:mt-20">
        <div className="w-full order-2 md:order-1">
                    <PartnersClientWrapper partners={partners} />
          <div className="static-partners flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] px-2 md:px-3 lg:px-4"
              >
                <Image
                  src={partner.src}
                  className="object-contain mx-auto"
                  alt={`Partner ${partner.id}`}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;