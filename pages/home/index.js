import { CardSection } from "@/components/CardSection";
import { CarouselDefault } from "@/components/Carousel";
import FooterThree from "@/components/Footer1";
import LogoSectionTwo from "@/components/LogoSection";
import HeroSec from "@/components/UI/HeroSec";

const HomePage = () => {
  return (
    <>
      <HeroSec />
      {/* <StatsSectionThree /> */}
      <LogoSectionTwo />
      <CardSection />
      <CarouselDefault />
    </>
  );
};

export default HomePage;
