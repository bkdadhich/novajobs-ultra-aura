import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={`tp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/logo/logo1.png" alt="logo" />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
            <MobileMenus />
        </div>
        {/* <div className="sidebar-info">
        <Link href="/sign-in" className="d-none d-md-block">
                            <i className="fi fi-rr-user"></i>
                          </Link>
        </div> */}
        
        <div className="sidebar-info">
          <Link href='/sign-in'>
          <h5 className="mb-15">Login</h5>
          </Link>
          <Link href='/register'>
          <h5 className="mb-15">Signup</h5>
          </Link>
          
          
          
          
          
        </div>
      </div>
      <div className={`body-overlay ${isActive ? "opened" : ""} `} onClick={() => setIsActive(false)}></div>
    </>
  );
};
export default Sidebar;
