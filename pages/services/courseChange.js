import VisaInfoComponent from "@/components/StudentVisaComponent";

const visaData = 
  {
    title: "Skill Assesment",
    about:
      "Once you commence your studies in Australia, you may discover an alternative course or field of study that aligns better with your interests or career aspirations. A stipulation of your student visa is that you must remain enrolled in a course that is at the same level or higher than the one for which your visa was initially approved. If you wish to switch your course or educational institution, it is imperative to review your student visa obligations and adhere to the appropriate procedures.",
    title2: "Changing course at the same education provider",
    detail2:
      " If you decide to switch your course while remaining with the same educational or training provider: If your new course is at an equivalent or higher level of qualification, or you are transitioning from a doctoral degree to a master's degree, you can coordinate the change with your provider without the need to apply for a new student visa. However, if your current visa is approaching expiration, and you require additional time to complete the new course, applying for a new student visa becomes necessary. A new student visa application is required if your new course represents a lower-level qualification (e.g., moving from a Bachelor's degree to a Diploma) or if you are transferring to an ELICOS course.",
    title3: "Changing your education provider",
    detail3:
      "If you have not yet completed 6 months of your primary course, changing education providers is restricted to certain situations. These circumstances include: 1. Serious illness 2. Loss of a family member (with a death certificate if possible) 3. Major disaster in your home country necessitating emergency travel 4. Traumatic experiences. Before attempting to enroll at a different provider, you must contact your current education provider. They will assess your request, taking into account the mentioned circumstances, and decide whether to approve your transfer. If your current provider grants permission for you to transfer before completing 6 months of study, they will inform the Department of Home Affairs. There is no need for you to send a new Confirmation of Enrolment (CoE) or update your ImmiAccount in this case.",
    title4: "If you have completed 6 months or more of your main course",
    detail4:
      "If you change your course or education provider after 6 months of study, tell your provider and they will let the Department of Home Affairs know. You do not need to send a new Confirmation of Enrolment (CoE) or update your ImmiAccount. You do not need to apply for a new student visa if your new course is the same or higher level (for example, from a Diploma to Diploma, or Diploma to Bachelor degree), or you are changing from a doctoral to master degree. You will need to apply for a new student visa if you want to change your main course of study to a lower-level course (for example, from a Bachelor degree to a Diploma), or you are transferring to an ELICOS course.",
  }
const CourseChange = () => {
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

export default CourseChange;
