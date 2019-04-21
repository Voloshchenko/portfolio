import React from "react";
import { NavLink } from "react-router-dom";
import PenguinImg from "../img/icons/Colored-Penguin.svg";
import ProjectsImg from "../img/icons/lightbulb-black.svg";
import HomeImg from "../img/icons/home.svg";
import TimeLineImg from "../img/icons/timeline-black.svg";
import ContactImg from "../img/icons/contact-black.svg";
import Line from "../img/icons/line.svg"

function Menu() {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-item nav-count-2">
        <p>Home</p>                           
      </NavLink>      
      <NavLink to="/about-me" className="nav-item nav-count-2">
        <p>About me</p>                           
      </NavLink>   
      <NavLink to="/portfolio" className="nav-item nav-count-2">
        <p>Portfolio</p>                           
      </NavLink>       
    </div>

  );
}
export default Menu;

    // <div className="sideMenu nav">
    //   <div>
    //     <NavLink to="/about-me" className="nav-item nav-count-1">
    //       <img src={PenguinImg}/>
    //       <div className="text">
    //         <p>About Me</p>
    //         <img src={Line}/>            
    //       </div>
    //     </NavLink>
    //     <NavLink to="/projects" className="nav-item nav-count-2">
    //     <img src={ProjectsImg}/>
    //     <div className="text">
    //         <p>Projects</p>
    //         <img src={Line}/>            
    //       </div>                 
    //     </NavLink>
    //     <NavLink to="/" className="nav-item nav-count-3">
    //     <img src={HomeImg}/>
    //     <div className="text">
    //         <p>Home</p>
    //         <img src={Line}/>            
    //       </div>                 
    //     </NavLink>
    //     <NavLink to="/education-and-work" className="nav-item nav-count-4">
    //     <img src={TimeLineImg}/> 
    //     <div className="text">
    //         <p>Work & Education</p>
    //         <img src={Line}/>            
    //       </div>        
    //     </NavLink>
    //     <NavLink to="/contact-me" className="nav-item nav-count-5">
    //       <img src={ContactImg}/>   
    //       <div className="text">
    //         <p>Get in Touch</p>
    //         <img src={Line}/>            
    //       </div>               
    //     </NavLink>
    //   </div>
    //   <div className="circle" />
    // </div>