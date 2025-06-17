"use client";
import { useState, useRef, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import SVG from "react-inlinesvg";

const DUMMY_BACKEND_OTP = "123456";

export default function OTPPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isCorrect, setIsCorrect] = useState(null);
  const [shake, setShake] = useState(false);
  const [showInputs, setShowInputs] = useState(true);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (shake) {
      const timeout = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [shake]);

  useEffect(() => {
    if (otp.every((d) => d !== "")) {
      const inputCode = otp.join("");
      if (inputCode === DUMMY_BACKEND_OTP) {
        setIsCorrect(true);
        setTimeout(() => setShowInputs(false), 600);
      } else {
        setIsCorrect(false);
        setShake(true);
        setOtp(Array(6).fill(""));
        inputsRef.current[0]?.focus();
      }
    }
  }, [otp]);

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <section className="section-style x-spacing mb-15 min-h-screen items-center justify-center relative h-full">
      <div className="absolute w-full h-full overflow-hidden -z-10">
        <SVG
          src="/assets/images/home/svgs/halfCircleRight.svg"
          className="absolute w-[100px] sm:w-[250px] md:w-[300px] left-[-160px] sm:left-[-400px] block overflow-hidden rotate-180 h-full z-[-10]"
          alt="Hero illustration"
          width={500}
          height={265}
          preserveAspectRatio="xMidYMid slice"
          style={{ transform: "scale(2.5)", transformOrigin: "right center" }}
        />
        <SVG
          src="/assets/images/home/svgs/halfCircleRight.svg"
          className="absolute w-[100px] sm:w-[250px] md:w-[300px] right-[-60px] sm:right-[-150px] block overflow-hidden h-full z-[-10]"
          alt="Hero illustration"
          width={500}
          height={265}
          preserveAspectRatio="xMidYMid slice"
          style={{ transform: "scale(2.5)", transformOrigin: "right center" }}
        />
      </div>

      <h2 className="main-heading self-center text-mainColor text-center">
                   {"OTP Verification".split(' ').map((word, index) => (
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
      </h2>
      {/* <h2 className="main-heading self-center text-mainColor text-center">
        OTP <span className="text-secondaryColor">Verification</span>
      </h2> */}
      <p className="main-paragraph self-center text-center text-secondaryColor w-[30%] mr-0">
        Enter the verification code we just sent to your email address
      </p>
      <div className="flex flex-col items-center justify-center p-4">
        <motion.div
          className="flex gap-2"
          animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {showInputs &&
            otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-12 h-12 text-center text-xl font-bold border rounded-xl transition-all focus:outline-none text-secondaryColor ${
                  isCorrect === false
                    ? "border-red-500"
                    : isCorrect === true
                      ? "border-green-500"
                      : digit
                        ? "border-mainColor"
                        : "border-gray-300 focus:border-mainColor"
                }`}
                autoFocus={index === 0}
              />
            ))}

          {!showInputs && isCorrect === true && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CheckCircle className="text-green-500 w-14 h-14" />
            </motion.div>
          )}
        </motion.div>

        {isCorrect === false && (
          <div className="text-red-500 mt-2 flex items-center gap-1">
            <span>Invalid OTP, try again</span>
            <AlertCircle className="w-5 h-5" />
          </div>
        )}

        {isCorrect === true && !showInputs && (
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700">
            <Link href="/pricing/subscription/checkout">Checkout</Link>
          </button>
        )}
      </div>
      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[30%] mr-0">
        Didn't receive a code?{" "}
        <Link href="#" className="text-mainColor">
          Resend
        </Link>
      </p>
    </section>
  );
}
