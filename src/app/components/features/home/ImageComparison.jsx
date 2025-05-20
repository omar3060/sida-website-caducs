"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

const SNAP_POINTS = [0, 0.5, 1];

function getClosestSnap(frac) {
  return SNAP_POINTS.reduce((prev, curr) =>
    Math.abs(curr - frac) < Math.abs(prev - frac) ? curr : prev
  );
}

const ImageComparison = () => {
  const [slideAmount, setSlideAmount] = useState({ frac: 0.5 });
  const [dragging, setDragging] = useState(false);
  const imageContainer = useRef(null);
  const animationRef = useRef();

  const dragState = useRef({});

  const handleMove = (clientX) => {
    const rect = imageContainer.current.getBoundingClientRect();
    let frac = (clientX - rect.left) / rect.width;
    frac = Math.max(0, Math.min(1, frac));
    
    if ((slideAmount.frac < 0.5 && frac >= 0.5) || 
        (slideAmount.frac > 0.5 && frac <= 0.5)) {
      setSlideAmount({ frac: 0.5 });
      window.dispatchEvent(new MouseEvent('mouseup'));
      return;
    }
    
    setSlideAmount({ frac });
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    const move = (event) => {
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      onDrag(x);
    };
    const up = () => {
      setDragging(false);
      setSlideAmount((prev) => {
        const snap = getClosestSnap(prev.frac);
        return { frac: snap };
      });
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
  };

  const onDrag = (clientX) => {
    dragState.current.clientX = clientX;
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {
        handleMove(dragState.current.clientX);
        animationRef.current = null;
      });
    }
  };

  const handleClick = (e) => {
    handleMove(e.nativeEvent.clientX);
    setSlideAmount((prev) => {
      const snap = getClosestSnap(prev.frac);
      return { frac: snap };
    });
  };



  return (
    <div className="flex items-center justify-center mt-10 md:h-[1250px] bg-gray-50 px-2">
      <div
        ref={imageContainer}
        className="relative w-full max-w-4xl aspect-[0.77] rounded-[40px] overflow-hidden shadow-xl bg-textWhite"
        onClick={handleClick}
      >
        <Image
          src="/assets/images/home/imageComparison/after.svg"
          alt="After"
          fill
          className="object-cover select-none pointer-events-none"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <Image
          src="/assets/images/home/imageComparison/before.svg"
          alt="Before"
          fill
          className="object-cover select-none pointer-events-none absolute top-0 left-0"
          style={{
            clipPath: `polygon(0 0, ${slideAmount.frac * 100}% 0, ${slideAmount.frac * 100}% 100%, 0 100%)`,
            transition: dragging ? "none" : "clip-path 0.5s cubic-bezier(.4,2,.6,1)",
          }}
          sizes="(max-width: 768px) 100vw, 800px"
        />
        {slideAmount.frac === 1 && (
          <div className="absolute right-0 top-0 h-full w-[5px] bg-mainColor" />
        )}
        <div
          style={{
            left: `calc(${slideAmount.frac * 100}%)`,
            transition: dragging ? "none" : "left 0.5s cubic-bezier(.4,2,.6,1)",
          }}
          className="absolute top-0 h-full flex flex-col items-center z-10"
        >
          <div className="w-[5px] h-full bg-mainColor" />
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            className="w-16 h-16 flex items-center justify-center shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{ touchAction: "none" }}
          >
            {slideAmount.frac === 0 && (
              <div className="w-full h-full flex items-center justify-end">
                <Image
                  src="/assets/images/home/imageComparison/separator.svg"
                  alt="Right Arrow"
                  width={48}
                  height={48}
                  className="absolute left-7"
                  draggable={false}
                />
              </div>
            )}
            {slideAmount.frac === 1 && (
              <div className="w-full h-full flex items-center justify-start">
                <Image
                  src="/assets/images/home/imageComparison/separator.svg"
                  alt="Left Arrow"
                  width={48}
                  height={48}
                  className="rotate-180 absolute -left-3"
                  draggable={false}
                />
              </div>
            )}
            {slideAmount.frac !== 0 && slideAmount.frac !== 1 && (
              <div className="w-full h-full flex items-center justify-between">
                <Image
                  src="/assets/images/home/imageComparison/separator.svg"
                  alt="Left Arrow"
                  width={48}
                  height={48}
                  className="rotate-180 relative right-[18px]"
                  draggable={false}
                  
                />
                <Image
                  src="/assets/images/home/imageComparison/separator.svg"
                  alt="Right Arrow"
                  width={48}
                  height={48}
                  className="relative right-[18px]"
                  draggable={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
