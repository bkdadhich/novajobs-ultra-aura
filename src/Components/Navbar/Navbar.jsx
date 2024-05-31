import React from 'react'
import { useState } from 'react'
import './Navbar.css'
const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    };

  return (
    <>
      <nav className="  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex gap-4'>
        <div className="text-white text-xl md:text-4xl font-bold">
          E-PORA.
          </div>
          <div className='hidden md:block'>
          <button className=' border-2 px-3 py-3 bg-orange-700 border-orange-700 text-white text-xl rounded-xl'>
            Categories
          </button>
          </div>
        </div>
        
          
        
        
        
        <div className="hidden md:flex md:gap-4">
          <a href="/" className="text-white hover:text-gray-300 text-xl">Home</a>
          <a href="/" className="text-white hover:text-gray-300 text-xl">Pages</a>
          <a href="/" className="text-white hover:text-gray-300 text-xl">Instructor</a>
          <a href="/" className="text-white hover:text-gray-300 text-xl">Courses</a>
          <a href="/" className="text-white hover:text-gray-300 text-xl">Blog</a>
          <input typr='search' placeholder='Search Courses' className=' bg-white rounded-2xl px-4 py-2'/>
          <div className=' flex gap-2'>
          <i className="fa-solid fa-user border-2 border-green-700 bg-green-700  px-3 py-3 rounded-full text-white hover:bg-orange-600 hover:border-orange-600"></i>
          <i className="fa-solid fa-bag-shopping border-2 border-green-700 px-3 bg-green-700 hover:bg-orange-600 py-3 rounded-full hover:border-orange-600 text-white"></i>
          </div>
        </div>
        
        <button className=' md:hidden ' onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
        </button>
        </div>
        {
            isOpen && (
                <div className="md:hidden">
                <a href="#home" className="block text-white hover:bg-blue-700 p-2">Home</a>
                <a href="#about" className="block text-white hover:bg-blue-700 p-2">About</a>
                <a href="#courses" className="block text-white hover:bg-blue-700 p-2">Courses</a>
                <a href="#contact" className="block text-white hover:bg-blue-700 p-2">Contact</a>
              </div>
            )
        }
        
        </nav>

    </>
  )

}
export default Navbar
