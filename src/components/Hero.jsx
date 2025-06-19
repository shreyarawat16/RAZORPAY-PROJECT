import React from 'react'
import {Assets} from "../images/image.js";

export default function  Hero () {
  return (
          
        <>
         {/* HERO SECTION */}
          <section className="relative bg-linear-to-r from-white to-blue-100">
            <div className=" mx-auto flex  flex-col lg:flex-row justify-between items-center w-11/12 max-w-[1080px] p-10 ">
               {/* left part */}
               <div>
                {/* Heading, para */}
            
                   <h2 className="text-blue-600 font-semibold text-5xl mb-2 leading-[1.2]">Advanced Payment Solutions</h2>
                   <h2 className="font-semibold text-5xl text-black">for India's finest disruptors</h2>
                   <p className="text-black font-normal leading-7 text-md mt-6 ">100+ Payment Methods | Easy integration | Powerful Dashboard</p>
                
        
                {/* Buttons */}
        
                <div className="flex flex-col-reverse md:flex-row items-center space-x-4 mt-5">
                    
                    <button className="w-full md:w-fit h-12 bg-blue-600 px-5 my-2 mx-2 rounded text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer font-bold ">
                      Sign Up Now</button>
                   
                    
                   <div className="flex self-start md:items-center my-4 mx-2 cursor-pointer text-blue-600 font-semibold group text-lg">
                   <a href="#" >Know More</a>
                   <div className="absolute bottom-0 hidden group-hover:block bg-blue-400  transition-all duration-300 w-full h-[2px]"></div>
                   </div>
                    
                </div>
        
               </div>
        
                 {/* right part */}
                <div className="m-10">
                 <img src={Assets.Hero} className="w-full max-w-[680px]" alt=""></img>
                 </div>
        
                 
            </div>
            {/* Last part */}
            <section className="flex justify-center mt-2 mx-auto">
            <div className=" flex justify-between gap-2 px-2 bg-white shadow rounded-lg items-center">
              <p className="hidden lg:block my-4 mx-2 text-md cursor-pointer ">Looking for a product?</p>
              <button className="hidden lg:block bg-blue-100 text-blue-600 py-[1px] px-3 m-2 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer h-[40%] ">Accept Payments</button>
              <button className= "hidden lg:block bg-blue-100 text-blue-600 py-[1px] px-3 m-2 rounded-full text-sm  hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer h-[40%]">Make Payouts</button>
              <button className="hidden lg:block bg-blue-100 text-blue-600 py-[1px] px-3 m-2 rounded-full text-sm  hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer  h-[40%]">Start business banking</button>
              <button className="hidden lg:block bg-blue-100 text-blue-600 py-[1px] px-3 m-2 rounded-full text-sm  hover:bg-blue-500 hover:text-white transition-all duration-300  cursor-pointer  h-[40%]">Get credit</button>
              <button className="hidden lg:block bg-blue-100 text-blue-600 py-[1px] px-3 m-2 rounded-full text-sm  hover:bg-blue-500 hover:text-white transition-all duration-300  cursor-pointer  h-[40%]">Automate payroll</button>
              <button className="hidden lg:block bg-blue-100 text-blue-600 py-[1px] px-3 m-2 rounded-full text-sm  hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer  h-[40%]">Something else?</button>
            </div>
            </section>
           
           {/* 
            Last part */}
            <section className="relative">
            <div className="w-11/12 mt-4 h-[150px] p-4 mx-auto max-w-[1080px] ">
              <h2 className="text-5xl font-semibold leading-[1.5] hidden md:block">The all in one &nbsp;
                <span className="text-green-600">Financial Platform</span><br></br>
                you've been looking for
              </h2>
              <h2 className="text-3xl font-bold leading-[1.5] visible md:hidden flex justify-center ">Explore Razorpay Payments suite
               
              </h2>
             </div>
              <div className="mx-auto absolute flex justify-center items-center gap-x-4 my-10 p-4 ">
                <p className="text-md opacity-80 cursor-pointer">With Razorpay you can: </p>
                <a href="#" className="font-semibold cursor-pointer">Accept Payments</a>
                <a href="#" className="font-semibold cursor-pointer">Make payouts</a>
                <a href="#" className="font-semibold cursor-pointer">Start business banking</a>
                <a href="#" className="font-semibold cursor-pointer">Automate payroll</a>
                <a href="#" className="font-semibold cursor-pointer">Get credit and Loans</a>
              </div>
              
            </section>
          </section>
         </>
  );  
}

