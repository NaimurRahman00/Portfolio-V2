import { Contact } from "@/components/blocks/Contact";
import HeroSection from "@/components/blocks/HeroSection";
import { Projects } from "@/components/blocks/Projects";
import { Resume } from "@/components/blocks/Resume";
import { Service } from "@/components/blocks/Service";
import { SkillsSection } from "@/components/blocks/SkillsSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <SkillsSection/>
      <Service/>
      <Projects/>
      <Resume/>
      <Contact/>
    </>

  );
}
