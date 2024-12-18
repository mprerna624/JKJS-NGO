import React from 'react';
import Carousel from './Carousel';
import { slider_image1, slider_image2, slider_image3, slider_image4 } from "../../assets";

function CarouselSection() {

    const slides = [slider_image1, slider_image2, slider_image3, slider_image4];

  return (
    <div className='w-full'>
        <Carousel autoSlide={true}>
            {
                slides.map( (image, index) => (
                    <img key={index} src={image} alt="Slide Images" className='w-full h-auto object-cover' />
                ) )
            }
        </Carousel>
    </div>
  )
}

export default CarouselSection