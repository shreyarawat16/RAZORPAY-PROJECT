import React from 'react'
import { Assets } from "../images/image.js";

export default function FeaturePage1(){
  return (
    <>
        {/* Feature section */}
        
        <section className=" relative z-0">
          <div className="flex flex-col items-center mt-10 mx-auto w-full">
          {/* First page */} 
          <div className="relative mt-4 p-4 translate-x-1 w-[80%] h-screen shadow-2xl rounded-md translate-y-4 z-10 min-w-[300px]">
            <h2 className="text-3xl font-semibold px-10 mx-10">Accept Payments</h2>
            <div >
            <ul className="flex justify-center space-x-5 mt-4 p-4 w-full">
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300" >
              <a href="#">Top Products</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
              <a href="#">On Website/App</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
              <a href="#">Plug ins</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
              <a href="#">On Social Media</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
              <a href="#">In-Store</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
              <a href="#">Cross-Border</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
              <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
              <a href="#">With Smart Add Ons</a>
              <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
              </li>
            </ul>
            </div>
            {/* Card section */}
            <div className="relative w-full max-w-5xl mx-auto">
            <div className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth no-scrollbar rounded-xl">
              {/* Card1 */}
              <div className="min-w-[300px] h-[450px] rounded-xl shadow-2xl group">
                <img src={Assets.CardImg1} className="h-[280px] "></img>
                <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
                  <h2 className="text-xl font-semibold">Payment Gateway</h2>
                  <p className="text-sm opacity-80">Offer a seamless payment experience on your website or app</p>
                </div>
              </div>
              {/* CARD2 */}
              <div className="min-w-[300px] h-[450px] rounded-xl shadow-2xl group">
                <div>
                <img src={Assets.CardImg2} className="h-[280px]"></img>
                </div>
               
                <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl  transition-transform duration-300 ">
                  <h2 className="text-xl font-semibold">Payment Button</h2>
                  <p className="text-sm opacity-80">Effortlessly add a payment now button without any coding required</p>
                </div>
              
                
              </div>
              {/* CARD 3 */}
              <div className="min-w-[300px] h-[450px] rounded-xl shadow-xl group ">
                <img src={Assets.CardImg3} className="h-[280px]"></img>
                <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl  transition-transform duration-300 ">
                  <h2 className="text-xl font-semibold">Payment Links</h2>
                  <p className="text-sm opacity-80">Click and share links over email text</p>
                </div>
              </div>
              {/* CARD 4 */}
              <div className="min-w-[300px] h-[450px] rounded-xl shadow-xl group">
                <img src={Assets.CardImg4} className="h-[280px]"></img>
                <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
                  <h2 className="text-xl font-semibold">Razorpay POS</h2>
                  <p className="text-sm opacity-80">Accept seamless in-store payments with India's best POS solution</p>
                </div>
              </div>
              {/* CARD 5 */}
              <div className="min-w-[300px] h-[450px] rounded-xl shadow-xl group">
                <img src={Assets.CardImg5} className="h-[280px]"></img>
                <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
                  <h2 className="text-xl font-semibold">Payment pages</h2>
                  <p className="text-sm opacity-80">Accept payments on a custom branded online store with zero coding</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>

      {/* Second page */}
      <div className="mx-auto mt-4 p-4 translate-x-1 translate-y-4 w-[80%] h-screen shadow-2xl rounded-lg duration-500 ease-in-out z-100 ">
        <h2 className="text-3xl font-semibold px-10 mx-10">Make Payouts</h2>
        <div>
        <ul className="flex justify-center space-x-5 mt-4 p-4">
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300" >
          <a href="#">Top Products</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">On Website/App</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">Plug ins</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">On Social Media</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">In-Store</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">Cross-Border</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">With Smart Add Ons</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
        </ul>
        </div>
        {/* CARD COMPONENT */}
        <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth no-scrollbar rounded-xl">
          {/* 1ST CARD */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-2xl group ">
            <img src={Assets.CardImg6} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full group-hover:-translate-y-4 group-hover:shadow-xl transition-transform duration-300 rounded-xl">
              <h2 className="text-xl font-semibold">Payment Gateway</h2>
              <p className="text-sm opacity-80">Offer a seamless payment experience</p>
            </div>
          </div>
          {/* 2ND CARD */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl group">
            <img src={Assets.CardImg7} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Payment pages</h2>
              <p className="text-sm opacity-80">Accept payments on a custom branded online store with zero coding</p>
            </div>
          </div>
          {/* 3RD CARD */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl group">
            <img src={Assets.CardImg8} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Payment pages</h2>
              <p className="text-sm opacity-80">Accept payments on a custom branded online store with zero coding</p>
            </div>
          </div>
          {/* 4TH CARD */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl group">
            <img src={Assets.CardImg9} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Payment pages</h2>
              <p className="text-sm opacity-80">Accept payments on a custom branded online store with zero coding</p>
            </div>
          </div>
          </div>
        </div>
      </div>
{/* Third page */}
      <div className="mx-auto mt-4 p-4 translate-x-1 translate-y-4 w-[80%] h-screen shadow-2xl rounded-lg duration-300 ease-in-out z-100 ">
        <h2 className="text-3xl font-semibold px-10 mx-10">Start Business Banking</h2>
        <div>
        <ul className="flex justify-center space-x-5 mt-4 p-4">
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300" >
          <a href="#">Top Products</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">On Website/App</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">Plug ins</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">On Social Media</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">In-Store</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">Cross-Border</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">With Smart Add Ons</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
        </ul>
        </div>
        {/* CARD SECTION */}
        <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth no-scrollbar rounded-xl">
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-2xl ">
            <img src={Assets.CardImg10} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full">
              <h2 className="text-xl font-semibold">Current Account</h2>
              <p className="text-sm opacity-80">Automate banking with India's top current account for startups</p>
            </div>
          </div>
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl ">
            <img src={Assets.CardImg11}  className=""></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Escrow Account</h2>
              <p className="text-sm opacity-80">Automate escrow money transfers with total safety and compliance</p>
            </div>
          </div>
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl ">
            <img src={Assets.CardImg12}className=""></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Forex Management</h2>
              <p className="text-sm opacity-80">Get effortless foreign funding management with expert support</p>
            </div>
          </div>
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl ">
            <img src={Assets.CardImg13} className=""></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Accounting Integration</h2>
              <p className="text-sm opacity-80">Easy integration with your accounting software</p>
            </div>
          </div>
        </div>
      </div>
      </div>
        {/* Fourth page */}
        <div className="mx-auto mt-4 p-4 translate-x-1 translate-y-4 w-[80%] h-screen shadow-2xl rounded-lg duration-300 ease-in-out z-100 ">
        <h2 className="text-3xl font-semibold px-10 mx-10">Automate payroll</h2>
        <div>
        <ul className="flex justify-center space-x-5 mt-4 p-4">
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300" >
          <a href="#">Top Products</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">On Website/App</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">Plug ins</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">On Social Media</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">In-Store</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">Cross-Border</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
          <li className="opacity-80 hover:opacity-100 text-md font-medium group transition-all duration-300">
          <a href="#">With Smart Add Ons</a>
          <div className="hidden group-hover:block h-[2px] bg-green-500 transition-all duration-300 mt-2"></div>
          </li>
        </ul>
        </div>
        {/* CARD SECTION */}
        <div className="relative w-full max-w-5xl mx-auto ">
        <div className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth no-scrollbar rounded-xl">
          {/* CARD1 */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-2xl">
            <img src={Assets.CardImg14} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full">
              <h2 className="text-xl font-semibold">Payroll for Startups</h2>
              <p className="text-sm opacity-80">Make payroll and compliance with a solution built just for startups</p>
            </div>
          </div>
          {/* card2 */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl ">
            <img src={Assets.CardImg15} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Payroll for CAs</h2>
              <p className="text-sm opacity-80">Transform payroll and compliance with your clients with RazorpayX</p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="min-w-[300px] h-[450px] rounded-lg shadow-xl ">
            <img src={Assets.CardImg16} className="h-[280px]"></img>
            <div className="flex flex-col space-y-4 p-4 w-full h-40 group-hover:-translate-y-8 group-hover:shadow-xl transition-transform duration-300 ">
              <h2 className="text-xl font-semibold">Payroll for Enterprises</h2>
              <p className="text-sm opacity-80">Get India's no. 1 payroll software for enterprises with RazorpayX</p>
            </div>
          </div>

          </div>
        </div>

      </div> 
      {/* FOURTH PAGE END HERE */}
    </section>
        
    </>
  );
}

