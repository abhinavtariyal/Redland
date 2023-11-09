import VisaInfoComponent from "@/components/StudentVisaComponent";

const visaData = 
  {
    title: "Parent Visa",
    about:
      "With this Visa you can Remain in Australia for an extended period, Pursue work and education opportunities in Australia, Register for Australia's public healthcare system, Medicare, Support your family members in joining you in Australia. If you meet the criteria, seek Australian citizenship.",
    title2: "How long you can stay",
    detail2:
      " This visa is of a permanent nature, granting you the privilege of residing in Australia without a time limit. In terms of eligibility for citizenship, your permanent residency begins from the date of visa approval.",
    title3: "Travel to and fro Australia for 5 years",
    detail3:
      "You can travel to and from Australia as many times as you want for 5 years from the date we grant this visa. This is as long as the travel facility on this visa remains valid. If you want to travel after the initial 5-year travel facility: you will need to apply for and be granted a Resident Return (RRV) so that you can re-enter Australia as a permanent resident you might also want to consider Australian citizenship. If you become an Australian citizen, you don't require a visa to enter Australia. You will need to apply for an Australian passport and use it to leave and re-enter Australia. See more about eligibility requirements and current processing times for Australian citizenship",
    title4: "Cost",
    detail4:
      "The visa fee starts at AUD4,990.00, and there is an extra fee for each accompanying family member. Payment for this visa is divided into two installments: the first installment is due upon application, and the second installment is to be paid upon our request. Additionally, there may be other expenses for health assessments, police certificates, and biometrics for each applicant.",
  }
const parentVisa = () => {
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

export default parentVisa;
