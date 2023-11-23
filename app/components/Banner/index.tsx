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
      buttonSecondText: "Подробиці",
      title: "Встановлення кавових автоматів",
      imageSrc: "/images/banner/slide_1.webp",
      link: "/vstanovlennia-vendyngovyh-avtomativ"
    },
    {
      buttonFirstText: "Button 1 Text",
      buttonSecondText: "Подробиці",
      title: "Ремонт побутових кавоварок",
      imageSrc: "/images/banner/slide_2.webp",
      link: "/remont-pobutovyh-kavovarok"
    },
    {
      buttonFirstText: "Button 1 Text",
      buttonSecondText: "Подробиці",
      title: "Встановлення професійних кавомашин",
      imageSrc: "/images/banner/slide_3.webp",
      link: "/vstanovlennia-avtomatychnyh-kavovarok"
    },
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
            link={slide.link}
          />
        ))}
      </Slider>
    </>
  );
};

export default Banner;
