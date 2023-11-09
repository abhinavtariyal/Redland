import VisaInfoComponent from "@/components/StudentVisaComponent";

const visaData = 
  {
    title: "GSM Visa",
    about:
      "The General Skilled Migration Visa primarily caters to skilled workers seeking permanent residence in Australia. It is also an option for individuals who have the sponsorship of an Australian employer. Aussizz offers guidance, evaluation, and visa assistance for those in the GSM category.",
    title2: "Categories of GSM VISA",
    detail2:
      " There are several GSM subclasses.  Some of these subclass lead to the grant of permanent residency, whilst others are temporary or provisional in nature.Skilled Independent – Subclass 189 (Permanent Residency), Skilled Nominated – Subclass 190 (Permanent Residency), Skilled Work Regional (Provisional) – Subclass 491 – will lead to permanent residency, Skilled Regional – Subclass 887 (Permanent Residency)Skilled Regional – Permanent Residence – Subclass 191",
    title3: "Criteria",
    detail3:
      "The present threshold for submitting an Expression of Interest (EOI) is 65 points and should have skilled work experience. A positive skill assesment should be relevant at the time of applying GSM Visa. Nevertheless, having a higher point total enhances the strength of your application and increases your chances of receiving an invitation. Certain professions may necessitate a significantly higher pass mark, and not all occupations receive invitations in every round.",
    title4: "Cost",
    detail4:
      "The visa fee starts at AUD4,115.00, and there is an extra fee for each accompanying family member. Payment for this visa is divided into two installments: the first installment is due upon application, and the second installment is to be paid upon our request. Additionally, there may be other expenses for health assessments, police certificates, and biometrics for each applicant.",
  }
const GSMVisa = () => {
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

export default GSMVisa;
