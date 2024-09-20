import React from 'react'
import { Button, Container } from '../Components'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
        <div className="w-full bg-slate-600">
          <Container>
              <div className="w-fit text-white font-bold text-3xl pl-10 py-8 after:block after:w-[37%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4">Contact Us</div>
          </Container>
      </div>

      <div className="w-full py-10">
        <Container className='flex flex-wrap justify-around gap-10 md:flex-nowrap md:gap-24'>
            <div className='text-black/50'>
                <h1 className='font-bold text-black text-2xl'>Get in touch with us</h1>
                <p className='mt-8'>Founded in September 2023, Jan Kalyan Jan Sahyog foundation is a non-profit organization driven by compassion, collaboration, and a commitment to making a difference. Our team is comprised of passionate individuals, including volunteers, donors, and community partners, all working together towards a common goal. We are inspired by the resilience of those we serve and are motivated by the belief that every meal we provide can spark hope and change.</p>
                <div className='flex items-center gap-4 mt-8'>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaFacebook /></Link>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaInstagram /></Link>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaXTwitter /></Link>
                    <Link to="#" className='inline-block text-2xl text-orange-600'><FaYoutube /></Link>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaLinkedin /></Link>
                </div>
                <div className='mt-8'>
                    <ul>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block text-orange-600'><FaPhoneAlt /></span> +91 9876543210</li>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block text-orange-600'><TbMailFilled /></span> example@gmail.com</li>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block text-orange-600'><IoLocationSharp /></span>Some Location</li>
                    </ul>
                </div>
            </div>

            <form className='bg-slate-300 px-6 py-12'>
                <input type="text" placeholder='Name' className='w-full px-4 py-2 border border-slate-500' />
                <input type="email" placeholder='Email' className='w-full px-4 py-2 border border-slate-500 mt-6' />
                <textarea placeholder='Message'cols={100} rows={5} className='w-full px-4 py-2 border border-slate-500 mt-6'></textarea>
                <Button className='mt-8 mx-auto'>Contact us</Button>
            </form>
        </Container>
      </div>
    </>
  )
}

export default Contact