import React from 'react'
import {Assets} from '../images/image.js'

const FeaturePage5 = () => {
  return (
    <>
    <style>
        {`
          .moveImage {
            animation: 10s linear infinite move-image;
          }

          @keyframes move-image {
            0% {
             top:0 ;
             
             }
            100% {
             top:-50%; 
             }
          }
            //  .topdiv{
            //  background: linear-gradient(180deg, pink-, yellow);
            //   }
            //  .bottomdiv{
            //  background: linear-gradient(0deg, pink, yellow);
            // }
        `}
      </style>
    <section className="relative pt-12 pb-4 ">
    <div className= "relative flex flex-row mx-auto space-x-20 max-w-[1080px] w-11/12 px-12 pt-8 pb-8">
        {/* left part */}
        <div className=" flex flex-col justify-center gap-y-6 max-w-[700px] ">
          <h2 className="text-2xl font-bold text-blue-900">Join the 50,00,000+ business using Razropay</h2>
          <div className="w-6 h-1 bg-blue-500"></div>
          <p className="text-md opacity-80 max-w-[500px]">We make it easier for you to focus on building great products while we work on simpligying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.</p>
          <p className="text-md opacity-80 ">Focus on your business while we handle the complexities of payments for you.</p>
          <button className="text-xl font-bold w-40 p-2 rounded-md shadow-xl bg-blue-400 text-white">Get Started</button>
        </div>

        {/* right part */}
        <div className="relative h-[400px] w-[500px] overflow-y-hidden">
           {/* <div  className="absolute w-[400px]  h-[50px] top-0 z-50 topdiv"></div> */}
            <img src={Assets.Companies} className="absolute w-100 h-auto object-cover moveImage"></img>
           {/* <div className="absolute w-[400px] h-[50px] bottom-0 z-50 bottomdiv"></div> */}
        </div>
    </div>
    </section></>
  )
}

export default FeaturePage5;