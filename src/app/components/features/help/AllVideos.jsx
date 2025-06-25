"use client";

import React, { useState } from "react";
import { helpPageData } from "@/data/helpPageData";
import Link from "next/link";

const VideoCard = ({ thumbnail, title, helpId }) => {
  return (
    <Link href={`/help/${helpId}`}>
      <article className="flex flex-col grow shrink justify-center min-w-60 w-[350px] max-w-full">
        <img
          src={thumbnail}
          className="object-contain self-center max-w-full rounded-3xl aspect-[1.5] w-full"
          alt={title}
        />
        <h3 className="mt-2.5 w-full text-xl font-bold text-center text-secondaryColor">
          {title}
        </h3>
      </article>
    </Link>
  );
};

const AllVideos = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const visibleVideos = helpPageData.slice(0, visibleCount);

  const hasMore = visibleCount < helpPageData.length;

  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-4 w-full max-w-[992px] justify-items-center">
          {visibleVideos.map((item, index) => (
            <VideoCard
              key={index}
              thumbnail={item.image}
              title={item.title}
              helpId={item.id}
            />
          ))}
        </div>

        {hasMore && (
          <button
            onClick={loadMore}
            className="mt-8 px-6 py-3 bg-mainColor text-cardColor rounded-md hover:bg-opacity-90 transition-all"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default AllVideos;
