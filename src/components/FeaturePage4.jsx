import React from 'react'
import {Assets } from '../images/image.js'

const FeaturePage4 = () => {
  return (

    <>
    <section className="relative pt-[8rem] pb-[8rem] w-full bg-[url('./images/core-features-sectionBg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="relative max-w-[1080px] w-11/12 mx-auto pt-4">
            <h2 className=" text-center text-4xl text-white font-semibold">
                Features
            </h2>
            <div className=" text-white block w-6 h-1 mx-auto mt-4 mb-6">
                    
            </div>
            <p className="opacity-80 text-sm w-100 text-white text-center mx-auto max-w-[450px]">Empower your business with all the right tools to accept online payments and provide the best customer experience</p>
         {/* GRID */}
        <div className="mt-10 grid grid-cols-4 gap-y-10 ">
           
            {/* card 1 */}
            <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">Instant Activation</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 2 */}
           <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">Easy Integration</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 3 */}
            <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">API Driven</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 4 */}
           <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">100+ payment modes</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 5 */}
            <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">Simple Pricing</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 6 */}
           <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">Best in Industry support</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 7 */}
            <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">Dashboard Reporting</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
            {/* card 8 */}
            <div>
                <img src={Assets.InstantActivation}></img>
                <h2 className="font-semibold text-lg mt-4 text-white">Secure</h2>
                <p className="text-sm mt-4 text-white max-w-50 opacity-80">Get activated and transact within 2 minutes. Completely online on boarding with minimum documentation</p>
            </div>
        </div>
        </div>
    </section></>
  )
}

export default FeaturePage4;