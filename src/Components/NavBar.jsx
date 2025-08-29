import React, { useState } from 'react';
import './NavBar.css';
import logo from "../assets/Frame-3.png";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { FaRegQuestionCircle, FaPhone } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { list } from '../Data/data';
import MyTask from '../Pages/MyTask';


const NavBar = () => {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(<MyTask />); // default content
  const [activeTab, setActiveTab] = useState("My Task");

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleActive = (item)=>{
    setActiveItem(item.component);
    setActiveTab(item.name);
  }

  return (
    <div>
      {/* Top Navbar */}
      <div className="mainDiv">
        {/* Logo section */}
        <div className="logoContainer">
          <div><img src={logo} alt="DexKor_Logo" className="logo" /></div>
          <div onClick={handleMenu} className="menuLogo">
            {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </div>
        </div>

        {/* Search + right section */}
        <div className="searchBoxContainer">
          <div className="acCont">AccountCare</div>
          <div className="contSearch">
            <div className="search">
              <span className="spn"><IoSearch /></span>
              <input type="text" className="inp" />
            </div>
          </div>
          <div className="sec_3">
            <span className="commonColor"><BsGrid3X3GapFill /></span>
            <span className="commonColor"><LuGraduationCap /></span>
            <span className="separation"></span>
            <span className="commonColor"><VscBell /></span>
            <span className="commonColor"><FaRegQuestionCircle /></span>
            <span className="commonColor"><FaPhone /></span>
            <span className="commonColor"><GrSettingsOption /></span>
            <span className="separation"></span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
              <span className="acName">S</span>
              <span style={{ fontSize: "0.9rem" }}>Shashank</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar + Content layout */}
      <div className="layout">
        {/* Sidebar */}
        <div className={`sidebar ${open ? "expanded" : "collapsed"}`}>
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => handleActive(item)}
                className={activeTab === item.name ? "active" : ""}
              >
                <span>{item.logo}</span>
                {open && item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className={`content ${open ? "with-sidebar" : "full"}`}>
          {activeItem}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
