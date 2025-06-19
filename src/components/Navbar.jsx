import React from 'react'
import { Assets } from '../images/image.js'


export default function Navbar(){
  return (
    <>
        <nav className= "sticky top-0 left-0 w-full h-20 z-100 shadow-md bg-linear-to-r from-white to-blue-100 ">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="cursor-pointer ml-10 -mt-2">
        <img                   
        className='h-[100px] w-[150px]'
        src={Assets.logo}/> 
        </a>
        
        <ul className="flex space-x-5">
            <li className="hover:text-blue-500 cursor-pointer
             text-gray font-medium  transition-all duration-200 
             relative group h-10 hidden lg:block">
                <a href="#">Products</a>
                <div className="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-blue-500">

                </div>
            </li>
            <li className="hover:text-blue-500 cursor-pointer
             text-gray font-medium  transition-all duration-200 
             relative group hidden lg:block">
            <a href="#">Banking+</a>
            <div className="absolute bottom-0 hidden group-hover:block w-full h-1 transition-all duration-200  bg-blue-500"></div>
            </li>

            <li className="hover:text-blue-600 cursor-pointer
             text-gray font-medium   transition-all duration-200 
             relative group hidden lg:block">
                <a href="">Payroll</a>
                <div className="absolute bottom-0 hidden group-hover:block w-full h-1 transition-all duration-200  bg-blue-500"></div>
            </li>

            <li className="hover:text-blue-500 cursor-pointer
            text-gray font-medium transition-all duration-200 
             relative group hidden lg:block"> 
                <a href="">Engage</a>
                <div className="absolute bottom-0 hidden group-hover:block w-full h-1 transition-all duration-200  bg-blue-500"></div>
            </li>

            <li className="hover:text-blue-500 cursor-pointer
             text-gray font-medium transition-all duration-200 
             relative group hidden lg:block"> 
                <a href="">Partners</a>
                <div className="absolute bottom-0 hidden group-hover:block w-full h-1 transition-all duration-200  bg-blue-500"></div>
                </li>

            <li className="hover:text-blue-500 cursor-pointer
             text-gray font-medium  transition-all duration-200 
             relative group hidden lg:block">
            <a href="">Resources</a>
            <div className="absolute bottom-0 hidden group-hover:block w-full h-1 transition-all duration-200  bg-blue-500"></div>
            </li>

            <li className="hover:text-blue-500 cursor-pointer
             text-gray font-medium  transition-all duration-200 
             relative group hidden lg:block">
                <a href="#">Pricing</a>
               <div className="absolute bottom-0 hidden group-hover:block w-full h-1 transition-all duration-200  bg-blue-500"></div>
             </li>
           
             </ul>

             <div className="flex space-x-6">
                
                <a>
                <img src={Assets.Flag} className="h-10 w-full"></img>
                </a>
                  <button className="text-blue-500 font-bold border border-blue-200 cursor-pointer py-3 px-5 rounded-md hover:bg-blue-100 transition-all duration-200">Login</button> 
                  <button className="text-white font-bold border border-blue-200 cursor-pointer py-3 px-5 rounded-md hover:bg-blue-700 transition-all duration-200 bg-blue-600 hidden lg:flex">
                   Sign Up
                  </button>
                 
                 
             </div>
      </div>
    </nav>

   </>
  )
};