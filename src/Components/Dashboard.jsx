import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FiSearch } from "react-icons/fi";
import Books from './Books';




const Dashboard = () => {
 
  return (
    <div className='w-full min-h-full'>
      <div className="mx-auto  min-h-[100px] overflow-hidden bg-green-600 md:relative flex flex-row md:flex-row md:justify-between gap-y-4 md:gap-y-0 ">
        <div className="flex justify-start items-center md:justify-normal">
          <Link className='flex items-center gap-3 m-0 px-4 ' to={'/'}>
            <img className='h-[100px] w-[100px] object-cover' src={Logo} alt="logo" />
            <h1 className='text-white uppercase text-2xl font-extrabold  hover:text-gray-700'>Novelnest Bookstore</h1>
          </Link> 
        </div> 
      </div>

      <div className="w-full h-[500px] sm:h-[400px] books-banner flex flex-col items-center justify-center gap-5 px-5">
        <h1 className='text-white uppercase font-extrabold text-2xl'>Search For your book</h1>
        <p className='text-white'>We have in istock all the books you can think of! , just type the name and we will find it for you in a matter of seconds</p>
        <div className="md:w-[35rem] md:h-[3rem] bg-white flex items-center justify-center gap-5 px-10 py-3.5 rounded-xl">
          <input className='w-[90%] py-3 outline-none font-semibold' v type="text" 
         placeholder='Enter book name'/>
          <button type='submit'  className='flex items-center px-4 py-1'><FiSearch className='size-7 text-blue-800 cursor-pointer' /></button>
        </div>
      </div>

      <div className="w-full h-auto">
        <Books />
      </div>

    </div>
  )
}

export default Dashboard
