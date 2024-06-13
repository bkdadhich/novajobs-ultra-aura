// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from './logo1.png';
// import {Link} from 'react-router-dom'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdowns, setDropdowns] = useState({
//     level1: null,
//     level2: null,
//     level3: null,
//   });

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (menu, level) => {
//     setDropdowns((prev) => ({
//       ...prev,
//       [level]: prev[level] === menu ? null : menu,
//     }));
//   };

//   return (
//     <>
//       <nav className="px-7 py-5 flex">
//         <div className="container flex gap-3 items-center justify-between ">
//           <Link to='/'>
//           <div>
//             <img src={logo} className="w-full h-8 md:h-20 rounded-md md:px-10" alt="Logo" />
//           </div>
//           </Link>
          
//           <div className="hidden md:flex  items-center ">
//             <Link to='/'>
//             <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
//               SuperMinds
//               <div className="absolute hidden font-normal text-base group-hover:block text-black  w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
//                 <span className="font-semibold">For Undergraduates:</span>
//                 <br />
//                 Embark on your academic journey with UltraAura, where we provide a diverse range of undergraduate programs tailored to equip you with the knowledge and skills necessary for success. Our interactive courses and experienced faculty ensure you gain a solid foundation and practical insights to excel in your chosen field.
//               </div>
//             </div>
//             </Link>
            
//             <Link to='/'>
//             <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
//               UniqueMinds
//               <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
//                 <span className="font-semibold">For Graduates:</span>
//                 <br />
//                 Advance your expertise and career prospects with UltraAura's graduate programs. Designed for in-depth learning and professional growth, our courses offer advanced theories, practical applications, and research opportunities, all guided by industry-leading experts. Elevate your qualifications and open doors to new career opportunities.
//               </div>
//             </div>
//             </Link>
            
//             <Link to='/'>
//             <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
//               MasterMinds
//               <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
//                 <span className="font-semibold">For Professionals:</span>
//                 <br />
//                 Stay competitive in today’s fast-paced job market with UltraAura’s professional development courses. Our flexible, career-oriented programs are designed to fit your busy schedule, allowing you to upgrade your skills, acquire new certifications, and stay ahead in your field without compromising your work-life balance.
//               </div>
//             </div>
//             </Link>
            
//             <Link to='/'>
//             <div className="relative group px-2 border-r-2 text-white  hover:text-yellow-300 font-semibold text-xl">
//               CreativeMinds
//               <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
//                 <span className="font-semibold">For Home Services:</span>
//                 <br />
//                 Master your trade with UltraAura’s specialized courses for home services professionals. Whether you're an electrician, plumber, or other skilled tradesperson, our practical training and certification programs are crafted to enhance your expertise, ensure compliance with industry standards, and boost your career growth in the home services sector.
//               </div>
//             </div>
//             </Link>
            
//             <Link to='/'>
//             <div className="relative group px-2  text-white  hover:text-yellow-300 font-semibold text-xl">
//               SpecialMinds
//               <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
//                 <span className="font-semibold">For Home Services:</span>
//                 <br />
//                 Master your trade with UltraAura’s specialized courses for home services professionals. Whether you're an electrician, plumber, or other skilled tradesperson, our practical training and certification programs are crafted to enhance your expertise, ensure compliance with industry standards, and boost your career growth in the home services sector.
//               </div>
//             </div></Link>
            

//             {/* <div className="relative">
//               <input type="search" placeholder="Search Courses" className="bg-white border-2 rounded-full px-3 py-3 pl-10" />
//               <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M10 2a8 8 0 106.32 13.906l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387A8 8 0 1010 2zM4 10a6 6 0 1111.5 3.134A8.038 8.038 0 0010 16a8.038 8.038 0 00-4.5-2.866A6 6 0 014 10z" clipRule="evenodd"></path>
//               </svg>
//             </div> */}

//             <div className="flex gap-2" id="navicons">
//               <Link to='/login'>
//               <i className="fa-solid fa-user px-3 py-3 rounded-full text-white "></i>
//               </Link>
//               <Link to='/signup'>
//               <i className="fa-solid fa-bag-shopping px-3  py-3 rounded-full text-white" ></i>
//               </Link>
              
//             </div>

//             {/* {!token ? (
//               <div className="navbar-buttons">
//                 <Link to="/Login" onClick={closeNavbar}>
//                   <button className="login-btn">Log in</button>
//                 </Link>
//                 <Link to="Sign_Up" onClick={closeNavbar}>
//                   <button className="signup-btn">Sign Up</button>
//                 </Link>
//               </div>
//             ) : (
//               <div className="flex gap-4 justify-center items-center">
//                 <Link to={`/profile/${user.id}`} onClick={closeNavbar}>
//                   <p className="text-white text-md">{user.name}</p>
//                 </Link>
//                 <button className="text-md py-1 px-4 bg-gray-500 text-white" onClick={handleLogout}>
//                   LogOut
//                 </button>
//               </div>
//             )} */}
//           </div>

//           <button className="md:hidden" onClick={toggleMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//             </svg>
//           </button>
          
//         </div>
//         {isOpen && (
//           <div className="md:hidden block border-2 ">
//             <Link to='/'>
//             <div>SuperMinds</div>
//             </Link>
//             <Link to='/'>
//             <div>UniqueMinds</div>
//             </Link>
//             <Link to='/'>
//             <div>CreativeMinds</div>
//             </Link>
//             <Link to='/'>
//             <div>MasterMinds</div>
//             </Link>
//             <Link to='/'>
//             <div>SpecialMinds</div>
//             </Link>
//             <Link to='/login'>
//             <div>Login</div>
//             </Link>
//             <Link to='/signup'>
//             <div>Signup</div>
//             </Link>
            
//           </div>
//         )}
//       </nav>
      
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="px-4 py-5 flex  shadow-md md:w-full z-10">
        <div className="container flex items-center justify-evenly ">
          {/* Menu icon for mobile */}
          <button className="md:hidden " onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d= 'M4 6h16M4 12h16m-7 6h7'
                // d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} className="h-12 md:h-20 rounded-md" alt="Logo" />
          </Link>

          {/* Login icon for mobile */}
          <Link to="/login" className="md:hidden">
            <i className="fa-solid fa-user text-white px-3 py-3 rounded-full"></i>
          </Link>
          <Link to="" className=' md:hidden'>
                <i className="fa-solid fa-bag-shopping text-white px-3 py-3 rounded-full"></i>
              </Link>

          {/* Desktop menu items */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
                SuperMinds
                <div className="absolute hidden font-normal text-base group-hover:block text-black  w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
                 <span className="font-semibold">For Undergraduates:</span>
                <br />
                                 Embark on your academic journey with UltraAura, where we provide a diverse range of undergraduate programs tailored to equip you with the knowledge and skills necessary for success. Our interactive courses and experienced faculty ensure you gain a solid foundation and practical insights to excel in your chosen field.
             </div>
              </div>
            </Link>
            <Link to="/">
              <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
                UniqueMinds
                <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
                <span className="font-semibold">For Graduates:</span>
                <br />
                 Advance your expertise and career prospects with UltraAura's graduate programs. Designed for in-depth learning and professional growth, our courses offer advanced theories, practical applications, and research opportunities, all guided by industry-leading experts. Elevate your qualifications and open doors to new career opportunities.
               </div>
              </div>
            </Link>
            <Link to="/">
              <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
                MasterMinds
                <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
                 <span className="font-semibold">For Professionals:</span>
                 <br />
                 Stay competitive in today’s fast-paced job market with UltraAura’s professional development courses. Our flexible, career-oriented programs are designed to fit your busy schedule, allowing you to upgrade your skills, acquire new certifications, and stay ahead in your field without compromising your work-life balance.
               </div>
              </div>
            </Link>
            <Link to="/">
              <div className="relative group px-2 border-r-2 text-white hover:text-yellow-300 font-semibold text-xl">
                CreativeMinds
                <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
                 <span className="font-semibold">For Home Services:</span>
                 <br />
                 Master your trade with UltraAura’s specialized courses for home services professionals. Whether you're an electrician, plumber, or other skilled tradesperson, our practical training and certification programs are crafted to enhance your expertise, ensure compliance with industry standards, and boost your career growth in the home services sector.
               </div>
              </div>
            </Link>
            <Link to="/">
              <div className="relative group px-2 text-white hover:text-yellow-300 font-semibold text-xl">
                SpecialMinds
                <div className="absolute hidden font-normal text-base group-hover:block text-black bg-white w-[400px] p-4 mt-2 rounded-xl shadow-2xl" id='navlinks'>
                 <span className="font-semibold">For Home Services:</span>
                 <br />
                 Master your trade with UltraAura’s specialized courses for home services professionals. Whether you're an electrician, plumber, or other skilled tradesperson, our practical training and certification programs are crafted to enhance your expertise, ensure compliance with industry standards, and boost your career growth in the home services sector.
               </div>
              </div>
            </Link>

            <div className="flex gap-2">
              <Link to="/login">
                <i className="fa-solid fa-user text-white px-3 py-3 rounded-full"></i>
              </Link>
              <Link to="">
                <i className="fa-solid fa-bag-shopping text-white px-3 py-3 rounded-full"></i>
              </Link>
            </div>
          </div>
        </div>

        </nav>

        {/* Mobile menu items */}
        {isOpen && (
          <div className="md:hidden flex flex-col shadow-xl bg-slate-200 shadow-slate-950 w-full">
            <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-300 ">SuperMinds</Link>
            <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-300 ">UniqueMinds</Link>
            <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-300 ">CreativeMinds</Link>
            <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-300 ">MasterMinds</Link>
            <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-300 ">SpecialMinds</Link>
            
          </div>
        )}
     
    </>
  );
};

export default Navbar;
