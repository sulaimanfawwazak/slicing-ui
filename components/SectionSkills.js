import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
    return (
        <section className="py-[122px] bg-skill" id="skills">
          <div className="container mx-auto px-10 2xl:px-0">
            <SectionTitle>Skills</SectionTitle>
            <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
            <div className="flex -mx-4 mt-20 flex-wrap">
              <div className="md:w-4/12 px-4 mb-8 w-full">
                <SkillCard
                  name="Javascript"
                  level="Lanjutan"
                  image="/javascript.svg"
                  imageClassName="h-16 rounded-full"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full">
                <SkillCard
                  name="React"
                  level="Lanjutan"
                  image="/react.svg"
                  imageClassName="h-16"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full">
                <SkillCard
                  name="Node.js"
                  level="Lanjutan"
                  image="/nodejs.svg"
                  imageClassName="h-16"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full">
                <SkillCard
                  name="Javascript"
                  level="Lanjutan"
                  image="/javascript.svg"
                  imageClassName="h-16 rounded-full"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full">
                <SkillCard
                  name="React"
                  level="Lanjutan"
                  image="/react.svg"
                  imageClassName="h-16"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full">
                <SkillCard
                  name="Node.js"
                  level="Lanjutan"
                  image="/nodejs.svg"
                  imageClassName="h-16"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full md:pb-0">
                <SkillCard
                  name="Javascript"
                  level="Lanjutan"
                  image="/javascript.svg"
                  imageClassName="h-16 rounded-full"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-full md:pb-0">
                <SkillCard
                  name="React"
                  level="Lanjutan"
                  image="/react.svg"
                  imageClassName="h-16"
                />
              </div>
              <div className="md:w-4/12 px-4 pb-8 w-fulli md:pb-0">
                <SkillCard
                  name="Node.js"
                  level="Lanjutan"
                  image="/nodejs.svg"
                  imageClassName="h-16"
                />
              </div>
            </div>
          </div>
        </section>
    );
}