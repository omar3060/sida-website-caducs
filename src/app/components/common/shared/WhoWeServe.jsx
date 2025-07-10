import React from "react";
import SVG from "react-inlinesvg";
import { whoWeServeData } from "@/data/homeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhoWeServe = async ({ locale }) => {
  const data = await whoWeServeData();
  console.log("WhoWeServe data:", data);

  if (!data || !data.slides) {
    console.error("No data or slides found in WhoWeServe");
    return <div>Loading...</div>;
  }

  const services = data.slides;
  console.log("Services:", services);
  const isArabic = locale === "ar";
  const title = isArabic ? data.title.arabic : data.title.english;
  // const services = [
  //   {
  //     id: "client1",
  //     title: "Small Business",
  //     icon: "/assets/images/home/WhoWeServe/icon1.svg",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
  //   },
  //   {
  //     id: "client2",
  //     title: "Franchise",
  //     icon: "/assets/images/home/WhoWeServe/icon2.svg",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
  //   },
  //   {
  //     id: "client3",
  //     title: "Fast Casual",
  //     icon: "/assets/images/home/WhoWeServe/icon3.svg",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
  //   },
  //   {
  //     id: "client4",
  //     title: "Multi-Location Groups",
  //     icon: "/assets/images/home/WhoWeServe/icon4.svg",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
  //   },
  //   {
  //     id: "client5",
  //     title: "Casual Dining",
  //     icon: "/assets/images/home/WhoWeServe/icon5.svg",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
  //   },
  //   {
  //     id: "client6",
  //     title: "Fine Dining",
  //     icon: "/assets/images/home/WhoWeServe/icon6.svg",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla",
  //   },
  // ];

  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center">
        <h2 className="main-heading mb-12 text-secondaryColor">
          {title.split(" ").map((word, index) =>
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px]">
          {services.map((service, index) => (
            <ServiceCard key={index} locale={locale} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const ServiceCard = ({ text, arabic, english, locale }) => {
  const isArabic = locale === "ar";
  console.log("ServiceCard props:", { text, arabic, english, locale });

  return (
    <a href={`#${createSlug(english.title)}`}>
      <article className="flex flex-col justify-center items-center p-8 rounded-xl relative group overflow-hidden min-h-[200px]">
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div
            className="svg-main-color object-contain aspect-square w-[41px] justify-self-center "
            aria-label={text}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", text]}
              className="w-14 h-14 text-mainColor object-contain justify-self-center mt-7"
            />
          </div>
          <h3 className="mt-5 text-xl font-bold text-secondaryColor text-center">
            {isArabic ? arabic.title : english.title}
          </h3>
        </div>

        <div className="absolute inset-0 bg-mainColor opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-6 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="svg-main-color object-contain w-[41px] filter brightness-0 invert"
              aria-label={text}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fas", text]}
                className="w-14 h-14 text-white object-contain justify-self-center"
              />
            </div>
            <h3 className="text-lg font-bold text-white">
              {isArabic ? arabic.title : english.title}
            </h3>
          </div>
          <p
          className="text-white text-lg text-center leading-relaxed overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {isArabic ? arabic.content : english.content}
        </p>
        </div>
      </article>
    </a>
  );  
};

export default WhoWeServe;
