import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useState } from 'react';
import menu from '../assets/menuicon.png'
import close from '../assets/closeicon.png'
import { MdHouseboat } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBookBible } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { Footer } from './Footer';






export const Landing = () => {
    const [openMenu , setOpenmenu]=useState(false)

  return (
    <div className='w-full min-h-[100vh] bg'>
        <div className="mx-auto  min-h-[100px] overflow-hidden bg-green-600 md:relative flex flex-row md:flex-row md:justify-between gap-y-4 md:gap-y-0 ">
            <div className="flex justify-start items-center md:justify-normal">
                <Link className='flex items-center gap-3 m-0 px-4 ' to={'/'}>
                    <img className='h-[100px] w-[100px] object-cover' src={Logo} alt="logo" />
                    <h1 className='text-white uppercase text-2xl font-extrabold  hover:text-gray-700'>Novelnest Bookstore</h1>
                </Link> 
            </div>
            <div className="flex items-center px-5">
                <ul className='hidden md:flex md:gap-8 md:items-center'>
                    <NavLink to={'/login'}>
                    <button type="button" class="py-3 px-8 me-2 mb-2 text-xl font-extrabold text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Log-in</button>
                    </NavLink>
                     <NavLink to={'/register'}>
                     <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-extrabold rounded-lg text-xl py-3 px-8 mb-2 dark:focus:ring-yellow-900">Sign-up</button>
                     </NavLink>
                </ul>

                <div className="md:hidden flex absolute right-2" onClick={() =>setOpenmenu(!openMenu)}>
                    <img src={!openMenu?menu:close} alt="menu/close" className='object-contain ml-8   w-[40px] h-[80px]' />
                </div>

                <ul className={openMenu? "absolute flex flex-col left-0 top-[100px] pt-2 bg-gray-200 w-full gap-2 items-center md:hidden":"hidden"}>
                    <NavLink to={'/login'}>
                        <button className='w-full py-4 px-40 me-2 mb-2 text-xl font-extrabold text-gray-900 focus:outline-none bg-white rounded-xl  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"' type="button">Log-in</button>
                    </NavLink>
                    <NavLink to={'/register'}>
                        <button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-extrabold rounded-lg text-lg py-4 px-40 me-2 mb-2 dark:focus:ring-yellow-900">Sign-up</button>
                    </NavLink>  
                </ul>
            </div>
        </div>

        <div className=" bg-white flex flex-col w-full min-h-[100dvh] items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:px-20 md:py-1 w-full md:gap-0 bg-gray-300 min-h-[300px]">
                <div className="flex bg-im flex-col items-center justify-center p-2 bg-gradient-to-r from-green-600 to-green-900">
                    <h1 className='text-white uppercase text-2xl font-extrabold mb-5'>Novelnest Bookstore</h1>
                    <p className='text-white mb-5 px-3 font-light'>Your ultimate online destination for a vast array of books catering to all reading preferences and ages. Whether you're a fan of gripping thrillers, timeless classics, inspiring biographies, or captivating children's stories, our curated collection has something for everyone. We pride ourselves on offering competitive prices, fast shipping, and exceptional customer service to ensure a seamless shopping experience. Explore our user-friendly website to discover bestsellers, new releases, and hidden gems</p>

                    <NavLink to={'/login'}>
                    <button type="button" class="py-3 px-8 me-2 mb-2 text-xl font-extrabold text-green-900 focus:outline-none bg-none  rounded-xl border border-green-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-green-600 dark:hover:text-white dark:hover:bg-gray-700">Explore Now</button>
                    </NavLink>
                </div>

                <div className="flex justify-center items-center">
                    <img className=' object-cover w-full' src="https://cdn.pixabay.com/photo/2015/10/13/11/41/books-985954_640.jpg" alt="hero-image" />
                </div>
            </div>

            <div className="w-full mb-5 sm:mb-20 sm:h-20 grid grid-cols-1 gap-5 sm:grid-cols-4 justify-center items-center py-5 ">
                <div className="text-center flex flex-col items-center">
                    <h1 className='text-green-500 uppercase text-2xl font-extrabold'>+5m</h1>
                    <p className='text-gray-300'><i>Books</i></p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <h1 className='text-green-500 uppercase text-2xl font-extrabold'>+10</h1>
                    <p className='text-gray-300'><i>Years of selling</i></p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <h1 className='text-green-500 uppercase text-2xl font-extrabold'>+50</h1>
                    <p className='text-gray-300'><i>Total Branches</i></p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <h1 className='text-green-500 uppercase text-2xl font-extrabold'>+100</h1>
                    <p className='text-gray-300 font-bold'><i>Genres to chose from</i></p>
                </div>
                
            </div>

            <div className="w-full md:w-[80%] h-[72rem] sm:h-[40rem] md:h-[300px] ">
                <div className="flex flex-col relative w-full justify-center items-center  bg-gradient-to-r from-green-300 to-blue-500 h-full rounded-xl">
                    <div className=" absolute grid grid-cols-1 sm:grid-cols-2 h-auto sm:h-[20%] top-5 w-[80%] mb-2 p-2 gap-2">
                        <div className="text-center">
                            <h1 className='text-white uppercase font-extrabold text-2xl'>Our Top Selling Genres</h1>
                        </div>
                        <div className="text-center">
                            <p className=' text-gray-200'>Chose from our all time best selleing genres and get the best deals !!</p>
                        </div>
                    </div>

                    <div className=" absolute grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center  h-[65%] w-[80%]  md:bottom-[-60px]">
                        <div className="w-full h-full bg-white rounded-xl items-center flex flex-col gap-1 py-2 px-1">
                            <MdHouseboat className='size-10'/>
                            <h2 className='text-xl font-semibold'>Fiction</h2>
                            <p className='text-gray-500 font-light px-1'>Enhance your imaginations with our fictional characters and storis that will live you joy </p>
                            <Link to={'/login'}>
                             <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">See more</button>
                            </Link>
                        </div>

                        <div className="w-full h-full bg-white rounded-xl items-center flex flex-col gap-1 py-2 px-1">
                            <GiFamilyHouse  className='size-10'/>
                            <h2 className='text-xl font-semibold'>History</h2>
                            <p className='text-gray-500 font-light px-1'>Explore our latest collection of history books. Discover new cultures and events taht happened long time ago !</p>
                            <Link to={'/login'}>
                             <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Explore</button>
                            </Link>
                        </div>
                        <div className="w-full h-full bg-white rounded-xl items-center flex flex-col gap-1 py-2 px-1">
                            <FaBookBible  className='size-10'/>
                            <h2 className='text-xl font-semibold'>Religious</h2>
                            <p className='text-gray-500 font-light px-1'>Whether you are seeking to deepen your own faith, understand the spiritual perspectives of others, We get the books just for you </p>
                            <Link to={'/login'}>
                             <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Explore</button>
                            </Link>
                        </div>
                        <div className="w-full h-full bg-white rounded-xl items-center flex flex-col gap-1 py-2 px-1">
                            <FaRegSmile className='size-10'/>
                            <h2 className='text-xl font-semibold'>Comic</h2>
                            <p className='text-gray-500 font-light px-1'>Whether you are a longtime fan or new to the world of comics, this genre invites you to experience the limitless possibilities of visual storytelling.  </p>
                            <Link to={'/login'}>
                             <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Explore</button>
                            </Link>
                        </div>
                       

                    </div>
                    
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}
