import React from "react";
import Line from "../img/icons/line.svg"
import Photo from "../img/portfolio-photo.jpg"

function AboutMePage() {
  return (
    <div>
      <div className="title">
        <h2>About me</h2>
        <img src={Line}/>
      </div>
      <div className="aboutMe">
        <div className="profile">
          <img className="logo" src={Photo}/>
          <div>
          <h4>Olga Voloshchenko</h4>
          <h5>General information</h5>
            <h6>Age: 26 (22.05.1992)</h6>
            <h6>Current location: Moscow, Russia</h6> 
          <h5>Skills</h5>            
          <h6>Programming languages: HTML, CSS, JavaScript, TypeScript, JQuery.</h6>  
          <h6>Technical skills: Angular, Ionic, React, Bootstrap, Wordpress, Figma, GIT, DNS Manager, CDN, NodeJs, Firebase.</h6>  
          <h6>Other skills: Russian - native, English - advance, Norwegian Bokmål  - beginner.</h6>  
          <h6>Personal traits: collaboration, critical thinking, problem solving, enthusiasm.</h6>  
          <h6>Hobbies: traveling, neurobiology, languages, television, literature.</h6>  
          <h5>Contact information</h5>
            <h6>Email: <a>voloshchenko.o@hotmail.com</a></h6>
            <h6>Skype: Orange_pingvin</h6>  
          </div>        
        </div>
        <div className="timeline">

        </div>

      </div>
    </div>    
  );
}

export default AboutMePage;
