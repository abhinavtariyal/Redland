import React from 'react'
import { Typography } from "@material-tailwind/react";
const HeadlineSection = ({title,subtitle}) => {
  return (
    <div className="relative container mx-auto m-5">
        <span className="w-[20%] h-[3px] bg-red-600 absolute top-10 left-56"></span>
        <Typography
          variant="h1"
          className="text-center text-neutral-600 text-7xl text-opacity-90 font-semi-bold m-0"
        >
          {title}
        </Typography>
        <Typography variant="lead" className="text-center font-my-font">
          {subtitle}
        </Typography>
        <span className="w-[20%] h-[3px] bg-red-600 absolute top-10 right-56"></span>
      </div>
  )
}

export default HeadlineSection