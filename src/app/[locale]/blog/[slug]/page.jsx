import { blogData } from "@/data/blogData";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Blog",
      description: "SIDA Blog Posts",
    };
  }

  const blog = blogData.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: blog.title,
    description: blog.description1[0].substring(0, 155),
    icons: {
      icon: "/assets/images/home/svgs/S-Icon.svg",
    },
  };
}

async function PostSlug({ params }) {
  const { slug } = await params;
  const blog = blogData.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="section-style x-spacing text-secondaryColor">
      <h1 className="main-heading self-center text-mainColor text-center  my-5 sm:w-full">
        {blog.title.split(" ").map((word, index) =>
          index % 2 !== 0 ? (
            <span key={index} className="text-secondaryColor">
              {" "}
              {word}{" "}
            </span>
          ) : (
            <span key={index}> {word}</span>
          )
        )}
      </h1>
      <Image
        src={blog.image}
        alt="blog"
        width={773}
        height={364}
        className="md:mt-10 flex self-center rounded-4xl md:w-[80%] md:h-[500px] object-cover md:mb-[40px]"
      />
      <div>
        {blog.description1.map((description, index) => (
          <p key={index} className="mb-5 main-paragraph">
            {description}
          </p>
        ))}
      </div>
      <h2 className="main-heading text-mainColor md:self-start text-center md:text-left my-5">
        {blog.question.split(" ").map((word, index) =>
          index % 2 !== 0 ? (
            <span key={index} className="text-secondaryColor">
              {" "}
              {word}{" "}
            </span>
          ) : (
            <span key={index}> {word}</span>
          )
        )}
      </h2>
      <div>
        {blog.description2.map((description, index) => (
          <p key={index} className="mb-5 main-paragraph">
            {description}
          </p>
        ))}
      </div>
    </section>
  );
}

export default PostSlug;
