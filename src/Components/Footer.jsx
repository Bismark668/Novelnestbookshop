import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




export const Footer = () => {
  return (
    <div className='w-full bg-[#082517]  text-gray-300 py-2 px-2 mt-5 sm:mt-[10rem] md:mt-[15rem] '>
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center  border-b-2 border-gray-500 py-4">
            <div className='flex flex-col items-center gap-2 py-8 px-2'>
                <NavLink to={'/'}>
                    <img src={Logo} alt="logo" className=' w-[150px] h-[80px] object-cover bg-white rounded-lg '/>   
                </NavLink>

            </div>


            <div className='w-full flex flex-col px-10 items-center sm:items-end overflow-hidden '>
                <h1 className='font-bold uppercase pb-2 mr-4 text-white'>Subscibe to our newsletter </h1>
                <p className='pb-2 text-white mr-4'>Get our latest books,stories and resources sent to your inbox weekly</p>
               <form className='flex'>
                    <input className='min-w-[200px] p-2 mr-4 rounded-md mb-4 ' type="email" placeholder='Enter Email' />
                    <button className='p-2 mr-4 rounded-md mb-4 bg-[#00B86E]'>Subscibe</button>
               </form>
            </div>       
        </div>
        <div className='w-full flex flex-col md:flex-row  md:px-10 py-2 items-center md:justify-between'>
             <div className="flex justify-center gap-4 sm:w-[300p] pt-4 text-2xl">
                <a href="https://www.facebook.com/profile.php?id=100081192673658" target='_blank'><FaFacebookF /></a>
                <a href="https://github.com/Bismark668" target='_blank'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/arthur-bismark-0a4979272" target='_blank'><FaLinkedin /></a>
                 <a href="https://x.com/Bigsmoke4real1?t=bCLNFL9xc5sfTmUgz6gHVA&s=09" target='_blank'><FaXTwitter /></a>
            </div>
            <p className='font-bold pt-2'>NovelNest &trade; &copy;2024 LLC. All rights reserved</p>
         </div>
    </div>
  )
}
