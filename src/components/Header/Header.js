import React from "react";
import './Header.css';
import { HiXMark } from 'react-icons/hi2';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
    const viewSideMenu = () => {
setSideBar(true);
    };
    return (
        <header>
            <div className="logo">
                <h1>Nzube<span>chukwu</span></h1>
            </div>
            <ul className="links">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
                
            </ul>
            <div className="Nav">
           <HiXMark  className="navClose" />
           <AiOutlineMenu onClick={viewSideMenu}  className="navOpen"/>
            </div>
        </header>
    );
};

export default Header;