"use client"

import Image from "next/image";
// banner.tsx
import React from "react";
import Slider from "react-slick";
import Slide from "./slide";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const slidesData = [
    {
      buttonFirstText: "Button 1 Text",
      buttonSecondText: "Button 1 Text",
      title: "Slide 1 Title",
      imageSrc: "/images/banner/banner.svg",
    },
    {
        buttonFirstText: "Button 1 Text",
        buttonSecondText: "Button 1 Text",
        title: "Slide 2 Title",
      imageSrc: "/images/banner/banner.svg",
    },
    // Add more slide data as needed
  ];

  return (
    <>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            buttonFirstText={slide.buttonFirstText}
            buttonSecondText={slide.buttonSecondText}
            title={slide.title}
            imageSrc={slide.imageSrc}
          />
        ))}
      </Slider>
    </>
  );
};

export default Banner;
