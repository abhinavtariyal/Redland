import { CardSection } from "@/components/CardSection";
import { CarouselDefault } from "@/components/Carousel";
import Footer from "@/components/Footer";
import LogoSectionTwo from "@/components/LogoSection";
import HeroSec from "@/components/UI/HeroSec";
import StatsSectionThree from "@/components/UI/stats";

const HomePage = () => {
  return (
    <>
      <HeroSec />
      {/* <StatsSectionThree /> */}
      <LogoSectionTwo />
      <CarouselDefault />
      <CardSection />
      <Footer />
    </>
  );
};

export default HomePage;
