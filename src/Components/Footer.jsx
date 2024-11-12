import React from 'react'
import {Container, Logo} from '../Components'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='bg-[var(--bg-dark)] text-[var(--para-light)] py-8'>
        <Container className='flex flex-wrap justify-center gap-8 md:justify-between'>
            <div className='flex flex-col justify-between'>
                <div className="logo-div flex items-center text-3xl heading-font">
                    <Logo bg="dark" />
                    <span>Jan Kalyan Jan Sahyog Foundation</span>
                </div>
                <div className='flex items-center gap-4'>
                    <Link to="#" className='inline-block text-xl'><FaFacebook /></Link>
                    <Link to="#" className='inline-block text-xl'><FaInstagram /></Link>
                    <Link to="#" className='inline-block text-xl'><FaXTwitter /></Link>
                    <Link to="#" className='inline-block text-2xl'><FaYoutube /></Link>
                    <Link to="#" className='inline-block text-xl'><FaLinkedin /></Link>
                </div>
                <p>&copy; Copyright 2024. All Rights reserved.</p>
            </div>

            <div className='flex flex-wrap justify-between gap-16'>
                <div>
                    <h6 className='font-bold heading-font underline underline-offset-8 mb-6'>Useful Links</h6>
                    <ul className='text-sm'>
                        {/* <li className='mb-3'><Link to="#">Causes</Link></li> */}
                        <li className='mb-3 hover:underline underline-offset-4'><Link to="/gallery">Gallery</Link></li>
                        <li className='mb-3 hover:underline underline-offset-4'><Link to="/articles">Articles</Link></li>
                        <li className='mb-3 hover:underline underline-offset-4'><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <div className='w-60'>
                    <h6 className='font-bold heading-font underline underline-offset-8 mb-6'>Contact Us</h6>
                    <ul className='text-sm'>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block'><FaPhoneAlt /></span> +91 9811253845</li>
                        <li className='mb-3 flex items-center gap-3'><span className='inline-block'><TbMailFilled /></span> jkjsfoundation@gmail.com</li>
                        <li className='mb-3 flex items-baseline gap-3'><span className='inline-block'><IoLocationSharp /></span>D-302, Bawana Industrial Area, Sector-5, Bawana, Delhi-110039</li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer