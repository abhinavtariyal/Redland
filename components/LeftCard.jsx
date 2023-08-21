import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const LeftCard = ({ image, title, content }) => {
  return (
    <div className="w-[1386px] h-[704px] rounded-xl shadow-md mx-auto mt-10 box-border relative">
      <img
        className="w-[510px] h-[704px] float-left rounded-xl object-cover"
        src={image}
      />
      <div className="h-[150px] text-red-600 text-[64px] font-bold capitalize mb-32 text-center">
        {title}
      </div>
      <div className="p-8 text-center">
        <Typography className="h-[216px] text-black text-[26px] font-my-font capitalize text-justify">
          {content}
        </Typography>
      </div>
      <div className="absolute bottom-4 left-[65%]">
        <Button variant="outlined" className="border-red-600 text-red-600">
          Know More
        </Button>
      </div>
    </div>
  );
};

export default LeftCard;
