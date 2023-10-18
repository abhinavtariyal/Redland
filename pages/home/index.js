import { CardSection } from "@/components/CardSection";
import CarouselDefault from "@/components/Carousel";
import LogoSectionTwo from "@/components/LogoSection";
import HeroSec from "@/components/UI/HeroSec";

const CardArray = [
  {
    title: "Student Visa",
    content:
      "Pursuing education overseas provides a distinct opportunity to encounter life in a novel manner, while also granting access to an exceptional educational landscape encompassing prestigious universities, hands-on vocational institutions, and exceptional English language schools dedicated to aiding international students.",
    image:
      "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80",
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
  },
  {
    title: "Overseas Student Health Cover",
    content:
      "Interested in applying for an Australian Student Visa? Secure your compliance with visa condition 8501 by obtaining health insurance today. Safeguard yourself against unforeseen medical expenses during your time in Australia.  We Assist In Providing Best Health Covers For 500, 457, 482, 485, 489, And Other Visas.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    link: "https://getmypolicy.online/au/",
  },
  {
    title: "IELTS,TOEFEL,PTE Coaching",
    content:
      "We offer top-quality IELTS coaching designed to help individuals achieve a favorable band score on their IELTS test. Our extensive experience equips us to assist students in successfully meeting the requirements of the IELTS exam. Partner with us to realize your desired score and fulfill your aspirations of pursuing a study visa in USA, Canada, Australia, New Zealand, or the UK.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1828&q=80",
    link: "https://medium.com/@abhinavtariyal/benefits-of-ielts-pte-coaching-10657d2906a",
  },
  {
    title: "Professional Year",
    content:
      "Are you an overseas graduate who has studied Accounting, IT, or Engineering in Australia? Acquiring a Professional Year certificate can greatly enhance your Permanent Residency (PR) application!. Successfully finishing a Professional Year Program provides Engineering, IT, and Accounting Graduates with a competitive advantage, along with an additional five points for their application for Australian Permanent Residency.",
    image:
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
    link: "https://www.acs.org.au/cpd-education/professional-year-program.html",
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSec />
      {/* <StatsSectionThree /> */}
      <LogoSectionTwo />
      <CardSection CardArray = {CardArray}/>
      <CarouselDefault />
    </>
  );
};

export default HomePage;
