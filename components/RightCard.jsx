import { Typography, Button } from "@material-tailwind/react";
import React from "react";

const RightCard = ({ image, title, content }) => {
  return (
    <div className="w-[1386px] h-[704px] bg-white rounded-xl shadow mx-auto mt-10 relative">
      <img
        className="w-[510px] h-[704px] rounded-xl float-right"
        src={image}
      />
      <div className="h-[150px] text-red-600 text-[64px] font-bold capitalize mb-20 text-center p-6">
        {title}
      </div>
      <div className="p-10 w-[65%]">
        <Typography className="h-[216px] text-black text-[26px] font-my-font capitalize text-justify">
          {content}
        </Typography>
      </div>
      <div className="absolute bottom-4 right-[65%]">
        <Button variant="outlined" className="border-red-600 text-red-600">
          Know More
        </Button>
      </div>
    </div>
  );
};

export default RightCard;
