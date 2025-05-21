const ProductCard = ({ title, image, description }) => {
  return (
    <article class="w-[450px] bg-white border border-gray-200 rounded-t-4xl shadow-sm">

      <div className="flex relative flex-col self-stretch px-11 py-20 w-full text-5xl font-bold text-white min-h-[212px] rounded-[32px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          src={image}
          alt={`${title} Background`}
          className=" absolute inset-0 size-full"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {title}
        </div>
      </div>
      <div class="p-5 ">
        <p class="mb-3 text-lg">
          {description}
        </p>
        <div className="buttons-container w-full text-textWhite text-[18px] md:text-xl lg:text-2xl">
            <button
              role="button"
              className="primary-button py-3 md:py-4 lg:py-5 flex-1"
            >
              Subscribe
            </button>
            <button className="primary-button py-3 md:py-4 lg:py-5 flex-1">
              Learn More
            </button>
          </div>
        {/* <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a> */}
      </div>
    </article>
  );
};

export default ProductCard;
