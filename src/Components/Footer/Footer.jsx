import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className='w-full h-full flex flex-col align-middle m-auto ' id='footer'>
        <div className='  text-white flex flex-col md:flex-row justify-evenly py-24'>
            <div className=' m-3 flex flex-col md:flex-row justify-evenly gap-3 md:gap-16'> 
            <div>
                <div className=' text-xl flex flex-col gap-3' >
                    <div className=' font-semibold text-2xl'>About</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>About Us</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Blog</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Careers</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Jobs</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>In Press</div>
                </div>
            </div>
            <div>
                <div className=' text-xl flex flex-col gap-3' >
                    <div className=' font-semibold text-2xl'>Quick Links</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Refund Policy</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Documentation</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Chat Online</div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Order Cancel </div>
                    <div className=' hover:text-orange-500 hover:pl-1'>Privacy Podivcy</div>
                </div>
            </div>
            <div>
                <div className=' text-xl flex flex-col gap-3' >
                    <div className=' font-semibold text-2xl'>Support</div>
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
            <div className=' flex border-2 rounded-2xl bg-white justify-between py-1'>
                <input type="search" placeholder=' enter your email' className=' rounded-2xl sm:px-3 py-2'/>
                <button className=' rounded-2xl md:rounded-full border-2 border-orange-500 px-1 sm:px-2 py-2 bg-orange-500 hover:bg-white hover:text-orange-500 font-medium sm:mx-4'>Subscribe Now</button>
            </div>
            <div className=' flex gap-2 text-xl'>
                <div><i className="fa-brands fa-facebook border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white hover:bg-orange-500"></i></div>
                <div><i className="fa-brands fa-youtube border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white hover:bg-orange-500"></i></div>
                <div><i className="fa-solid fa-globe border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white hover:bg-orange-500"></i></div>
                <div><i className="fa-brands fa-whatsapp border-2 px-1 py-1 rounded-full bg-white text-orange-500 hover:text-white hover:bg-orange-500"></i></div>
            </div>
            </div>
        </div>
        <hr/>
        <div className=' flex flex-col md:flex-row justify-around py-14'>
          <div className=' text-white font-bold text-3xl'>E-PORA.</div>
          <div className=' text-xl text-white'>Copyright © Uxaction 2024, All Rights Reserved
</div>
        </div>
      </div>
    </>
  )
}

export default Footer
