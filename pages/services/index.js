import React from "react";
import VisaComponent from "@/components/VisaComponent";
import RightCard from "@/components/RightCard";
import LeftCard from "@/components/LeftCard";
import HeadlineSection from "@/components/UI/HeadlineSection";

const dataArray = [
  {
    title: "OSHC/OSVC",
    content:
      "Interested in applying for an Australian Student Visa or Considering employment opportunities in Australia, whether on a temporary or permanent basis? Secure your compliance with visa condition 8501 by obtaining health insurance today. Safeguard yourself against unforeseen medical expenses during your time in Australia. We assist in providing best health covers for 500, 457, 482, 485, 489, and other Visas.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    link: "/services/HealthInsurance",
  },
  {
    title: "Skills Assesment",
    content:
      "If you’re planning to migrate to Australia or New Zealand, you may need a skills assessment to determine if you meet skilled migration visa requirements. We have an exceptional record in providing Positive Skills Assesment for our clients. We have a 100% success rate till now!!!",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80",
    link: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment",
  },
  {
    title: "IELTS, PTE & SPOKEN ENGLISH",
    content:
      "We provide one of the best IELTS coachings to the people to pass their IELTS test with good Band score. We bring rich expertise to support students to qualify for the IELTS test. Join us to accomplish your dream score and travel abroad for study visa in USA, Canada, Australia, New Zealand & UK.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    link: "https://medium.com/@abhinavtariyal/benefits-of-ielts-pte-coaching-10657d2906a",
  },
  {
    title: "COURSE CHANGE",
    content:
      "Our goal is to equip you with a smooth transition procedure that makes the challenging task of shifting directions across borders simpler. Our knowledgeable staff of advisors is dedicated to assisting you on this life-changing journey, ensuring a smooth transition from the time you first express interest in a new academic path until your successful enrollment in the program of your choice.",
    image:
      "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    link: "services/courseChange",
  },
];

const ServiceComponent = () => {
  return (
    <>
      <HeadlineSection
        title="Services"
        subtitle="Unlocking Borders, Enabling Dreams: Your Visa Journey Made Effortless"
      />
      <VisaComponent />
      {dataArray.map((data, i) => (
        <div key={i}>
          {i % 2 == 0 ? (
            <LeftCard
              key={i}
              title={data.title}
              image={data.image}
              content={data.content}
              link={data.link}
            />
          ) : (
            <RightCard
              title={data.title}
              image={data.image}
              content={data.content}
              link={data.link}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ServiceComponent;
