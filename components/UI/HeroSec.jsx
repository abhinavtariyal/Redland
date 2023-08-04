import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
const HeroSec = () => {
  const router = useRouter();
  return (
    <header className="p-8 bg-white h-full">
      <div className="w-w-full mx-auto pt-4 pb-20 text-center">
        <Typography
          variant="h1"
          color="inherit"
          className="mx-auto mb-8 w-full leading-tight lg:max-w-2xl"
        >
          Our company mission is to lead the Immigration Consultancy Services.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mb-12 w-full px-8 !text-gray-500 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
        >
          Your Dream Career, Job Opportunity and your Promising future awaits
          you.
        </Typography>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="gradient"
            onClick={() => router.push("/contactPage")}
            color="blue-gray"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="w-full lg:mx-auto mb-2 h-full">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3264&q=80"
          alt="meeting"
          className="h-96 w-full rounded-xl object-cover md:h-[48rem] lg:h-[56rem]"
        />
      </div>
    </header>
  );
};

export default HeroSec;
