import React from "react";
import VisaComponent from "@/components/VisaComponent";
import { Typography } from "@material-tailwind/react";
const ServiceComponent = () => {
  return (
    <>
      <div>
        <span className="w-[30%] h-[3px] bg-red-600 top-8"></span>
        <div className="mx-auto block">
          <Typography
            variant="h1"
            className="text-center text-neutral-600 text-opacity-90 font-bold"
          >
            Services
          </Typography>
        </div>
      </div>
      <VisaComponent />
    </>
  );
};

export default ServiceComponent;
