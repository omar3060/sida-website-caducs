const TeamMember = ({ image, arabic, english, locale }) => {
  const isArabic = locale === "ar";

  // Safety checks to ensure data is available
  if (!arabic || !english) {
    return <div>Loading team member...</div>;
  }

  const title = isArabic
    ? arabic.title || "No title"
    : english.title || "No title";
  const content = isArabic
    ? arabic.content || "No content"
    : english.content || "No content";

  return (
    <div className="flex flex-col gap-2 items-center">
      <img
        src={image.secure_url}
        alt={title}
        className="object-contain rounded-xl h-[331px] w-[374px]"
      />

      <div className="text-center">
        <h3
          className={`text-lg font-bold text-secondaryColor ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-xs font-bold text-[#17242A80] text-opacity-50 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
