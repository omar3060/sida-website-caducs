const TestimonialCard = ({
  image,
  arabic,
  english,
  name,
  company,
  isArabic,
}) => {
  // Safely access image URL
  const imageUrl = image?.secure_url || "/assets/images/services/avatar.svg";

  // Safely access text content
  const textContent = isArabic
    ? arabic?.text || arabic || ""
    : english?.text || english || "";

  // Safely access name
  const userName = isArabic
    ? arabic?.name || name || ""
    : english?.name || name || "";

  // Safely access company
  const userCompany = isArabic
    ? arabic?.company || company || ""
    : english?.company || company || "";

  return (
    <article className="px-7 py-4 bg-gray-900 rounded-xl w-[346px] h-[231px] flex flex-col">
      <img
        src={imageUrl}
        alt={`${userName}'s profile`}
        className="object-contain w-12 rounded-full aspect-square"
      />
      <div className="flex flex-col mt-2.5 w-full flex-grow">
        <p className="self-start text-base font-medium text-white">
          {textContent}
        </p>
        <div className="flex gap-3 items-start w-full text-xs mt-auto">
          <span className="text-white">{userName}</span>
          <span className="text-neutral-500">{userCompany}</span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
