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
  activeTab:'home'
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setActiveTab(state,action){
    state.activeTab = action.payload;
    }
  },
});

const store = configureStore({
  reducer: reviewSlice.reducer,
});

export default store;

export const reviewActions = reviewSlice.actions;
