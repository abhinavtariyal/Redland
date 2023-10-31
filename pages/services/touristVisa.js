import VisaInfoComponent from '@/components/StudentVisaComponent'
const visaData = {
    title: "Tourist Visa",
    about:
      "With this Visa you cn spend time with your family and/or friends, visit as a tourist, enjoy a cruise, or come for any non-business or non-medical purpose. You're allowed to engage in study or training for a duration of up to three months with this visa. However, if your primary intent is to pursue educational opportunities, it may be advisable to consider applying for a student visa instead. Please note that employment is not permitted under this visa.",
    title2: "How long can you stay",
    detail2:
      "This visa is of a temporary nature. Your permitted duration of stay in Australia is determined based on the particulars mentioned in the visa grant letter, which is assessed on a case-by-case basis. Factors we take into account when establishing your approved stay period include: The length of time you intend to remain in Australia. The purpose for your visit to Australia. Please be aware that the requested length of stay may not always align with the duration we grant. This visa can be issued as a single-entry or multiple-entry visa. If you are granted a multiple-entry visa, you have the flexibility to depart and re-enter Australia during the visa's validity period. Typically, a stay of 3 months is granted, but in specific situations, we may authorize a stay of up to 12 months. If you are a frequent traveler from the People's Republic of China, you might want to consider the Visitor visa (subclass 600) Frequent Traveller stream, especially if you visit Australia regularly.",
    title3:"Stay Longer",
    detail3:"Extending your stay in Australia beyond the limits of this visa is not possible. To prolong your time in the country, you must initiate a new visa application within Australia. Should your current visa not contain any restrictions preventing an extension, such as condition 8503 (No Further Stay), you are eligible to request an extension in specific cases where we may grant a waiver of the no further stay condition. If your aim is to remain in Australia for an extended or permanent period, you'll need to pursue a visa that permits such extended stays. It is advisable to explore the various visa options available to you.",
    title4:"Cost",
    detail4:"The visa fee for each applicant begins at AUD190.00. Additionally, there may be supplementary expenses associated with:Health assessments.Obtaining police clearance certificates.Providing biometric data, if required."
  }

  import React from 'react'
  
  const touristVisa = () => {
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
    )
  }
  
  export default touristVisa