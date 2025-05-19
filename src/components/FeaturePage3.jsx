import React from 'react'
import {Assets} from "../images/image.js"

const FeaturePage3 = () => {
  return (
    <>
    <section className="relative z-0">
            <div className="max-w-[1080px] mx-auto pt-4 w-11/12">
                <img src={Assets.Dots} className="absolute w-[233px] left-[300px] z-10"></img>
                <img src={Assets.Dots} className="absolute w-[233px] right-[200px] z-10"></img>
               <div className="grid grid-cols-3 gap-y-10 gap-x-6 relative w-full">
                {/* item 1 */}
               <div className="relative flex items-center z-0 ">
                <h2 className="text-4xl font-semibold leading-[3.375rem]">New in the
                     <div className="text-4xl font-semibold text-blue-600">
                       Razorpay
                     </div>
                     Product Suite
                </h2>
               
               </div>
                {/* card 1 */}
                <div className="bg-white bg-[url('./images/instant-settlement-bg.svg')] 
                shadow-md rounded-lg p-10 hover:scale-105 cursor-pointer transition-all duration-200
                hover:bg-[url('./images/instant-settlement-bghover.svg')] z-[100]  ">
                    <img src={Assets.RazorpayXIcon} className=" w-10 h-10"></img>
                    <h2 className=" mt-4 font-semibold text-xl">Corporate Cards</h2>
                    <p className=" mt-2 opacity-80 text-sm leading-normal w-50">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                    <div className="mt-4 flex items-center cursor-pointer group gap-4">
                        <a className=" text-blue-700 font-semibold text-md group-hover:text-blue-800 transition-all duration-200 ">Know More</a>
                        <i></i>
                    </div>
                </div>
                {/* card2 */}
                <div className=" bg-white bg-[url('./images/instant-settlement-bg.svg')] 
                shadow-md rounded-lg p-10 hover:scale-105 cursor-pointer transition-all duration-200
                hover:bg-[url('./images/instant-settlement-bghover.svg')] ">
                    <img src={Assets.RazorpayXIcon} className=" w-10 h-10"></img>
                    <h2 className=" mt-4 font-semibold text-xl">UPI Autopay</h2>
                    <p className=" mt-2 opacity-80 text-sm leading-normal w-50">Allow customers to set up recurring payments using UPI Apps</p>
                    <div className="mt-4 flex items-center cursor-pointer group gap-4">
                        <a className=" text-blue-700 font-semibold text-md group-hover:text-blue-800 transition-all duration-200 ">Know More</a>
                        <i></i>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white bg-[url('./images/instant-settlement-bg.svg')] 
                shadow-md rounded-lg p-10 hover:scale-105 cursor-pointer transition-all duration-200
                hover:bg-[url('./images/instant-settlement-bghover.svg')] ">
                    <img src={Assets.RazorpayXIcon} className=" w-10 h-10"></img>
                    <h2 className=" mt-4 font-semibold text-xl">Magic Checkout</h2>
                    <p className=" mt-2 opacity-80 text-sm leading-normal w-50">Improve your order conversion rates & reduce return-to-origins. Boost your business by 20%</p>
                    <div className="mt-4 flex items-center cursor-pointer group gap-4">
                        <a className=" text-blue-700 font-semibold text-md group-hover:text-blue-800 transition-all duration-200 ">Know More</a>
                        <i></i>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white bg-[url('./images/instant-settlement-bg.svg')] 
                shadow-md rounded-lg p-10 hover:scale-105 cursor-pointer transition-all duration-200
                hover:bg-[url('./images/instant-settlement-bghover.svg')] ">
                    <img src={Assets.RazorpayXIcon} className=" w-10 h-10"></img>
                    <h2 className=" mt-4 font-semibold text-xl">Payment Button</h2>
                    <p className=" mt-2 opacity-80 text-sm leading-normal w-50">Accept payments on your website in less than 5 minutes. No developer needed.</p>
                    <div className="mt-4 flex items-center cursor-pointer group gap-4">
                        <a className=" text-blue-700 font-semibold text-md group-hover:text-blue-800 transition-all duration-200 ">Know More</a>
                        <i></i>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="bg-white bg-[url('./images/instant-settlement-bg.svg')] 
                shadow-md rounded-lg p-10 hover:scale-105 cursor-pointer transition-all duration-200
                hover:bg-[url('./images/instant-settlement-bghover.svg')] ">
                    <img src={Assets.RazorpayXIcon} className=" w-10 h-10"></img>
                    <h2 className=" mt-4 font-semibold text-xl">Payment Button</h2>
                    <p className=" mt-2 opacity-80 text-sm leading-normal w-50">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                    <div className="mt-4 flex items-center cursor-pointer group gap-4">
                        <a className=" text-blue-700 font-semibold text-md group-hover:text-blue-800 transition-all duration-200 ">Know More</a>
                        <i></i>
                    </div>
                </div>
            </div>
    </div>
    </section>
    </>
  )
}

export default FeaturePage3