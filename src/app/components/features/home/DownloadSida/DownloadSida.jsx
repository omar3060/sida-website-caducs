// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import SVG from "react-inlinesvg";
// import { downloadSidaData } from "@/data/homeData";


// const DownloadSida = async ({ params }) => {
//   const locale = params?.locale || "en";
//   const isArabic = locale === "ar";
//   const data = await downloadSidaData();
//   return (
//     <section className="section-style x-spacing relative">
//       <div className="flex flex-col md:flex-row gap-5 items-center">
//         <div className="w-full md:w-[45%] lg:w-[40%] order-2 md:order-1 relative z-10">
//           <Image
//             src={data.images[0].secure_url}
//             alt="App preview"
//             width={500}
//             height={300}
//             className="object-contain w-full"
//           />
//         </div>
//         {/* <div className="hidden lg:block relative w-0 ">
//           <RotatingGradientCircleLeft />
//         </div> */}
//         <div className="w-full md:w-[55%] lg:w-[60%] md:mb-50 order-1 md:order-2">
//           <div className="flex flex-col self-stretch xl:gap-5">
//           <h2 className="main-heading">
//                   {(() => {
//                     const text = data.title;
//                     const words = text.split(" ");
//                     return words.map((word, index) => {
//                       if (index === words.length - 1) {
//                         return (
//                           <span key={index} className={`relative inline-block ${index % 2 === 0 ? 'text-mainColor' : ''}`}>
//                             {word}
//                             <SVG
//                               src={data.images[1].secure_url}
//                               className="object-contain mt-1 md:mt-2 pr-3 lg:mt-3 w-[100px] md:w-[150px] lg:w-[200px] svg-main-color"
//                               alt="underline element vector"
//                               width={50}
//                               height={30}
//                             />
//                           </span>
//                         );
//                       }
//                       return (
//                         <span key={index} className={index % 2 === 0 ? 'text-mainColor' : 'text-secondaryColor'}>
//                           {word}{' '}
//                         </span>
//                       );
//                     });
//                   })()}
//             </h2>
//             {/* <h2 className=" main-heading text-center md:text-left">
//               <span className="text-secondaryColor">Download</span>{" "}
//               <span className="text-mainColor">SIDA</span>{" "}
//               <span className="text-secondaryColor relative inline-block">
//                 App
//                 <SVG
//                   src="/assets/images/home/svgs/downloadSidaVector.svg"
//                   className="object-contain mt-1 md:mt-2 pr-3 lg:mt-3 w-[100px] md:w-[150px] lg:w-[200px] svg-main-color"
//                   alt="underline element vector"
//                   width={50}
//                   height={30}
//                 />
//               </span>
//             </h2> */}
//             <p className="main-paragraph md:w-[80%] text-center md:text-left text-secondaryColor">
//               {data.content}
//             </p>  
//             <div className="download flex flex-col  md:flex-row items-center mt-10 md:mt-15 gap-4">
//               <Link href="#" className="md:w-[500px]">
//                 <Image
//                   src={data.images[2].secure_url}
//                   className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-black"
//                   width={100}
//                   height={100}
//                   alt="Download"
//                 />
//               </Link>

//               <Link href="#" className="md:w-[500px]">
//                 <Image
//                   src={data.images[3].secure_url}
//                   className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-black"
//                   width={100}
//                   height={100}
//                   alt="Download"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default DownloadSida;



import Image from "next/image";
import Link from "next/link";
import React from "react";
import SVG from "react-inlinesvg";

const DownloadSida = async ({ params }) => {
  const locale = params?.locale || "en";
  const isArabic = locale === "ar";
  return (
    <section className="section-style x-spacing relative">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="w-full md:w-[45%] lg:w-[40%] order-2 md:order-1 relative z-10">
          <Image
            src="/assets/images/home/svgs/app-preview.svg"
            alt="App preview"
            width={500}
            height={300}
            className="object-contain w-full"
          />
        </div>
        {/* <div className="hidden lg:block relative w-0 ">
          <RotatingGradientCircleLeft />
        </div> */}
        <div className="w-full md:w-[55%] lg:w-[60%] md:mb-50 order-1 md:order-2">
          <div className="flex flex-col self-stretch xl:gap-5">
          <h2 className="main-heading">
                  {(() => {
                    const text = isArabic ? "تحميل تطبيق SIDA" : "Download SIDA App";
                    const words = text.split(" ");
                    return words.map((word, index) => {
                      if (index === words.length - 1) {
                        return (
                          <span key={index} className={`relative inline-block ${index % 2 === 0 ? 'text-mainColor' : ''}`}>
                            {word}
                            <SVG
                              src="/assets/images/home/svgs/hero-vector.svg"
                              className="object-contain mt-1 md:mt-2 pr-3 lg:mt-3 w-[100px] md:w-[150px] lg:w-[200px] svg-main-color"
                              alt="underline element vector"
                              width={50}
                              height={30}
                            />
                          </span>
                        );
                      }
                      return (
                        <span key={index} className={index % 2 === 0 ? 'text-mainColor' : 'text-secondaryColor'}>
                          {word}{' '}
                        </span>
                      );
                    });
                  })()}
            </h2>
            {/* <h2 className=" main-heading text-center md:text-left">
              <span className="text-secondaryColor">Download</span>{" "}
              <span className="text-mainColor">SIDA</span>{" "}
              <span className="text-secondaryColor relative inline-block">
                App
                <SVG
                  src="/assets/images/home/svgs/downloadSidaVector.svg"
                  className="object-contain mt-1 md:mt-2 pr-3 lg:mt-3 w-[100px] md:w-[150px] lg:w-[200px] svg-main-color"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h2> */}
            <p className="main-paragraph md:w-[80%] text-center md:text-left text-secondaryColor">
              {isArabic ? "تحميل تطبيق SIDA لتعزيز عملك وتحسين الأداء" : "Download SIDA App to enhance your work and improve performance"}
            </p>
            <div className="download flex flex-col  md:flex-row items-center mt-10 md:mt-15 gap-4">
              <Link href="#" className="md:w-[500px]">
                <Image
                  src="/assets/images/home/svgs/google-apple/apple.svg"
                  className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-black"
                  width={100}
                  height={100}
                  alt="Download"
                />
              </Link>

              <Link href="#" className="md:w-[500px]">
                <Image
                  src="/assets/images/home/svgs/google-apple/google.svg"
                  className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-black"
                  width={100}
                  height={100}
                  alt="Download"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default DownloadSida;
