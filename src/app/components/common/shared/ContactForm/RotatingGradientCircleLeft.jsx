"use client";
import { motion } from "framer-motion";
import React from "react";
import { useLocale } from "next-intl";


const RotatingGradientCircleLeft = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className={`absolute w-[500px] h-[880px] ${
      isArabic ? "right-[-1300px]" : "left-[-1300px]"
    } top-[-50%] transform -translate-y-1/2`}>
      <motion.div
        className="w-[1700px] h-[1700px] rounded-full absolute"
        style={{
          background: 'conic-gradient(from 0deg, var(--color-lightBlue), var(--color-mainColor), var(--color-lightBlue))',
          WebkitMask: 'radial-gradient(transparent 40%, black 40%)',
          mask: 'radial-gradient(transparent 40%, black 40%)',
        }}
        animate={{
          rotate: 360,
          y: [0, 10, 0, -5, 0],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </div>
  );
};

export default RotatingGradientCircleLeft;


// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// const RotatingGradientCircleLeft = () => {
//   return (
//     <div className="absolute w-[900px] h-[1000px] top-0 right-0 ">
//       <motion.div
//         className="w-[2282px] h-[2100px] rounded-full absolute top-[-349px] left-[-2750px]"
//         style={{
//           background: 'conic-gradient(from 0deg, #01537c, #3b82f6, #01537c)',
//           WebkitMask: 'radial-gradient(transparent 40%, black 40%)',
//           mask: 'radial-gradient(transparent 40%, black 40%)',
//         }}
//         animate={{
//           rotate: 360,
//           y: [0, 5, 0, -5, 0],
//         }}
//         transition={{
//           rotate: {
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear",
//           },
//           y: {
//             duration: 2,
//             repeat: Infinity,
//             ease: "linear",
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default RotatingGradientCircleLeft;
