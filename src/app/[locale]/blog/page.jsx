"use client";
import React from "react";
import PostCard from "../../components/features/blog/PostCard";
import { blogData } from "@/data/blogData";
import SEO from "../../components/common/shared/SEO";
import { useState } from "react";

// export const metadata = {
//   title: "SIDA - Blog",
//   description: "Discover SIDA blog",
//   icons: {
//     icon: "/assets/images/home/svgs/S-Icon.svg",
//   },
// };



const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const visiblePosts = blogData.slice(0, visibleCount);

  const hasMore = visibleCount < blogData.length;

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
        {visiblePosts.map((card, index) => (
          <PostCard
            key={index}
            title={card.title}
            image={card.image}
            slug={card.slug}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-mainColor text-cardColor rounded-md hover:bg-opacity-90 transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
