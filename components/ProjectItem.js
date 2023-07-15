export default function ProjectItem({ image, name, description }) {
  return (
    <article className="text-center">
      <img src={image} className="w-full rounded-lg"/>
      <h3 className="font-semibold text-xl mb-4 mt-5">{name}</h3>
      <p className="text-lg text-[#808080] mb-[60px]">{description}</p>
    </article>
  );
}