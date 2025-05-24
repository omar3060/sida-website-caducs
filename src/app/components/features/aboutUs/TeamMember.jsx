const TeamMember = ({ image, name, role }) => {
    return (
      <div className="flex flex-col gap-2 items-center">
        <img
          src={image}
          alt={name}
          className="object-contain rounded-xl h-[331px] w-[374px]"
        />
        <div className="text-center">
          <h3 className="text-lg font-bold text-secondaryColor">{name}</h3>
          <p className="text-xs font-bold text-[#17242A80] text-opacity-50">{role}</p>
        </div>
      </div>
    );
  };
  
  export default TeamMember;
  