import React from "react";
import PostCard from "../components/features/blog/PostCard";
import { blogData } from "@/data/blogData";
import SEO from "../components/common/shared/SEO";
import { generateMetadata } from "../components/common/shared/SEO";

// Export the metadata for this page
export const metadata = generateMetadata({
  title: "SIDA - Blog",
  description: "Discover SIDA blog",
});

const Blog = () => {
  return (
    <section className="section-style x-spacing mb-15">
      <h2 className="main-heading self-center text-mainColor text-center mt-7">
        SIDA <span className="text-secondaryColor">Blog </span> Featured{" "}
        <span className="text-secondaryColor relative inline-block">Reads</span>
      </h2>

      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[40%] mr-0">
        Browse through our blog library of articles and discover all the tips
        and tricks of the industry!
      </p>

      <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full x-spacing">
        {blogData.map((card, index) => (
          <PostCard
            key={index}
            title={card.title}
            image={card.image}
            slug={card.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
