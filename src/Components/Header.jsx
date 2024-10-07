import React, { useState } from 'react'
import { Container, Logo } from '../Components'
import { Link, NavLink } from 'react-router-dom';
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

function Header() {

    const [menuBtnOpen, setMenuBtnOpen] = useState(false);

    const handleClick = () => {
        setMenuBtnOpen(!menuBtnOpen);
    }

    const navLinks = [
        {
            link: '/',
            content: 'Home'
        },
        {
            link: '/gallery',
            content: 'Gallery'
        },
        {
            link: '/articles',
            content: 'Articles'
        },
        {
            link: '/about',
            content: 'About'
        },
        {
            link: '/contact',
            content: 'Contact'
        }
    ]

  return (
    <header className='w-full shadow-lg heading-font text-[var(--heading-dark)]' style={{background: "#fff"}}>
        <Container>
            <div className="w-full flex justify-between items-center">
                <div className='border-yellow-400 border inline-block'>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>

                <button className='inline-block outline-0 border-none text-3xl md:hidden' onClick={handleClick}>
                    {menuBtnOpen ? <RxCross2 /> : <CgMenu />}
                </button>

                <nav className={`${menuBtnOpen ? "left-0 opacity-100" : "-left-full opacity-0"}
                    absolute min-h-screen top-0 p-8 w-2/5 shadow-md transition-all duration-700 ease-linear z-10
                    md:static md:min-h-full md:p-0 md:shadow-none md:w-auto md:opacity-100 md:transition-none`}
                >
                    <ul className='md:flex md:justify-between md:gap-6'>

                        {
                            navLinks.map((navItem, index) => (
                                <li key={index}>
                                    <NavLink to={navItem.link}
                                        className={({isActive}) => 
                                            `inline-block py-3 w-full text-lg border-b-[3px] hover:text-orange-600 hover:border-orange-600 md:py-7 
                                            ${isActive ? "text-orange-600  border-orange-600" : "text-black border-transparent"}`}
                                            onClick={() => setMenuBtnOpen(false)}
                                    >
                                        {navItem.content}
                                    </NavLink>
                                </li>
                            ))
                        }
                        
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header