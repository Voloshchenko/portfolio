import React from "react";
import WWloading from "../img/weWanderLoading.png";
import WWMenu from "../img/WWMenu.png";
import WanderlustImg from "../img/wanderlust.png";
import KBL from "../img/kbl.png";
import Florista from "../img/2florista.png";
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
                    <img src={WanderlustImg} className="one-img"/>
                </div>                
            </div>
            <div className="portfolio-block-left">
                <div className="img-block">
                    <img src={KBL} className="one-img"/>
                </div>
                <div className="text-block">
                    <h3>Kissed by Light</h3>
                    <p>Kissed by light is a photo studio website made on Wordpress. Main tasks were to create a responsive website with good loading time and high-quality photos, migrate old database to a new hosting, attach a new website to an existing domain while supporting all the previous links and not lose Google ranking in the process.</p>
                    <a href="http://kissedbylightphoto.com/" className="btn-reverse">Kissed by Light</a>  
                </div>                
            </div> 
            <div className="portfolio-block-right">
                <div className="text-block">
                <h3>2Florista</h3>
                        <p>Web app that allows people to plan there trips.
                            With Wanderlust you can create trips, add accomodations, transport, plan your budget and invite other users to join you. 
                            Created using Angular 4, Google map API and Firebase. </p>
                        <a href="http://2florista.com/" className="btn-reverse">2Florista</a>  
                        <a href="https://github.com/Voloshchenko/2floristo" className="btn-reverse">GitHub</a> 
                </div>
                <div className="img-block">
                    <img src={Florista} className="one-img"/>
                </div>                
            </div>                       
        </div>



    </div>
    );
}

export default PortfolioPage;
