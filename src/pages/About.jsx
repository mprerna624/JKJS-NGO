import React, { useEffect } from 'react'
import {  Button, Container, HeadingUnderline, ProgressContainer } from '../Components';
import { FaQuoteLeft } from "react-icons/fa";
import {bg_header, our_mission} from "../assets"
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";

function About() {

  // Bcoz navigate('/about') fn redirects to the middle of the page 
  useEffect( () => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Header Banner */}
      <div className={`heading-font w-full h-56 bg-cover bg-[50%_20%]`} style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bg_header})`}}>
          <Container className='h-full'>
              <div className="h-full text-white font-bold text-5xl flex flex-col justify-center
                            after:block after:w-[15%] after:lg:w-[7%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4"
              >
                About Us
              </div>
          </Container>
      </div>

      {/* Mission Section */}
      <div className="w-full py-12">
        <Container>
          <div className="lg:flex items-center justify-around gap-6">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl heading-font font-extrabold mb-4 text-[var(--heading-dark)]">Our Mission</h2>
              <HeadingUnderline />
              <p className="text-[var(--para-dark)] leading-[1.75] my-6">
                We established the Jan Kalyan Jan Sahyog Foundation in Sept 2023 with the goal of providing hope to those in need of assistance. By offering nutrient-dense meals, we specifically concentrate on people's nutrition. We assist students in developing their professional expertise. At our foundation, we welcome everyone who is struggling with hunger, finances, education, and other issues. We've promised to give financially struggling families wedding expenses for females. We have already begun giving food to underprivileged children and laborers every day.  
              </p>
              <p className="text-md text-gray-600 italic">
                "Together, we are the light that guides those in need, nourishing bodies and empowering minds to shape a brighter tomorrow."
              </p>
            </div>

            <div className="md:w-fit mx-auto lg:mx-0">
              <img
                src={our_mission}
                alt="Volunteers distributing food"
                className="rounded-lg shadow-lg max-h-72 lg:max-h-[auto]"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Vision Section */}
      <div className="w-full py-12 border-t-2 border-neutral-300">
        <Container>
          <div className="w-5/6 mx-auto">
            <h2 className="text-4xl text-center font-bold heading-font text-[var(--heading-dark)]">Our Vision</h2>
            <HeadingUnderline className='mx-auto md:w-[10%]' />
            <p className="leading-loose my-6">
              At Jan Kalyan Jan Sahyog Foundation, we envision a world where hunger is eliminated and every individual, regardless of their circumstances, has the opportunity to thrive. We believe that access to nutritious food is a basic human right, and we are committed to ensuring that every person in India receives the nourishment they deserve.
            </p>
            <p className="leading-loose mb-6">
              Today, we are actively working to eliminate hunger by providing hot meals through community kitchens and distributing groceries to those in need. Our vision, however, extends beyond this immediate relief.
            </p>
            <p className="leading-loose mb-8">
              As we look ahead, our future initiatives include:
            </p>
            
            {/* Future Initiatives */}
            <ul className="list-disc list-inside leading-[1.75] space-y-4 mb-8">
              <li>
                <strong>Empowering Students:</strong> We will help underprivileged students improve their skills and professional knowledge, preparing them for success in their careers.
              </li>
              <li>
                <strong>Supporting Needy Families:</strong> We will assist poor families with marriage expenses for girls, ensuring no family struggles with such important life events.
              </li>
              <li>
                <strong>Promoting Road Safety:</strong> We will work to build a culture of road safety through awareness, education, and training to ensure safer communities.
              </li>
              <li>
                <strong>Caring for Stray Animals:</strong> We aim to support stray animals by providing them with food, shelter, and medical care through partnerships with like-minded organizations.
              </li>
            </ul>
            <p className=" leading-loose">
              Together, we will create a future where hunger, poverty, and suffering are replaced by hope, opportunity, and compassion—for both people and animals.
            </p>
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <div className="w-full pb-16">
        <Container>
          <h2 className="text-4xl text-center heading-font font-bold text-[var(--heading-dark)]">Our Values</h2>
          <HeadingUnderline className='mx-auto md:w-[10%]' />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg shadow-2xl text-white" style={{background: "var(--bg-card)"}}>
              <div className="text-4xl flex items-center justify-center mb-4">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-xl text-center font-semibold mb-2">Compassion</h3>
              <p className="text-center text-[var(--para-light)]">
                We believe in treating everyone with kindness and empathy. Compassion drives us to support those struggling with hunger, education, and financial difficulties, providing hope to those in need.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-2xl text-white" style={{background: "var(--bg-card)"}}>
              <div className="text-4xl flex items-center justify-center mb-4">
                <GiOpenBook />
              </div>
              <h3 className="text-xl text-center font-semibold mb-2">Empowerment</h3>
              <p className="text-center text-[var(--para-light)]">
                We aim to uplift individuals by providing the resources and opportunities they need to thrive, whether through education or access to nutritious meals. Empowering people is at the core of our mission.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-2xl text-white" style={{background: "var(--bg-card)"}}>
              <div className="text-5xl flex items-center justify-center mb-1">
                <MdGroups2 />
              </div>
              <h3 className="text-xl text-center font-semibold mb-2">Community</h3>
              <p className="text-center text-[var(--para-light)]">
                We believe that real change happens when communities come together. We work alongside local groups and individuals to create a sustainable impact, ensuring that no one is left behind.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-2xl text-white" style={{background: "var(--bg-card)"}}>
              <div className="text-4xl flex items-center justify-center mb-4">
                <IoShieldCheckmarkSharp />
              </div>
              <h3 className="text-xl text-center font-semibold mb-2">Integrity</h3>
              <p className="text-center text-[var(--para-light)]">
                We are dedicated to maintaining the highest standards of transparency and accountability in all our actions. Integrity is the cornerstone of our foundation, ensuring trust and honesty in our work.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Progress Container */}
      <div className="w-full text-white" style={{background: "var(--bg-dark)"}}>
        <ProgressContainer />
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-20">
        <Container className='flex flex-wrap justify-center gap-16 md:flex-nowrap'>
            <div className='flex-grow'>
                <div className='text-orange-600 text-2xl italic'><FaQuoteLeft /></div>
                <h1 className='font-bold text-2xl italic leading-relaxed mt-6 sm:text-3xl sm:leading-relaxed text-[var(--heading-dark)]'>
                  Guiding this cause has shown us the incredible difference that kindness and action can bring to those in need.
                </h1>
                <HeadingUnderline />
                <p className='mt-6'>- Kamal Mittal, <span className='text-orange-600'>President</span></p>
            </div>
            <div className='flex-grow'>
                <div className='text-orange-600 text-2xl italic'><FaQuoteLeft /></div>
                <h1 className='font-bold text-2xl italic leading-relaxed mt-6 sm:text-3xl sm:leading-relaxed text-[var(--heading-dark)]'>
                  We strive to uplift lives by providing essential resources and opportunities, fostering growth and self-reliance.
                </h1>
                <HeadingUnderline />
                <p className='mt-6'>- Ankit Mittal, <span className='text-orange-600'>General Secretary</span></p>
            </div>
        </Container>
      </div>

      {/* Donate Now Section */}
      <div className="w-full py-20 bg-orange-600">
        <Container className='flex flex-wrap justify-center items-center gap-10 lg:gap-24'>
            <h1 className='text-white text-4xl font-bold'>Help us so we can help others</h1>
            <Button className='border-2 border-white' to='#'>Donate Now</Button>
        </Container>
      </div>
    </>
  )
}

export default About