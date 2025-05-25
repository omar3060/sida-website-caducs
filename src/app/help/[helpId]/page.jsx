import React from "react";
import { helpPageData } from "@/data/helpPageData";

export async function generateStaticParams() {
  return helpPageData.map((help) => ({
    helpId: help.id.toString(),
  }));
}

export default async function HelpPage({ params }) {
  
  const help = helpPageData.find((help) => help.id === Number(params.helpId));
  if (!help) {
    return <div>Help page not found</div>;
  }
  return (
    <section className="section-style x-spacing mb-15">
      <h2 className="main-heading self-center text-mainColor text-center mb-10">
        {help.title.split(" ").map((word, index) =>
          index % 2 !== 0 ? (
            <span key={index} className="text-secondaryColor">
               {" "}{word}{" "}
            </span>
          ) : (
            <span key={index}> {" "}{word}</span>
          )
        )}
      </h2>
      <article className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900 max-sm:text-xl mb-10">
          Steps
        </h1>
        <p className="text-xl text-gray-900 w-[941px] max-md:w-full max-md:text-lg max-sm:text-base mb-10">
          {help.description}
        </p>
        <ul className="text-xl text-gray-900 max-sm:text-base">
          {help.steps.map((step, index) => (
            <li key={index} className="mb-5">
              {step}
            </li>
          ))}
        </ul>
      </article>
      <figure className="mx-0 my-10 text-center flex justify-center">
        <img
          src={help.figures[0]}
          alt="Video thumbnail"
          className="max-w-full rounded-3xl h-[339px] w-[652px] max-md:w-full max-md:max-w-[600px] max-sm:w-full max-sm:h-auto"
        />
      </figure>

      <figure className="relative mx-0 my-10 text-center flex justify-center">
        <img
          src={help.figures[1]}
          alt="Video thumbnail"
          className="max-w-full rounded-3xl h-[339px] w-[652px] max-md:w-full max-md:max-w-[600px] max-sm:w-full max-sm:h-auto"
        />
      </figure>
    </section>
  );
}
