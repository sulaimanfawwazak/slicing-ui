export default function SkillCard({name, level, image, imageClassName}) {
  const addImageClassName = imageClassName ? ` ${imageClassName}` : "";
  
  return (
    <div className="bg-white text-lg rounded-lg py-7 pl-[23px] shadow-skill flex items-center">
      <img src={image} className={`mr-5 ${addImageClassName}`}/>
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="font-semibold text-[#A3A3A3] text-sm">{level}</p>
      </div>
    </div>
  );
}