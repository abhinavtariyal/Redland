import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const LeftCard = ({ image, title, content,link }) => {
  return (
    <div className="w-[1386px] h-[704px] rounded-xl shadow-md mx-auto mb-20 box-border relative">
      <img
        className="w-[510px] h-[704px] float-left rounded-xl object-cover"
        src={image}
      />
      <div className="h-[100px] text-red-600 text-6xl font-bold capitalize mb-32 text-center p-4">
        {title}
      </div>
      <div className="w-[750px] h-[216px] flex mx-auto">
        <Typography className="text-black text-[26px] font-my-font capitalize text-justify">
          {content}
        </Typography>
      </div>
      <div className="absolute bottom-4 left-[65%]">
        <Link href={link} target="_blank">
          <Button
            variant="outlined"
            size="lg"
            color="red"
          >
            Know More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LeftCard;
