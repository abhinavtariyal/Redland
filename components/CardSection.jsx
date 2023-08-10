import React from "react";
import CardTwo from "./UI/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-tailwind/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
export const CardSection = () => {
  const [curr, setCurr] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  const CardArray = [
    {
      title: "Visa",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nibh quis mauris pellentesque euismod. Aliquam viverra aliquam leo vitae consequat. Phasellus a tortor viverra, efficitur dolor non, dapibus lectus. Phasellus rhoncus sollicitudin odio, ac tempor erat ultricies at. Morbi nulla urna, placerat ut lectus quis, placerat viverra dui.",
      image:
        "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80",
    },
    {
      title: "Overseas Student Health Cover",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nibh quis mauris pellentesque euismod. Aliquam viverra aliquam leo vitae consequat. Phasellus a tortor viverra, efficitur dolor non, dapibus lectus. Phasellus rhoncus sollicitudin odio, ac tempor erat ultricies at. Morbi nulla urna, placerat ut lectus quis, placerat viverra dui.",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    },
    {
      title: "IELTS,TOEFEL,PTE Coaching",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nibh quis mauris pellentesque euismod. Aliquam viverra aliquam leo vitae consequat. Phasellus a tortor viverra, efficitur dolor non, dapibus lectus. Phasellus rhoncus sollicitudin odio, ac tempor erat ultricies at. Morbi nulla urna, placerat ut lectus quis, placerat viverra dui.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1828&q=80",
    },
    {
      title: "Professional Year",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nibh quis mauris pellentesque euismod. Aliquam viverra aliquam leo vitae consequat. Phasellus a tortor viverra, efficitur dolor non, dapibus lectus. Phasellus rhoncus sollicitudin odio, ac tempor erat ultricies at. Morbi nulla urna, placerat ut lectus quis, placerat viverra dui.",
      image:
        "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
    },
  ];

  return (
    <div className="bg-blue-gray-50 relative">
      <Typography variant="h3" className="text-center">
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
