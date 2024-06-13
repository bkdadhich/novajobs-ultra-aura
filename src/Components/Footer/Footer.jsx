import React from 'react'
import "./Footer.css"
import logo from './logo1.png'
import newlogo from './newlogo.png'
import newlogo1 from './newlogo1.png'
import copywrite from './copywrite.jpg'
import '../About/About.css'
import '../Home_part/HomeFirstPart.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center align-middle m-auto ' id='footer'>
        <div className='  text-white flex flex-col items-center md:flex-row justify-evenly py-24'>
            <div className=' m-3 flex flex-col md:flex-row justify-evenly gap-3 md:gap-16'> 
            <div>
                <div className=' text-xl flex flex-col gap-3' >
                    <div className=' font-bold text-2xl'>About</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>About Us</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Blog</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Careers</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Jobs</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>In Press</div>
                </div>
            </div>
            <div>
                <div className=' text-xl flex flex-col gap-3' >
                    <div className=' font-bold text-2xl'>Quick Links</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Refund Policy</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Documentation</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Chat Online</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Order Cancel </div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Privacy Podivcy</div>
                </div>
            </div>
            <div>
                <div className=' text-xl flex flex-col gap-3' >
                    <div className=' font-bold text-2xl'>Support</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Contact us</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Online Chat</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Whatsapp</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Telegram</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Ticketing</div>
                </div>
            </div>
            </div>
            <div className=' m-3 flex flex-col gap-4 md:w-[30%]'> 
            <div className=' font-bold text-2xl'>Support</div>
            <div>Be the first one to know about discounts, offers and events. Unsubscribe whenever you like.</div>
            <div className=' flex border-2 rounded-2xl justify-between bg-white  py-1'>
                <input type="search" placeholder=' Enter your Email' className=' rounded-2xl md:px-2 w-[170px] py-2'/>
                <button className=' rounded-xl px-1 py-1 hover:bg-white hover:text-black font-normal sm:mx-2' id='btnhome'>Subscribe Now</button>
            </div>
            <div className=' flex gap-2 text-xl'>
            <FaLinkedinIn />
            <FaFacebookSquare />
            <FaYoutube />
                {/* <div><i className="fa-brands fa-facebook border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white " id='spanele'></i></div>
                
                <div><i className="fa-brands fa-youtube border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white " id='spanele'></i></div>
                <div><i className="fa-solid fa-globe border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white " id='spanele'></i></div>
                <div><i className="fa-brands fa-whatsapp border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white " id='spanele'></i></div> */}
            </div>
            
            </div>
        </div>
        <hr/>
        <div className=' flex flex-col md:flex-row justify-evenly py-14 px-1 md:px-14'>
          <img src={logo} className='w-full md:w-auto h-20 md:h-20 rounded-md '/>
          <div className=' flex flex-wrap gap-1 text-white items-center text-lg '>
            <div>Copywrite</div> <div><img src={copywrite} className=' h-4 w-4 md:h-5 md:w-auto bg-transparent'/></div><div>By Hyper V Solutions</div> <div>|</div> <div>All Rights Reserved</div>
          </div>
<div className=' flex py-4 '>
          <img src={newlogo} className='w-auto h-12'/>
            <img src={newlogo1} className='w-auto h-12'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
