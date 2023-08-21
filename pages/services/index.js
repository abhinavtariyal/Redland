import React from "react";
import VisaComponent from "@/components/VisaComponent";
import { Typography } from "@material-tailwind/react";
import RightCard from "@/components/RightCard";
import LeftCard from "@/components/LeftCard";

const dataArray = [
  {
    title: "OVERSEAS STUDENT HEALTH COVER",
    content:
      "GSM Visas are available for highly skilled applicants who have enough points and meet the eligibility criteria. We can assist you from thebeginning, the skills assessment through to obtaining your GSM visa.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
  },
  {
    title: "PRE DEPARTURE BRIEFING",
    content:
      "Redland Immigration organises pre departure sessions for students. We feel this is one of the most important sessions in the whole process.  We get the opportunity to share with students about their new destination, new culture they are going to face, about the institute they are enrolling for and also making them aware of Do’s and Don’ts while they settle themselves in totally a new environment. This not only allows them to get more confidence but also adjust better in the institute and hence have better performance in the programs of study.",
    image:
      "https://images.unsplash.com/photo-1600184029839-58530ba111e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    title: "IELTS, PTE & SPOKEN ENGLISH",
    content:
      "We provide one of the best IELTS coachings to the people to pass their IELTS test with good Band score. We bring rich expertise to support students to qualify for the IELTS test. Join us to accomplish your dream score and travel abroad for study visa in Canada, Australia, New Zealand & UK.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
  },
  {
    title: "COURSE CHANGE",
    content:
      "Our goal is to equip you with a smooth transition procedure that makes the challenging task of shifting directions across borders simpler. Our knowledgeable staff of advisors is dedicated to assisting you on this life-changing journey, ensuring a smooth transition from the time you first express interest in a new academic path until your successful enrollment in the program of your choice.",
    image:
      "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
  },
];

const ServiceComponent = () => {
  return (
    <>
      <div className="relative container mx-auto m-5">
        <span className="w-[20%] h-[3px] bg-red-600 absolute top-10 left-56"></span>
        <Typography
          variant="h1"
          className="text-center text-neutral-600 text-7xl text-opacity-90 font-semi-bold m-0"
        >
          Services
        </Typography>
        <Typography variant="lead" className="text-center font-my-font">
          Unlocking Borders, Enabling Dreams: Your Visa Journey Made Effortless
        </Typography>
        <span className="w-[20%] h-[3px] bg-red-600 absolute top-10 right-56"></span>
      </div>
      <VisaComponent />
      {dataArray.map((data, i) => (
        <div key={i}>
          {/* {data.title} */}
          {i % 2 == 0 ? (
            <LeftCard
              key={i}
              title={data.title}
              image={data.image}
              content={data.content}
            />
          ) : (
            <RightCard
              title={data.title}
              image={data.image}
              content={data.content}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ServiceComponent;
