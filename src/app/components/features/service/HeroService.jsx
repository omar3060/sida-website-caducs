import Image from 'next/image'
import React from 'react'

const HeroService = () => {
  return (
    // <section className="box-border relative px-28 py-16 m-0 text-center max-md:px-5 max-md:py-10">
    <section className="section-style">
    <Image
      src="/assets/images/service/serviceHero.svg"
      alt="Hero"
      width={1920}
      height={1080}
      className="box-border p-0 m-0 mb-10 h-[364px] rounded-[31.844px] w-[773px] max-md:w-full max-md:h-auto md:self-center"
    />
    <div className="box-border p-0 mx-auto my-0 max-w-[510px]">
    <h1 className="main-heading text-mainColor text-center text-4xl md:text-5xl">
    Point <span className="text-secondaryColor">Of</span> Sale{" "}
        <span className="text-secondaryColor relative inline-block">System
        </span>
      </h1>
      {/* <p className="box-border p-0 mx-auto my-0 text-xl max-w-[463px] text-[color:var(--text-color)] max-sm:text-base"> */}
      <p className="main-paragraph text-center mr-0">
        SIDA is an all-inclusive POS and restaurant management system tailored to adapt to all your needs and goals.
        Manage all restaurant operations from orders to inventory in one platform.
      </p>
    </div>
  </section>
  )
}

export default HeroService