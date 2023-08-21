import { SimpleCard } from "@/components/UI/ServiceCard";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import React from "react";
const VisaComponent = () => {
  const data = useSelector((state) => state.serviceData);
  return (
    <div
      id="visa"
      className="w-[90%] h-[80%] bg-white rounded-xl shadow mx-auto p-10 container"
    >
      <Typography variant="h2" className="font-my-font text-red-600">
        VISA
      </Typography>
      <img
        className="w-[25rem] h-[24rem] float-right"
        src="https://images.unsplash.com/photo-1581656702382-9ae90e68e7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1881&q=80"
      />
      <div className="w-[751px] h-[378px] mt-10">
        <Typography
          variant="lead"
          className="mb-12 !text-gray-500 font-my-font text-justify"
        >
          Welcome to our dependable and expert visa services! We specialize in
          making the visa application procedure as simple as possible so you can
          travel without problem to your final destination.
          <br />
          <br />
          <br />
          Our experienced team of visa specialists is committed to offering
          custom solutions to satisfy your travel requirements. It might be
          difficult to navigate the intricate requirements, paperwork, and
          submission processes for visas, but with our assistance, the entire
          process will go smoothly for you.
        </Typography>
      </div>
      <div className="flex gap-20 flex-wrap justify-center text-justify">
        {data.map((service) => (
          <SimpleCard
            key={service.title}
            title={service.title}
            content={service.content}
          ></SimpleCard>
        ))}
      </div>
    </div>
  );
};

export default VisaComponent;
