import React from 'react'
import { Assets } from "../images/image.js";

export default function FeaturePage2 () {
  return (
    <>
        {/* NEW SECTION STARTS HERE */}
  <section className="mt-40 ">
    <div className="flex space-x-10">
      {/* LEFT PART */}
      <div className="p-20 mt-4 space-y-2">
        <h2 className="text-5xl font-semibold">Powering every industry</h2>
        <h2 className="text-5xl font-semibold">Powering all disruptors.</h2>
      </div>
      {/* RIGHT PART */}
      <div className="flex space-x-4 justify-between p-4 h-20 w-120 rounded-xl shadow-xl m-20 mx-auto">
         <img src={Assets.Cart} className="h-[35px] w-[40px]"></img>
         <img src={Assets.Headphone} className="h-[35px] w-[40px]"></img>
         <img src={Assets.Book} className="h-[35px] w-[40px]"></img>
         <img src={Assets.Bag} className="h-[35px] w-[40px]"></img>
         <img src={Assets.Forward} className="h-[35px] w-[40px]"></img>
      </div>
    </div>
    <div>
      <ul className="flex pl-20 space-x-10">
        <li className="opacity-80 hover:opacity-100 text-md font-semibold cursor-pointer  group ">
          <a href="#">E-commerce</a>
          <div className="hidden group-hover:block  bg-green-300 h-[2px] mt-2 transition-all duration-300"></div>
        </li>
        <li className="opacity-80 hover:opacity-100 text-md font-semibold cursor-pointer group">
          <a href="#">Education</a>
          <div className="hidden group-hover:block bg-green-300 h-[2px] mt-2 transition-all duration-300"></div>
        </li>
        <li className="opacity-80 hover:opacity-100 text-md font-semibold cursor-pointer group">
          <a href="#">BFSI</a>
          <div className="hidden group-hover:block  bg-green-300 h-[2px] mt-2 transition-all duration-300"></div>
        </li>
        <li className="opacity-80 hover:opacity-100 text-md font-semibold cursor-pointer  group">
          <a href="#">SaaS</a>
          <div className="hidden group-hover:block  bg-green-300 h-[2px] mt-2 transition-all duration-300"></div>
        </li>
        <li className="opacity-80 hover:opacity-100 text-md font-semibold cursor-pointer group">
          <a href="#">Freelancer</a>
          <div className="hidden group-hover:block  bg-green-300 h-[2px] mt-2 transition-all duration-300"></div>
        </li>
      </ul>
    </div>
    {/* CARD */}
    <div className=" flex border border-red-500 m-10 rounded-lg shadow-xl h-[600px]">
    
      {/* LEFT PART */}
        <div className="mt-10 px-10 bg-white z-50 shadow-lg m-12 p-10 w-[700px] h-[500px]">
          <h2 className="text-5xl font-semibold">Empower your</h2>
          <h2 className="text-5xl font-semibold text-green-600 mt-2">e-commerce business</h2>
          <h2 className="text-[18px] opacity-80 mt-10">Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.</h2>
          <div className="flex space-x-8 mt-12">
           <img src={Assets.Nyka} className="h-[40px] w-[50px]"></img>
           <img src={Assets.Decathlon} className="h-[40px] w-[120px]"></img>
           <img src={Assets.Zomato} className="h-[40px] w-[60px]"></img>
           <img src={Assets.Flipkart} className="h-[40px] w-[120px]"></img>
           <p className="opacity-80 text-sm mt-2">+70,000 others</p>
          </div>
          <button className="bg-blue-600 text-white font-semibold rounded-md p-3 hover:bg-blue-700 transition-all duration-200 mt-10">See Solutions</button>
        </div>

        {/* IMAGE PART */}
       
        
    </div>
    
    
    </section>
    {/* FEATURE SECTION 2 */}
   <section className="bg-linear-to-r from-white to green-100 mt-10 w-full">
   
      <h2 className="text-3xl font-semibold pl-10 flex justify-center mt-10">We have innovated at every instance, creating a disruption.</h2>
    {/* CARD SECTION */}
    <div className="max-w-7xl w-full relative mt-8 pl-8 ">
      <div className="flex space-x-5 overflow-x-scroll scroll-smooth no-scrollbar rounded-xl p-4">
        {/* CARD 1 */}
        <div className="min-w-[600px] h-[600px] rounded-xl shadow-xl group border border-green-500">
          
          <h2 className="text-md opacity-80 font-semibold mt-10 pl-8"> MoneySaver Export Account</h2>
          <h2 className="text-5xl font-semibold text-blue-600 px-8 mt-8">Open a virtual account in 20+</h2>
         <div className="flex">
         <span className="text-5xl font-semibold text-blue-600 px-8 mt-2">countries,
            </span>
            <span className="text-5xl font-semibold text-black mt-2 ml-[-25px] ">save upto 50% on</span>
         </div>
          <h2 className="text-5xl font-semibold text-black px-8 mt-2">international bank transfer charges</h2>
          <h2 className="text-5xl font-semibold text-black px-8 mt-2">Receive ACH/SWIFT/SEPA/BACS</h2>
          <h2 className="text-5xl font-semibold text-black px-8 mt-2">payments</h2>
          <h2 className="opacity-80 text-md font-md mt-12 pl-8">Receive international wire transfers with ease with a smart account</h2>
          <div className="flex space-x-5 mt-8 pl-8">
            <button className="rounded bg-blue-600 p-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 transition-all duration-200">Sign up</button>
            <div className="group w-[130px]">
            <a href="#" className="p-2 px-4 text-blue-600 text-lg font-semibold">Know More</a>
            <div className="hidden group-hover:block transition-all duration-200 h-[2px] w-full bg-green-300"></div>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="w-[300px] h-[600px] rounded-xl shadow-xl group border border-green-500">
         <h2 className="text-md opacity-80 mt-8 pl-8 font-semibold">Turbo UPI</h2>
         <div className="text-3xl font-semibold text-blue-600 p-8 mt-2">Experience a 5X faster checkout,</div>
         <h2 className="text-3xl font-semibold text-black p-8  mt-[-65px]">achieve a 10% success rate boost, all without any redirections to UPI apps</h2>
        </div>
      </div>

    </div>
   </section>
    </>
  );
}
