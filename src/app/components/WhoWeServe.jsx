import React from 'react'

const WhoWeServe = () => {
    const services = [
        { title: 'Small Business', icon: '/WhoWeServe/icon1.svg' },
        { title: 'Franchise', icon: '/WhoWeServe/icon2.svg' },
        { title: 'Fast Casual', icon: '/WhoWeServe/icon3.svg' },
        { title: 'Multi-Location Groups', icon: '/WhoWeServe/icon4.svg' },
        { title: 'Casual Dining', icon: '/WhoWeServe/icon5.svg' },
        { title: 'Fine Dining', icon: '/WhoWeServe/icon6.svg' }
    ];

    return (
        <section className="w-full x-spacing py-16">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold hidden md:block mb-12">
                    Who <span className="text-[#018ED5]">We</span> Serve{" "}
                    <span className="text-[#018ED5]">?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px]">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ServiceCard = ({ icon, title }) => (
    <article className="flex flex-col justify-center items-center p-8 rounded-xl bg-[#018ED50A] bg-opacity-0">
        {typeof icon === 'string' ? (
            <img
                src={icon}
                alt={`${title} icon`}
                className="object-contain aspect-square w-[41px]"
            />
        ) : (
            <div className="flex min-h-[41px] w-[41px]">{icon}</div>
        )}
        <h3 className="mt-5 text-xl font-bold">{title}</h3>
    </article>
);

export default WhoWeServe