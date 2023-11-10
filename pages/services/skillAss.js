import VisaInfoComponent from "@/components/StudentVisaComponent";

const visaData = 
  {
    title: "Skill Assesment",
    about:
      "Skills assessments are provided by pertinent skills assessing authorities, which are organizations responsible for verifying that your skills align with the standards required for working in a specific occupation. Obtaining an appropriate skills assessment is compulsory for certain visa subclasses (and streams) and may be required for others. It is imperative to thoroughly review all available information about the visa you intend to apply for. This will enable you to determine whether a skills assessment is necessary and the timeframe within which you need to obtain it.",
    title2: "Visas",
    detail2:
      "You might need a skills assessment if you apply for the following visas and streams: General Skilled Migration (GSM) visas, Employer Sponsored visas, Temporary Skill Shortage visa (TSS), Temporary Graduate visa (subclass 485)",
  }
const SkillAss = () => {
  return (
    <VisaInfoComponent
      title={visaData.title}
      about={visaData.about}
      title2={visaData.title2}
      detail2={visaData.detail2}
      title3={visaData.title3}
      detail3={visaData.detail3}
      title4={visaData.title4}
      detail4={visaData.detail4}
    />
  );
};

export default SkillAss;
