import React from 'react'
import { Button, Container } from '../Components'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import image from "../assets/bg-header.jpeg"
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {

  const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm();

  const handleForm = async(data) => {
      try {
        const result = await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
          { //TestParams in EmailJS Template
            from_name: data.name,
            from_email: data.email,
            message: data.msg
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        );

        console.log("Email sent successfully: ", result.text);
        alert("Message sent successfully!");
        reset(); //Reset the form fields
      } 
      catch (error) {
        console.error("Failed to send message: ", error);
        alert("Failed to send message. Please try again later.")
      }
  }

  return (
    <>
      <div className={`heading-font w-full h-56 bg-cover bg-[50%_20%]`} style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`}}>
        <Container className='h-full'>
            <div className="h-full text-white font-bold text-5xl flex flex-col justify-center
                          after:block after:w-[15%] after:lg:w-[7%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4"
            >
              Contact Us
            </div>
        </Container>
      </div>

      <div className="w-full py-10">
        <Container className='flex flex-wrap justify-around gap-10 lg:flex-nowrap lg:gap-24'>
            <div className='text-[var(--para-dark)]'>
                <h1 className='font-bold heading-font text-[var(--heading-dark)] text-[28px]'>Get in touch with us</h1>
                <p className='mt-6 leading-relaxed'>Founded in September 2023, Jan Kalyan Jan Sahyog foundation is a non-profit organization driven by compassion, collaboration, and a commitment to making a difference. Our team is comprised of passionate individuals, including volunteers, donors, and community partners, all working together towards a common goal. We are inspired by the resilience of those we serve and are motivated by the belief that every meal we provide can spark hope and change.</p>
                <div className='flex items-center gap-4 mt-8'>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaFacebook /></Link>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaInstagram /></Link>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaXTwitter /></Link>
                    <Link to="#" className='inline-block text-2xl text-orange-600'><FaYoutube /></Link>
                    <Link to="#" className='inline-block text-xl text-orange-600'><FaLinkedin /></Link>
                </div>
                <div className='mt-8'>
                    <ul>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block text-orange-600'><FaPhoneAlt /></span> +91 9811253845</li>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block text-orange-600'><TbMailFilled /></span> jkjsfoundation@gmail.com</li>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block text-orange-600'><IoLocationSharp /></span>D-302, Bawana Industrial Area, Sector-5, Bawana, Delhi-110039</li>
                    </ul>
                </div>
            </div>

            <form onSubmit={handleSubmit(handleForm)} className='bg-[var(--bg-dark)] px-6 py-12 flex-grow'>
                <input type="text" 
                  placeholder='Name' 
                  className='w-full px-4 py-2 border border-slate-500' 
                  {
                    ...register("name", {
                      required: "Name is required"
                    })
                  }
                />
                {errors.name && (
                  <p className="text-white mt-2">{errors.name.message}</p>
                )}

                <input type="email" 
                  placeholder='Email' 
                  className='w-full px-4 py-2 border border-slate-500 mt-6' 
                  {
                    ...register("email", {
                      required: "Email Id is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Enter a valid email address',
                      }
                    })
                  }
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.email.message}</p>
                )}

                <textarea placeholder='Message' 
                  cols={200} rows={5} 
                  className='w-full px-4 py-2 border border-slate-500 mt-6'
                  {
                    ...register("msg", {
                      required: "Message is required"
                    })
                  }
                ></textarea>
                {errors.msg && (
                  <p className="text-white mt-2">{errors.msg.message}</p>
                )}

                <button type='submit' disabled={isSubmitting} 
                  className='mt-8 mx-auto block px-10 py-4 rounded-3xl heading-font text-lg tracking-wide cursor-pointer outline-0 transition-colors duration-600 ease-in-out'
                  style={{background: "var(--bg-gradient-dark)", color: "#fff"}}
                  onMouseEnter={(e) => e.target.style.background = 'var(--bg-gradient-invert)'} //hover effect
                  onMouseLeave={(e) => e.target.style.background = 'var(--bg-gradient-dark)'}
                >
                  {isSubmitting ? "Sending...." : "Contact Us"}
                </button>
            </form>
        </Container>
      </div>
    </>
  )
}

export default Contact