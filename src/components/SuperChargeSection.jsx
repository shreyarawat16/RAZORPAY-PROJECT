import React from 'react'
import { Assets } from '../images/image.js'

const SuperChargeSection = () => {
  return (
   <>
  
   <section className="relative bg-[url(./images/CTABg.svg)] w-full bg-cover min-h-[510px]">
    <div className="relative mx-auto w-11/12 max-w-[1089px] flex flex-row items-center justify-between sapce-x-20 pt-18 pb-14 ">
      {/* LEFT PART */}
      <div className="flex flex-col justify-center gap-5 mt-5 max-w-[600px]">
        <h2 className="text-white font-bold text-3xl">Supercharge your business with Razorpay</h2>
        <div className=" mx0-auto w-6 h-[4px] bg-white"></div>
        <p className="text-white text-md w-80">Sign up now to experience the future of payments and offer your customers the best checkout experience.</p>
        <ul className="flex flex-row flex-wrap gap-x-12 gap-y-4 text-white">
            <li>
                <i data-feather="check" className="text-green-500"></i>
                <span className="text-whit text-md">Quick Onboarding</span>
            </li>
            <li>
                <i></i>
                <span className="text-white text-md">Access to entire product suite</span>
            </li>
            <li>
                <i></i>
                <span className="text-white text-md">API access</span>
            </li>
            <li>
                <i></i>
                <span className=" text-white text-md">24x7 support</span>
            </li>
        </ul>
        <button className="min-w-[32px] w-32  text-white cursor-pointer hover:bg-blue-600 transition-all duration-200 flex items-center rounded-md shadow-lg py-3 px-4 bg-blue-500 font-semibold text-lg">Sign Up
          <svg viewBox="0 0 24 24"
          focusable="false"
          className="w-[14px] h-[14px] ml-3">
          <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </button>
      </div>
      {/* RIGHT PART */}
      <div>
        <img src={Assets.CtaImg} className="w-[240px] h-[280px] mt-10"></img>
      </div>
    </div>
   </section></>
  )
}

export default SuperChargeSection