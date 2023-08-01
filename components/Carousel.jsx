import { Carousel } from "@material-tailwind/react";
import { TestimonialCard } from "./TestimonialCard";
import { Data } from "../reviewData";
import { v4 as uuidv4 } from 'uuid';
export function CarouselDefault() {
  return (
    <div className="w-[80%] flex mx-auto my-8">
      <Carousel autoplay={true} delay= {3000} loop={true}>
        {Data.map((person) => (
          <div key={uuidv4()} className="flex items-center justify-center m-10">
            <TestimonialCard personData={person}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
