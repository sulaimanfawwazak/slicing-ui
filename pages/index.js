import BackToTopButton from '../components/BackToTopButton';
import BackToTopText from '../components/BackToTopText';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProfileSection from '../components/ProfileSection';
import SectionProject from '../components/SectionProject';
import SectionSkills from '../components/SectionSkills';

export default function Home() {
  return (
    <>
      <Hero/>
      <ProfileSection/>
      <SectionSkills/>
      <SectionProject/>
      <ContactSection/>
      <Footer/>
      <div className="App">
        <BackToTopText/>
      </div>
      <BackToTopButton/>
    </>
  )
}
