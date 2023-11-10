import VisaInfoComponent from "@/components/StudentVisaComponent";

const visaData = 
  {
    title: "OSHC/OSVC",
    about:
      "Overseas Student Health Cover (OSHC) offers international students essential health insurance coverage during their studies in Australia. In contrast, Overseas Visitor Health Cover (OVHC) is a form of insurance tailored for individuals on a Temporary Graduate visa (subclass 485), international visitors, and workers.",
    title2: "OSHC",
    detail2:
      " Having Overseas Student Health Cover (OSHC) is a compulsory condition for a Student visa (subclass 500). OSHC encompasses private and public hospital admissions, emergency ambulance services, consultations with doctors and specialists, costs associated with medical tests, and limited coverage for prescription medications. Providers of OSHC offer various products with varying degrees of coverage. Essential components such as hospital admissions, doctor visits, and emergency ambulance services are included in the mandatory minimum coverage. However, some providers offer supplementary packages that may include additional services like dental care and physiotherapy, potentially incurring extra charges.",
    title3: "OSVC",
    detail3:
      "Overseas Visitor Health Cover (OVHC) is a distinct type of health insurance intended for individuals on working and visitor visas. Many international students shift from a student visa to a Temporary Graduate visa (subclass 485), which necessitates OVHC instead of OSHC to meet visa condition 8501. It's essential to note that your OSHC coverage becomes invalid if you transition to a subclass 485 visa. Therefore, it is crucial to acquaint yourself with the specific visa requirements during the transition process.",
    title4: "",
    detail4:
      "",
  }
const HealthVisa = () => {
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

export default HealthVisa;
