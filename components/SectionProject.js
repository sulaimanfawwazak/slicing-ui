import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProject() {
  return (
    <section id="projects">
      <div className="container mx-auto py-[135px] px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Some projects that Ive done</SectionParagraph>

        <div className="flex lg:items-center md:items-start xl:w-9/12-mx-4 mt-[83px] flex-wrap">
          <div className="md:w-6/12 px-4 w-full mb-10 md:mb-0">
            <ProjectItem
              name="Hasten"
              description="Eksplorasi landing page"
              image="/hasten.png"
            />
          </div>
          <div className="md:w-6/12 px-4 w-full">
            <ProjectItem
              name="Resources"
              description="Eksplorasi resources page"
              image="/resources.png"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Resources"
              description="Eksplorasi resources page"
              image="/resources.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Hasten"
              description="Eksplorasi landing page"
              image="/hasten.png"
            />
          </div>
        </div>
      </div>      
    </section>
  );
}