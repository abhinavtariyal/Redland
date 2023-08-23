import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "Abhinav Tariyal",
      image: "/abhinav.jpeg",
      review:
        "Naveen is a sincere, professional and prompt migration agent. He has extensive knowledge in this field and has managed to answer all my queries. Thank you for your continued support and guidance. I would highly recommend this company!",
    },
    {
      name: "Kevin Lionel",
      image: "/k.webp",
      review:
        "Mr Naveen was very helpful and detailed in guiding me through the necessary steps involved with obtaining my temporary activity visa. Definitely recommend Redlands Immigration Consultants to anyone looking for visa services.",
    },
    {
      name: "Parkshith Ramchander",
      image: "/pari.png",
      review:
        "REDLAND IMMIGRATION is the best choice i ever made regarding visa consultancy. Naveen’s knowledge and experience has helped tackle small hiccups and made sure the entire dependent visa process was completed smoothly. Thank you",
    },
    {
      name: "Sukhdeep Anttal",
      image: "/s.png",
      review:
        "What an amazing experience that I had with Redland Immigration consultants 🙏🙏. I would highly recommend them to anyone looking for assistance with their visa process! Thank you Redland Immigration consultants:)",
    },
    {
      name: "Sandeep Kumar",
      image: "/sa.png",
      review:
        "Before contacting Naveen Sir,I met 2 or 3 more agents who mislead me badly. Naveen sir tried for atleast 3 months to get my admission in desirable course and finally he did that anyhow and it was only Naveen Sir who went extra mile to make sure my admission",
    },
  ],
  serviceData: [
    {
      title: "STUDENT VISAS",
      content:
        "Studying abroad offers a unique way to experience life, whilst gaining access to world-class education system including top-ranking universities, practical vocational colleges and outstanding English language schools to support international students.",
      link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    },
    {
      title: "WORK VISAS",
      content:
        "Our company has a substantial record of having successfully completed the process associated with Employer Sponsored Visas and Temporary Skill Shortage (TSS) visa. Our services reach clients from all over the world.",
      link: "https://immi.homeaffairs.gov.au/Visa-subsite/Pages/work/explore-visa-options-work.aspx",
    },
    {
      title: "TOURIST VISA/VISITOR VISA",
      content:
        "Visitor visa program may allow individuals (and families) to enter the country for short term stays for tourism or business visitor purposes. Broadly speaking, tourism purposes include holidays, seeing family and or friends whereas Business visitor include attending a conference, negotiation or an exploratory business visit.",
      link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/tourist-stream-overseas",
    },
    {
      title: "FAMILY VISAS",
      content:
        "Our company has a substantial record of having successfully completed the process associated with Employer Sponsored Visas and Temporary Skill Shortage (TSS) visa. Our services reach clients from all over the world.",
      link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/join-family",
    },
    {
      title: "GSM/SKILLED VISA",
      content:
        "The General Skilled Migration Visa primarily benefits skilled professionals who have the intention of establishing permanent residence and employment in Australia. This visa option also extends to individuals who secure sponsorship from an Australian employer. Redland Immigration offers consultation, assessment, and visa assistance for the GSM category.",
      link: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
    },
  ],
  activeTab: "html",
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

const store = configureStore({
  reducer: reviewSlice.reducer,
});

export default store;

export const reviewActions = reviewSlice.actions;
