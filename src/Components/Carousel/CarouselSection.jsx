import React from 'react';
import Carousel from './Carousel';
import { slider_image0, slider_image1, slider_image2, slider_image3, test } from "../../assets";

function CarouselSection() {

    // const slides = [slider_image0, slider_image1, slider_image2, slider_image3];
    const slides = [test];

  return (
    <div className='w-full'>
        <Carousel autoSlide={false} className='md:h-[80vh]' >
            {
                slides.map( (image, index) => (
                    <img key={index} src={image} alt="Slide Images" className='object-fill object-center' />
                ) )
            }
        </Carousel>
    </div>
  )
}

export default CarouselSection