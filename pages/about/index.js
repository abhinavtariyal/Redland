import ContentSectionOne from "@/components/ContentSection";
import TeamSection4 from "@/components/TeamCard";
import { DefaultTimeline } from "@/components/Timeline";
import HeadlineSection from "@/components/UI/HeadlineSection";
const AboutPage = () => {
  return (
    <>
      <HeadlineSection title="About Us" subtitle="" />
      <ContentSectionOne />
      <DefaultTimeline />
      <TeamSection4 />
    </>
  );
};

export default AboutPage;
