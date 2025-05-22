import React from 'react'
import {Assets} from '../images/image.js'
const FooterSection = () => {
  return (
    <>
    <section className="relative h-[1080px]">
        <div className="w-11/12 max-w-[1200px] relative mx-auto flex gap-x-8">
            {/* first div */}
            <div className="flex flex-col gap-y-4 max-w-[500px] p-10">
                <h2 className="font-semibold text-xl">Razorpay</h2>
                <p className="text-sm opacity-80">Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</p>
                <p className="text-sm opacity-80">RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.
               </p>
               <p className="text-sm opacity-80">Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</p>
               <p className="text-sm opacity-80">Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI, RBL, Yes bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</p>
            </div>
            {/* second div */}
            <div className="flex flex-col gap-y-4 p-10">
                <ul className="leading-7">
                    <h2 className="text-md ">Accept Payments</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                        <a>Payment Aggregator</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Payment Gateway</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Payment Pages</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Payment Links</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Razorpay POS</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>QR codes</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Subscriptions</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Smart Collect</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Optimizer</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Instant settlement</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
                <ul className="leading-7">
                    <h2 className="text-md ">Payroll</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Razorpay x Payroll</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
                <ul className="leading-7">
                     <h2 className="text-md ">Become a partner</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Refer and earn</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Onboarding APIs</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
                <ul className="leading-7">
                     <h2 className="text-md ">More</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Route</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Invoices</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Freelancer payments</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>International payments</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Flash checkout</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>UPI</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>ePOS</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Checkout Demo</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
            </div>
            {/* third div */}
           <div className="flex flex-col gap-y-4 p-10">
                <ul className="leading-7">
                    <h2 className="text-md ">BANKING PLUS</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                        <a>Razorpay X</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Source to pay</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Current Accounts</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Payouts</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Payout Links</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Corporate Credit Card</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    
                    </li>
                </ul>
                <ul className="leading-7">
                    <h2 className="text-md ">DEVELOPERS</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Docs</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
                <ul className="leading-7">
                     <h2 className="text-md ">Become a partner</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Integration</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>API Refrence</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
                <ul className="leading-7">
                     <h2 className="text-md ">RESOURCES</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Blog</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Learn</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Customer Stories</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Events</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Chargeback Guide</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Settlement Guide</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                   
                </ul>
                 <ul className="leading-7">
                     <h2 className="text-md ">SOLUTIONS</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Education</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>E-commerce</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>SaaS</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>BFSI</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    
                   
                </ul>
                 <ul className="leading-7">
                     <h2 className="text-md ">FREE TOOLS</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>GST Calculator</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>GST Number Search</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>GST Search by PAN</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>ROI Calculator</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li> 
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>CAGR Calculator</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li> 
                   
                   
                </ul>
            </div>
            {/* fourth div */}
           <div className="flex flex-col gap-y-4 p-10">
                <ul className="leading-7">
                    <h2 className="text-md ">COMPANY</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                        <a>About Us</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Careers</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Terms of Use</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Privacy Policy</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Grievance Redressal</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Responsible Disclosure</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Partners</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>White Papers</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                         <a>Corporate Information</a>
                        <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                   
                </ul>
                <ul className="leading-7">
                    <h2 className="text-md ">HELP & SUPPORT</h2>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Support</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                    <li className="group text-blue-700 text-md font-semibold">
                       <a>Knowledge base</a>
                       <div className="hidden group-hover:block w-full h-[2px] bg-blue-500"></div>
                    </li>
                </ul>
                <ul>
                     <h2 className="text-md ">FIND US ONLINE</h2>
                     <div className="flex flex-row gap-2 mt-4">
                    <img src={Assets.Facebook}></img>
                    <img src={Assets.Insta}></img>
                    <img src={Assets.Github}></img>
                    <img src={Assets.Linkedin} className="h-6 w-8"></img>
                    <img src={Assets.Twitter}></img>
                     </div>
                    
                </ul>
                
            </div>
        </div>
    </section></>
  )
}

export default FooterSection