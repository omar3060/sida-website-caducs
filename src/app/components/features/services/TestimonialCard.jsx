const TestimonialCard = ({ image, text, name, company }) => {
  return (
    <article className="px-7 py-4 bg-gray-900 rounded-xl w-[346px] h-[231px] flex flex-col">
      <img
        src={image.secure_url}
        alt={`${name}'s profile`}
        className="object-contain w-12 rounded-full aspect-square"
      />
      <div className="flex flex-col mt-2.5 w-full flex-grow">
        <p className="self-start text-base font-medium text-white">
          {text}
        </p>
        <div className="flex gap-3 items-start w-full text-xs mt-auto">
          <span className="text-white">{name}</span>
          <span className="text-neutral-500">{company}</span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;