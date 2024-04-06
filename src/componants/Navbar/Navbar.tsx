import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '@/assets/logo.png';
import { BiSearchAlt, BiSolidUserCircle , BiPlus } from "react-icons/bi";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
        
        <div className='navbar-left'>
            <Link  href="/pages/profile" className='link' > <BiSolidUserCircle className='icon' /> 
            </Link>
            <Link  href="/pages/addblog" className='link' > <BiPlus className='icon' /> 
            </Link>
            <Link  href="/search" className='link' > <BiSearchAlt className='icon' /> 
            </Link>
             </div>
        <div className='navbar-middle'>
            <Link  href="/" >
            <Image className='logo'
                src={logo}
                alt="Picture of the company"/>
            </Link>
               </div>
        <div className='navbar-right'> 
            <Link  href="/" className='link' > Home
            </Link>
            <Link  href="/pages/about" className='link' > About
            </Link>
            <Link  href="/pages/contact" className='link' > Contact
            </Link>
          </div>
    </nav>
  )
}

export default Navbar