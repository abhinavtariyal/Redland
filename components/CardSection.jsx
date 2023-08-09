import React from "react";
import CardTwo from "./UI/Card";
import { Button, Typography } from "@material-tailwind/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
export const CardSection = () => {
  const [curr, setCurr] = useState(0);
  const CardArray = [<CardTwo title="hello1"/>, <CardTwo title="hello2"/>, <CardTwo />];

  const next = () => {
    setCurr((cur) => (cur === CardArray.length - 1 ? 0 : cur + 1));
  };

  const prev = () => {
    setCurr((cur) => (curr === 0 ? CardArray.length - 1 : cur - 1));
  };

  console.log(curr);
  return (
    <div className="bg-gray-50 relative">
      <Typography variant="h3" className="text-center">
        Services
      </Typography>
      <div className="flex justify-center items-center">
        {CardArray.map((card, i) => {
          return <div className="transition ease-in-out duration-200">{i === curr && card}</div>;
        })}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-32">
        <button
          className="rounded-full bg-white/80 p-1 shadow hover:bg-white"
          onClick={prev}
        >
          <BsChevronLeft size={30} color="black" />
        </button>
        <button
          className="rounded-full bg-white/80 p-1 shadow hover:bg-white"
          onClick={next}
        >
          <BsChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};
