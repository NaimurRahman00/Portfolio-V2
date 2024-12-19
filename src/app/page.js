import HeroSection from "@/components/blocks/HeroSection";
import { Projects } from "@/components/blocks/Projects";
import { Resume } from "@/components/blocks/Resume";
import { Service } from "@/components/blocks/Service";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Service/>
      <Projects/>
      <Resume/>
    </>

  );
}
