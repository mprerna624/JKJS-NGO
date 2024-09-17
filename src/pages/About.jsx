import React from 'react'
import { AboutIntro, Button, Container, ProgressContainer } from '../Components';
import { FaQuoteLeft } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="w-full bg-slate-600">
          <Container>
              <div className="w-fit text-white font-bold text-3xl pl-10 py-8 after:block after:w-[37%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4">About Us</div>
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
            <div>
                <div className='text-orange-600 text-2xl italic'><FaQuoteLeft /></div>
                <h1 className='font-bold text-2xl italic leading-relaxed mt-6 sm:text-3xl sm:leading-relaxed after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-6'>
                    We love to help all the children that have problems in the world. After 15 years we have many goals achieved.
                </h1>
                <p className='mt-6'>Maria Williams, <span className='text-orange-600'>Volunteer</span></p>
            </div>
            <div>
                <div className='text-orange-600 text-2xl italic'><FaQuoteLeft /></div>
                <h1 className='font-bold text-2xl italic leading-relaxed mt-6 sm:text-3xl sm:leading-relaxed after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-6'>
                    We love to help all the children that have problems in the world. After 15 years we have many goals achieved.
                </h1>
                <p className='mt-6'>- Maria Williams, <span className='text-orange-600'>Volunteer</span></p>
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