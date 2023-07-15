export default function SectionParagraph({ left, children }) {
  return (
    <p className={`text-lg text-[#808080] mt-[10px] ${!left ? " text-center" : ""}`}>{children}</p>
  );
}