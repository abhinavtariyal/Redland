import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { HiClipboardDocumentList } from "react-icons/hi2";
const HeroSec = () => {
  const router = useRouter();
  return (
    <header className="bg-white h-[50rem] w-full">
      <div className="w-full lg:mx-auto h-[40rem] bg-[url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3264&q=80')] bg-fixed bg-cover"></div>
      <div className="flex justify-center relative bg-white">
        <div className="flex justify-between p-4 px-8 items-center w-full h-36">
          <LogoImage
            title="Expert Counsellors"
            icon={<BsFillClipboardCheckFill size={45}/>}
          />
          <LogoImage
            title="Helped 2000+ students study abroad"
            icon={<BsPersonCheckFill size={50}/>}
          />
          <LogoImage
            title="5000+ Visa approved"
            icon={<HiClipboardDocumentList size={50}/>}
          />
        </div>
        <div className="mt-32 flex flex-wrap justify-center gap-4 absolute z-10">
          <Button
            size="lg"
            variant="filled"
            onClick={() => router.push("/contactPage")}
            className="bg-black"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export const LogoImage = ({ title, icon }) => {
  return (
    <div className="flex">
      {icon}
      <Typography className="ml-2">{title}</Typography>
    </div>
  );
};

export default HeroSec;
