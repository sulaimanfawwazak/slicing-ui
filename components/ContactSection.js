import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contacts">
      <div className="bg-skill flex flex-wrap rounded-lg">
        <div className="md:w-6/12 md:border-r w-full border-b border-[#E8E8FB]">
          <div className="lg:pt-[58px] lg:pl-[74px] md:p-14 p-10">
            <SectionTitle left>Contacts</SectionTitle>
            <SectionParagraph left>Beberapa cara menghubungi saya</SectionParagraph>

            <ContactItem
              label="Mail"
              value="sulaimanfawwazak@gmail.com"
              icon="/mail.svg"
              className="mt-[42px]"
            />
              <ContactItem
              label="Phone"
              value="+62 852-5051-3667"
              icon="/phone.svg"
              className="mt-[42px]"
            />
            <ContactItem
              label="Twitter"
              value="@helloimmawhale"
              icon="/twitter.svg"
              className="mt-[42px]"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full p-10">
          <form className="lg:pt-[87px] lg:px-[64px] md:p-14">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 px-4 w-full">
                <Field
                label="Name"
                name="name"
                type="text"
                />
              </div>
              <div className="lg:w-6/12 px-4 w-full">
                <Field
                label="Email"
                name="email"
                type="text"
                />
              </div>
            </div>
            <Field
              label="Subject"
              name="subject"
              type="text"
            />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            <div className=" pb-[49px] text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}