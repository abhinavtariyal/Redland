import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const RightCard = ({ image, title, content, link }) => {
  return (
    <div className="w-[1386px] h-[704px] bg-white rounded-xl shadow mx-auto mb-20 relative">
      <img
        className="w-[510px] h-[704px] rounded-xl float-right object-cover"
        src={image}
      />
      <div className="w-[750px] h-[150px] text-red-600 text-6xl font-bold capitalize mb-5 text-center">
        {title}
      </div>
      <div className="w-[750px] h-[216px] flex mx-auto">
        <Typography className="text-black text-[26px] font-my-font capitalize text-justify">
          {content}
        </Typography>
      </div>
      <div className="absolute bottom-4 right-[65%]">
        <Link href={link} target="_blank">
          <Button
            variant="outlined"
            size="lg"
            className="border-red-600 text-red-600"
          >
            Know More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RightCard;
