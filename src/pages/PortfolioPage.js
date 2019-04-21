import React from "react";
import WWloading from "../img/weWanderLoading.png"
import WWMenu from "../img/WWMenu.png"
import Line from "../img/icons/line.svg"

function PortfolioPage() {
  return (
    <div>
        <div className="title">
            <h2>Portfolio</h2>
            <img src={Line}/>
        </div>
        <div className="portfolio">
            <div className="portfolio-block-left">
                <div className="img-block">
                    <img src={WWloading} className="double-img"/>
                    <img src={WWMenu} className="double-img"/>
                </div>
                <div className="text-block">
                    <h3>WeWander</h3>
                    <p>An ionic app for travelers. Allows traveller to chose destinations, 
                        swipe through offered location from JSON library, fillter them based on there current 
                        location or city center, saved locations that they liked and show them conviniently on the 
                        map as well as track there current location.</p>
                    <a href="" className="btn-reverse">Play Store</a>  
                    <a href="" className="btn-reverse">GitHub</a>   
                </div>                
            </div>
            <div className="portfolio-block-right">
                <div className="text-block">
                <h3>WANDERLUST</h3>
                        <p>Web app that allows people to plan there trips.
                            With Wanderlust you can create trips, add accomodations, transport, plan your budget and invite other users to join you. 
                            Created using Angular 4, Google map API and Firebase. </p>
                        <a href="https://wanderlustapp-822a0.firebaseapp.com" className="btn-reverse">Wanderlust</a>  
                        <a href="https://github.com/Voloshchenko/wanderlust" className="btn-reverse">GitHub</a> 
                </div>
                <div className="img-block">
                    <img src={WWloading} className="double-img"/>
                    <img src={WWMenu} className="double-img"/>
                </div>                
            </div>
        </div>



    </div>
    );
}

export default PortfolioPage;
