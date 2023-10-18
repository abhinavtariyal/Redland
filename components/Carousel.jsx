// import { Carousel} from "@material-tailwind/react";
import Carousel from "react-multi-carousel";
import { TestimonialCard } from "./TestimonialCard";
import { v4 as uuidv4 } from "uuid";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselDefault() {
  const data1 = useSelector((state) => state.data);
  return (
    // <div className="w-[80%] flex mx-auto my-8 justify-center items-center flex-col">
    <div className="mb-20 flex-1 flex-col items-center justify-center h-[32rem] my-auto">
      <Typography
        className="text-center font-my-font text-6xl mb-12 p-5"
        variant="h3"
      >
        Clients' Testimonial
      </Typography>
      {/* <Carousel autoplay={true} delay= {3000} loop={true} transition={{duration:1}}>
        {data1.map((person) => (
          <div key={uuidv4()} className="flex items-center justify-center m-10">
            <TestimonialCard personData={person}/>
          </div>
        ))}
      </Carousel> */}
      <div className="mx-auto flex-1 justify-between items-center h-full mb-10">
        <Carousel
          responsive={responsive}
          ssr={true}
          autoPlay={true}
          infinite={true}
          arrows={false}
        >
          {data1.map((person, i) => {
            return (
              <div key={i} className="mx-auto ml-14">
                <TestimonialCard personData={person} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselDefault;
