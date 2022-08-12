import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import me from '../assets/Me.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={me} alt="my logo" style={{width: '75px'}} id='meLogo'/>
        </div>

        {/* Menu */}
        <div className='hidden md:flex' id='navBar'>
            <ul className='hidden md:flex'>
                <li className='hover:border-4 hover:border-black hover:bg-[#ccd6f6] hover:text-black'>
                    <Link to="home"  smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>

                <li className='hover:border-4 hover:border-black hover:bg-[#ccd6f6] hover:text-black'>
                    <Link to="about"  smooth={true}  duration={500}>
                        About
                    </Link>
                </li>

                <li className='hover:border-4 hover:border-black hover:bg-[#ccd6f6] hover:text-black'>
                    <Link to="experience"  smooth={true}  duration={500}>
                        Experience
                    </Link>
                </li>

                <li className='hover:border-4 hover:border-black hover:bg-[#ccd6f6] hover:text-black'>
                    <Link to="contact"  smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile Menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center'}>
            <ul>
                <li className='py-6 text-6xl'>
                    <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>

                <li className='py-6 text-6xl'>
                    <Link onClick={handleClick} to="about"  smooth={true}  duration={500}>
                        About
                    </Link>
                </li>

                <li className='py-6 text-6xl'>
                    <Link onClick={handleClick} to="experience"  smooth={true}  duration={500}>
                        Experience
                    </Link>
                </li>

                <li className='py-6 text-6xl'>
                    <Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* social Menu */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='https://www.linkedin.com/in/brody-mccoleman-aa9564232/' className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={20}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
                    <a href='https://github.com/brody413' className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={20}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C13584]'>
                    <a href='https://www.instagram.com/brody413/?hl=en' className='flex justify-between items-center w-full text-gray-300'>
                        Instagram <FaInstagram size={20}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href='bro11.2001@gmail.com' className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={20} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href='https://docs.google.com/document/d/1Kq4S1a1APNuspNknV2-VrdddhRJ8BaYN/edit?usp=sharing&ouid=114310156745534202292&rtpof=true&sd=true' className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={20} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
