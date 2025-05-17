"use client";

import { useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const sliderData = [
  {
    title: "POS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla.",
    image: "/SidaOffers/slide1.svg",
    buttonText1: "Subscribe",
    buttonText2: "Pricing",
  },
  {
    title: "CDS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla.",
    image: "/SidaOffers/slide2.svg",
    buttonText1: "Get Demo",
    buttonText2: "Pricing",
  },
];

const SidaOffers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    draggable: true,
  });

  const containerRef = useRef(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full bg-white py-16 x-spacing md:px-30 relative" ref={containerRef}>
      <div className="relative" style={{ zIndex: 1 }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold hidden md:block">
          What <span className="text-[#018ED5]">SIDA</span> Offers{" "}
          <span className="text-[#018ED5]">?</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl text-lg md:text-xl lg:text-2xl hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit
          commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut
        </p>
      </div>

      <div className="overflow-hidden relative" ref={emblaRef} style={{ zIndex: 2 }}>
        <div className="flex">
          {sliderData.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
                <div className="space-y-4 md:mb-15 flex flex-col md:self-center basis-[45%]">
                  <div className="relative">
                    <h3 className="text-[51px] md:text-[75px] lg:text-[100px] font-bold text-[#018ED5]">
                      {slide.title}
                    </h3>
                    <div 
                      className="absolute top-[-120px] left-[210px] w-[900px] h-[200px]"
                      style={{
                        zIndex: 999,
                        pointerEvents: "none"
                      }}
                    >
                      <Image 
                        height={200} 
                        width={700} 
                        src="/SidaOffers/slant.svg"
                        alt="line" 
                        className="w-[900px]"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-[#17242A] text-[18.5px] md:text-2xl lg:text-4xl w-full max-w-[700px]">
                    {slide.description}
                  </p>

                  <div className="flex gap-3 md:gap-5 items-center md:mt-8">
                    <button
                      role="button"
                      className="lg:w-[300px] flex-grow md:flex-grow-0 md:w-auto px-4 md:px-8 py-[11px] md:py-6 rounded-3xl border-solid hover:bg-sky-600 hover:text-white transition-colors border-[1.85px] border-sky-600 text-[14px] md:text-2xl text-sky-600 whitespace-nowrap"
                    >
                      {slide.buttonText1}
                    </button>
                    <button className="lg:w-[300px] flex-grow md:flex-grow-0 md:w-auto px-4 md:px-8 py-[11px] md:py-6 rounded-3xl hover:bg-sky-600 hover:text-white transition-colors border-sky-600 border-solid border-[1.85px] text-[14px] md:text-2xl text-sky-600 whitespace-nowrap">
                      {slide.buttonText2}
                    </button>
                  </div>
                </div>

                {/* Right side - Image */}
                <div className="basis-[55%]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={100}
                    height={100}
                    className="w-full h-full min-h-[300px] max-h-[566px] rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex justify-center gap-[415px] mt-8">
        <button
          onClick={scrollPrev}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <Image
            src="/SidaOffers/leftArrow.svg"
            alt="Previous"
            width={100}
            height={100}
            className="object-contain shrink-0 aspect-square w-[67px]"
          />
        </button>
        <button
          onClick={scrollNext}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Next slide"
        >
          <Image
            width={100}
            height={100}
            src="/SidaOffers/rightArrow.svg"
            alt="Next"
            className="object-contain shrink-0 aspect-[0.99] w-[66px]"
          />
        </button>
      </div>
    </section>
  );
};

export default SidaOffers;




// import React from 'react'

// const SidaOffers = () => {
//   return (
//     <div data-property-1="Group 1000002762" className="w-[1688px] h-[1059.40px] relative">
//     <div className="left-[508px] top-[818px] absolute inline-flex justify-start items-start gap-96">
//         <div className="w-32 h-32 bg-gradient-to-b from-sky-600 to-sky-900 rounded-full shadow-[inset_5.136111259460449px_5.136111259460449px_32.1006965637207px_0px_rgba(0,0,0,0.25)]" />
//         <div className="w-16 h-16 relative overflow-hidden">
//             <div className="w-11 h-8 left-[9.18px] top-[14.26px] absolute outline outline-4 outline-offset-[-1.93px] outline-slate-50" />
//         </div>
//         <div className="w-32 h-32 bg-gradient-to-b from-sky-600 to-sky-900 rounded-full shadow-[inset_5.136111259460449px_5.136111259460449px_32.1006965637207px_0px_rgba(0,0,0,0.25)]" />
//         <div className="w-16 h-16 relative overflow-hidden">
//             <div className="w-11 h-8 left-[9.17px] top-[15.55px] absolute outline outline-4 outline-offset-[-1.93px] outline-slate-50" />
//         </div>
//     </div>
//     <div className="w-[1688px] h-[753px] left-0 top-0 absolute">
//         <div className="left-0 top-[164px] absolute inline-flex flex-col justify-start items-start gap-10">
//             <div className="w-[539.29px] h-32 relative overflow-hidden">
//                 <div className="w-[539.29px] h-[828.20px] left-[0.32px] top-0 absolute justify-start text-sky-600 text-8xl font-bold font-['Inter']">POS <br/><br/>Audi R8<br/><br/>Nissan GTR<br/><br/>Mclaren F1</div>
//             </div>
//             <div className="w-[701.08px] h-72 relative overflow-hidden">
//                 <div className="w-[701.08px] h-[1236.52px] left-[0.32px] top-[0.32px] absolute justify-start text-gray-900 text-4xl font-normal font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut</div>
//             </div>
//             <div className="inline-flex justify-start items-start gap-8">
//                 <div data-property-1="Component 3" className="w-80 h-24 px-6 py-6 rounded-3xl shadow-[0px_3px_3px_-1.5px_rgba(0,0,0,0.04)] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)] shadow-[inset_0px_-1px_3px_-1px_rgba(0,0,0,0.12)] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.12)] outline outline-2 outline-offset-[-1.85px] outline-sky-600 backdrop-blur-[2px] flex justify-center items-center gap-5">
//                     <div className="justify-start text-sky-600 text-3xl font-normal font-['Inter']">Subscribe </div>
//                 </div>
//                 <div className="w-80 h-24 px-6 py-5 bg-slate-50 rounded-3xl shadow-[0px_2.8890624046325684px_2.8890624046325684px_-1.4445312023162842px_rgba(0,0,0,0.04)] shadow-[0px_0.9630208015441895px_0.9630208015441895px_-0.4815104007720947px_rgba(0,0,0,0.04)] shadow-[inset_0px_-0.9630208015441895px_2.8890624046325684px_-0.9630208015441895px_rgba(0,0,0,0.12)] shadow-[inset_0px_1.926041603088379px_2.8890624046325684px_0px_rgba(255,255,255,0.12)] outline outline-2 outline-offset-[-1.78px] outline-sky-600 backdrop-blur-[1.93px] flex justify-center items-center gap-4">
//                     <div className="justify-start text-sky-600 text-2xl font-normal font-['Inter']">Pricing</div>
//                 </div>
//             </div>
//         </div>
//         <img className="w-[850.03px] h-[566.26px] left-[838px] top-[175px] absolute rounded-[61.63px]" src="https://placehold.co/850x566" />
//         <div className="w-[1106px] h-56 left-[256px] top-[1px] absolute">
//             <div className="w-[1106px] h-56 left-0 top-0 absolute">
//                 <div className="w-[1106px] h-56 left-[1106px] top-[225px] absolute origin-top-left rotate-180 outline outline-[34px] outline-offset-[-17px] outline-sky-600" />
//             </div>
//             <div className="w-8 h-8 left-[1090px] top-[-16px] absolute">
//                 <div className="w-3.5 h-4 left-[1.50px] top-[8px] absolute bg-gradient-to-b from-sky-600 to-sky-900 outline outline-[34px] outline-offset-[-17px] outline-sky-900" />
//             </div>
//             <div className="w-8 h-8 left-[16px] top-[241px] absolute origin-top-left rotate-180">
//                 <div className="w-4 h-4 left-[16px] top-[25px] absolute origin-top-left rotate-180 rounded-full outline outline-[33px] outline-offset-[-16.50px] outline-sky-600" />
//             </div>
//         </div>
//         <div className="left-[2199px] top-[163.45px] absolute inline-flex flex-col justify-start items-start gap-10">
//             <div className="w-[539.29px] h-32 relative overflow-hidden">
//                 <div className="w-[539.29px] h-[828.20px] left-[0.32px] top-0 absolute justify-start text-sky-600 text-8xl font-bold font-['Inter']">CDS<br/><br/>Audi R8<br/><br/>Nissan GTR<br/><br/>Mclaren F1</div>
//             </div>
//             <div className="w-[701.08px] h-72 relative overflow-hidden">
//                 <div className="w-[701.08px] h-[1236.52px] left-[0.32px] top-[0.32px] absolute justify-start text-gray-900 text-4xl font-normal font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut</div>
//             </div>
//             <div className="inline-flex justify-start items-start gap-8">
//                 <div data-property-1="Component 3" className="w-80 h-24 px-6 py-6 rounded-3xl shadow-[0px_3px_3px_-1.5px_rgba(0,0,0,0.04)] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)] shadow-[inset_0px_-1px_3px_-1px_rgba(0,0,0,0.12)] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.12)] outline outline-2 outline-offset-[-1.85px] outline-sky-600 backdrop-blur-[2px] flex justify-center items-center gap-5">
//                     <div className="justify-start text-sky-600 text-3xl font-normal font-['Inter']">Get Demo</div>
//                 </div>
//                 <div className="w-80 h-24 px-6 py-5 bg-slate-50 rounded-3xl shadow-[0px_2.8890624046325684px_2.8890624046325684px_-1.4445312023162842px_rgba(0,0,0,0.04)] shadow-[0px_0.9630208015441895px_0.9630208015441895px_-0.4815104007720947px_rgba(0,0,0,0.04)] shadow-[inset_0px_-0.9630208015441895px_2.8890624046325684px_-0.9630208015441895px_rgba(0,0,0,0.12)] shadow-[inset_0px_1.926041603088379px_2.8890624046325684px_0px_rgba(255,255,255,0.12)] outline outline-2 outline-offset-[-1.78px] outline-sky-600 backdrop-blur-[1.93px] flex justify-center items-center gap-4">
//                     <div className="justify-start text-sky-600 text-2xl font-normal font-['Inter']">Pricing</div>
//                 </div>
//             </div>
//         </div>
//         <img className="w-[850.03px] h-[566.26px] left-[3037.04px] top-[174px] absolute rounded-[61.63px]" src="https://placehold.co/850x566" />
//         <div className="w-[1106px] h-56 left-[2455.04px] top-0 absolute">
//             <div className="w-[1106px] h-56 left-0 top-0 absolute">
//                 <div className="w-[1106px] h-56 left-[1106px] top-[225px] absolute origin-top-left rotate-180 outline outline-[34px] outline-offset-[-17px] outline-sky-600" />
//             </div>
//             <div className="w-8 h-8 left-[1090px] top-[-16px] absolute">
//                 <div className="w-3.5 h-4 left-[1.50px] top-[8px] absolute bg-sky-600 outline outline-[34px] outline-offset-[-17px] outline-sky-600" />
//             </div>
//             <div className="w-8 h-8 left-[16px] top-[241px] absolute origin-top-left rotate-180">
//                 <div className="w-4 h-4 left-[16px] top-[25px] absolute origin-top-left rotate-180 rounded-full outline outline-[33px] outline-offset-[-16.50px] outline-sky-600" />
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default SidaOffers