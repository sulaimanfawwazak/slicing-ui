export default function NavItem({ href, children, scheme }) {
  const schemes = {
    light : "text-white text-opacity-60 hover:text-opacity-100 hover:text-semibold",
    dark: "text-black"
  }
  
  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a 
      href={href} className={`transition font-semibold text-lg ${pickedScheme}`}>
        {children}
      </a>
    </li>
  );
}