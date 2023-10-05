import ContentSectionOne from "@/components/ContentSection";
import TeamSectionTwo from "@/components/Team";
import { DefaultTimeline } from "@/components/Timeline";
import HeadlineSection from "@/components/UI/HeadlineSection";
const AboutPage = () => {
  return (
    <>
      <HeadlineSection title="About Us" subtitle="" />
      <ContentSectionOne />
      <DefaultTimeline />
      {/* <TeamSectionTwo /> */}
    </>
  );
};

export default AboutPage;
