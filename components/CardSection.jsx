import React from "react";
import CardTwo from "./UI/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-tailwind/react";
export const CardSection = ({CardArray}) => {
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


  return (
    <div className="bg-blue-gray-50 relative">
      <Typography variant="h3" className="text-center font-my-font text-6xl mb-5 p-5">
        Services
      </Typography>
      <div>
        <Carousel responsive={responsive} ssr={true}>
          {CardArray.map((card, i) => {
            return (
              <div key={i}>
                {
                  <CardTwo
                    title={card.title}
                    content={card.content}
                    image={card.image}
                    link={card.link}
                  />
                }
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
