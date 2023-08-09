import { Carousel} from "@material-tailwind/react";
import { TestimonialCard } from "./TestimonialCard";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
export function CarouselDefault() {

  const data1 = useSelector(state => state.data) 
  return (
    <div className="w-[80%] flex mx-auto my-8 justify-center items-center flex-col">
      <h1 className="text-[36px] -ml-6">Hear it from our clients</h1>
      <Carousel autoplay={true} delay= {3000} loop={true} transition={{duration:1}}>
        {data1.map((person) => (
          <div key={uuidv4()} className="flex items-center justify-center m-10">
            <TestimonialCard personData={person}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
