export default function Button({ className, variant, children, pill, href }) {
  const addClassName = className ? ` ${className}` : "";
  
  const variants = {
    "outline-yellow" : `border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black`,
    "yellow" : `bg-yellow-500 hover:bg-yellow-600 text-black`,
    "black" : `bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black`
  };

  const pickVariant = variants[variant];

  return (
    <a href={href} className={`"trasition py-3 px-10 font-semibold text-lg inline-block ${pill ? " rounded-full" : ""} ${pickVariant} ${addClassName}`}>
      {children}
    </a>
    );
}