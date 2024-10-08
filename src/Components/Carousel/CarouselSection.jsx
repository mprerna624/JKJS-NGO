import React from 'react';
import Carousel from './Carousel';
import { slider_image1, slider_image2, slider_image3, slider_image4 } from "../../assets";

function CarouselSection() {

    const slides = [slider_image1, slider_image2, slider_image3, slider_image4];

  return (
    <div className='w-full'>
        <Carousel autoSlide={true} className='md:h-[80vh]' >
            {
                slides.map( (image, index) => (
                    <img key={index} src={image} alt="Slide Images" />
                ) )
            }
        </Carousel>
    </div>
  )
}

export default CarouselSection