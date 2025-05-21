import React from 'react'

const WhoWeServe = () => {
    const services = [
        { title: 'Small Business', icon: '/assets/images/home/WhoWeServe/icon1.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla' },
        { title: 'Franchise', icon: '/assets/images/home/WhoWeServe/icon2.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla' },
        { title: 'Fast Casual', icon: '/assets/images/home/WhoWeServe/icon3.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla' },
        { title: 'Multi-Location Groups', icon: '/assets/images/home/WhoWeServe/icon4.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla' },
        { title: 'Casual Dining', icon: '/assets/images/home/WhoWeServe/icon5.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla' },
        { title: 'Fine Dining', icon: '/assets/images/home/WhoWeServe/icon6.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce placerat eget est sed fringilla' }
    ];

    return (
        <section className="section-style x-spacing py-6">
            <div className="flex flex-col items-center">
                <h2 className="main-heading mb-12">
                    Who <span className="text-mainColor">We</span> Serve{" "}
                    <span className="text-mainColor">?</span>
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

const ServiceCard = ({ icon, title, description }) => (
    <article className="flex flex-col justify-center items-center p-8 rounded-xl bg-[#018ED50A] relative group overflow-hidden cursor-pointer min-h-[200px]">
        {/* Default View */}
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
            {typeof icon === 'string' ? (
                <img
                    src={icon}
                    alt={`${title} icon`}
                    className="object-contain aspect-square w-[41px] justify-self-center"
                />
            ) : (
                <div className="flex min-h-[41px] w-[41px] self-center">{icon}</div>
            )}
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#018ED5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-6 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
                {typeof icon === 'string' ? (
                    <img
                        src={icon}
                        alt={`${title} icon`}
                        className="object-contain w-[41px] filter brightness-0 invert"
                    />
                ) : (
                    <div className="flex min-h-[41px] w-[41px] text-white">{icon}</div>
                )}
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-white text-lg text-center leading-relaxed">{description}</p>
        </div>
    </article>
);

export default WhoWeServe