import React from 'react'
import { AboutIntro, Button, Container, ProgressContainer } from '../Components';
import { FaQuoteLeft } from "react-icons/fa";
import image from "../assets/header-bg.jpeg"

function About() {
  return (
    <>
      <div className={`w-full h-48 bg-cover bg-right-top`} style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`}}>
          <Container className='h-full'>
              <div className="h-full text-white font-bold text-4xl flex flex-col justify-center
                            after:block after:w-[7%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4"
              >
                About Us
              </div>
          </Container>
      </div>

      <div className="w-full">
        <AboutIntro />
      </div>

      <div className="w-full bg-gray-900 text-white">
        <ProgressContainer />
      </div>

      <div className="w-full py-20">
        <Container className='flex flex-wrap justify-center gap-16 md:flex-nowrap'>
            <div className='flex-grow'>
                <div className='text-orange-600 text-2xl italic'><FaQuoteLeft /></div>
                <h1 className='font-bold text-2xl italic leading-relaxed mt-6 sm:text-3xl sm:leading-relaxed after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-6'>
                  Guiding this cause has shown us the incredible difference that kindness and action can bring to those in need.
                </h1>
                <p className='mt-6'>- Kamal Mittal, <span className='text-orange-600'>NGO President</span></p>
            </div>
            <div className='flex-grow'>
                <div className='text-orange-600 text-2xl italic'><FaQuoteLeft /></div>
                <h1 className='font-bold text-2xl italic leading-relaxed mt-6 sm:text-3xl sm:leading-relaxed after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-6'>
                  We strive to uplift lives by providing essential resources and opportunities, fostering growth and self-reliance.
                </h1>
                <p className='mt-6'>- Ankit Mittal, <span className='text-orange-600'>NGO General Secretary</span></p>
            </div>
        </Container>
      </div>

      <div className="w-full py-20 bg-orange-600">
        <Container className='flex flex-wrap justify-center items-center gap-10 lg:gap-24'>
            <h1 className='text-white text-4xl font-bold'>Help us so we can help others</h1>
            <Button className='border-2 border-white'>Donate Now</Button>
        </Container>
      </div>
    </>
  )
}

export default About