'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const ServicesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false,
    containScroll: 'trimSnaps',
    draggable: true // Enable drag functionality
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    // Initial selection
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const slides = [
    {
      title: "Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
      image: "/ServicesSlider/service1.svg"
    },
    {
      title: "Table Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
      image: "/ServicesSlider/service2.svg"
    },
    {
      title: "Statistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
      image: "/ServicesSlider/service3.svg"
    },
    {
      title: "Warehouse Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
      image: "/ServicesSlider/service4.svg"
    },
    {
      title: "Orders Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
      image: "/ServicesSlider/service5.svg"
    },
  ]

  return (
    <section className="flex flex-col items-center w-full x-spacing">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-center">
        <span className="text-[#0099FF]">SIDA</span> Provides <span className="text-[#0099FF]">A lot</span> of Features
      </h1>
      
      <div 
        className="overflow-hidden mt-6 md:mt-10 w-full max-w-[1200px] rounded-[42px] shadow-[5px_7px_3px_rgba(0,0,0,0.25)]" 
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="flex flex-col items-start px-4 md:px-8 pt-32 md:pt-[400px] pb-8 md:pb-14 w-full min-h-[300px] md:min-h-[600px]">
                <img
                  src={slide.image}
                  alt={`${slide.title} background`}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative max-w-full w-full md:w-[800px] text-white">
                  <h2 className="text-xl md:text-3xl font-extrabold">{slide.title}</h2>
                  <p className="mt-2 md:mt-4 text-base md:text-2xl font-semibold max-md:max-w-full">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 md:gap-2.5 justify-center items-start mt-4 md:mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`flex shrink-0 h-[14px] md:h-[18px] w-[15px] md:w-[19px] rounded-full transition-colors duration-300 ${
              selectedIndex === index ? 'bg-sky-600' : 'bg-zinc-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSlider