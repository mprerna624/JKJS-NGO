import React from 'react';
import image1 from "../../assets/carousel/image-1.jpeg"
import image2 from "../../assets/carousel/image-2.jpeg"
import image3 from "../../assets/carousel/image-3.jpeg"
import Carousel from './Carousel';

function CarouselSection() {

    const slides = [image1, image2, image3];

  return (
    <div className='w-full'>
        <Carousel autoSlide={true} className='mx-auto md:w-[90%] md:h-[80vh]' >
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