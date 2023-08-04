import TeamSectionTwo from "@/components/Team";
import { DefaultTimeline } from "@/components/Timeline";
const AboutPage = () => {
  return (
    <>
    <div className="flex justify-center items-center bg-red-50 mt-5">
    <DefaultTimeline />
    </div>
      
      <TeamSectionTwo />
    </>
  );
};

export default AboutPage;
