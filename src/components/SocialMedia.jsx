import React from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <div className='fixed right-0 top-1/3 md:top-1/2 z-50 bg-white rounded-tl-lg rounded-bl-lg overflow-hidden'>
            <ul className='rounded-tl-lg'>
                <li className='w-12 h-12 bg-[#2ea3f2] flex justify-center items-center'><a href="#" ><FaLinkedinIn color="white" size="25" /></a></li>
                <li className='w-12 h-12 bg-[red] flex justify-center items-center'><a href="#" ><AiFillYoutube color="white" size="25" /> </a></li>
                <li className='w-12 h-12 bg-[#cd329d] flex justify-center items-center'><a href="#" ><FiInstagram color="white" size="25" /> </a></li>
                <li className='w-12 h-12 bg-[#40b457] flex justify-center items-center'><a href="#" ><IoLogoWhatsapp color="white" size="25" /> </a></li>
            </ul>
        </div>
    )
}

export default SocialMedia