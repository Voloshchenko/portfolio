import React from "react";
import Penguin from "../img/penguin.svg"
import Photo from "../img/portfolio-photo.jpg"
import CV from "../img/CV.pdf"

function HomePage() {
  return (
    <div id="home">
      <div className="home-card">
        <img className="logo" src={Photo}/>
        <div className="name-block">
              <h1>Olga Voloshchenko</h1>
              <h4>Junior front-end web developer</h4>
              <a href={CV} download className="btn">Download CV</a>
        </div>
        <div className="img-block">

        </div>        
      </div>
    </div>
  );
}

export default HomePage;
