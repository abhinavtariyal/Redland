import VisaInfoComponent from "@/components/StudentVisaComponent";

const visaData = 
  {
    title: "Student Visa",
    about:
      "With this visa you can participate in an eligible course of study in Australia , travel in and out of Australia work up to 48 hours a fortnight when your course of study or training is in session (students studying a masters by research or doctoral degree, and their families,have no work limit). See Work restrictions for student visa holders.",
    title2: "How long you can stay",
    detail2:
      " This is a temporary visa to study up to 5 years. The type of course and its length will determine the length of stay Primary school children enrolled in years 1-4 will generally only be granted a student visa fora maximum period of 3 years.",
    title3: "Stay Longer",
    detail3:
      "To continue studying in Australia, you must apply for a new Student visa. If your Student visa will expire before your graduation you mightbe eligible for a Visitor visa (subclass 600). You will need a letter from your education provider with the date of your graduation. If you hold or held a student visa and completed specific qualifications in Australia in the last six months, you might be eligible for a Temporary Graduate visa (subclass 485). If you are a recent engineering graduate of a recognized institution you might be eligiblefor the Skilled Recognition Graduate visa (subclass 476). If you want to stay longer for other reasons, you must apply for a new visa that suits your circumstances. Explore your visa options.",
    title4: "Cost",
    detail4:
      "The visa costs from AUD710.00 for the main applicant, unless they are exempt. There is also a charge for each family member who applies for the visa. You might also have to pay other costs for health checks, police certificates and biometrics.",
  }
const studentVisa = () => {
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

export default studentVisa;
