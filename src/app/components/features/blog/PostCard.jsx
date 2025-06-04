import Link from "next/link";
import React from "react";

const PostCard = ({ title, image, slug }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <article className="w-[400px] bg-textWhite border border-gray-200 rounded-4xl shadow-sm mt-10">
          <div className="flex relative flex-col self-stretch px-11 py-20 w-full text-5xl font-bold min-h-[212px] rounded-[32px] max-md:px-5 max-md:max-w-full max-md:text-4xl ">
            <img
              src={image}
              alt={`${title} Background`}
              className=" absolute inset-0 w-full object-cover rounded-4xl"
            />
          </div>
          <div className="p-5 pt-20 text-secondaryColor">
            {title}{" "}
            <a href="#" className="text-mainColor underline">
              Learn More
            </a>
          </div>
        </article>
      </Link>
    </>
  );
};

export default PostCard;
