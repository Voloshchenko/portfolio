import React from "react";
import WWloading from "../img/weWanderLoading.png";
import WWMenu from "../img/WWMenu.png";
import CardPage from "../img/card-page.png";
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
            <div className="portfolio-block">
                <div className="img-block">
                    <img src={WWloading} className="double-img"/>
                    <img src={WWMenu} className="double-img"/>
                    <img src={CardPage} className="double-img"/>                    
                </div>
                <div className="text-block">
                    <h3>WeWander</h3>
                    <p>
                    WeWander is a city discovery app which helps users discover attractions, restaurants and venues in a faster, more convenient way. By using a Tinder-like swipe mechanism, the user gets information about places of interest from a deck of cards pulled from our library. You can swipe right to save place to your offline map or left to never see it again. You can filter new cards or save cards by distance or type of activity to see the most relevant restaurants, attractions or sites of special interest nearby. With WeWander, you no longer need to browse through hundreds of pages to find what you’re looking for.
WeWander was built with Ionic 2, Google Maps API, Native APIs, Third Party Libraries, GIT.
                    </p>
                    <a href="https://voloshchenko.github.io/WeWander-landing/" className="btn-reverse">Promo website</a>  
                    <a href="https://github.com/Voloshchenko/WeWander" className="btn-reverse">GitHub</a>   
                </div>                
            </div>
            <div className="portfolio-block">
                <div className="text-block">
                <h3>WANDERLUST</h3>
                        <p>Wanderlust is an online travel assistant that helps you plan your dream trip. Create your trip and add the cities you want to visit. Wanderlust will let you know if you don't have transport to get from one city to another or a place to stay. It also allows you to keep track of your budget and save interesting information and useful tips in the notes section. You can organize a group trip by inviting your friends. In group mode, all of you have access to the details of the trip, so everyone can add, change or delete them and you can also discuss your travel plans right there on the trip page with our instant messenger. Created using Angular 4, Google map API and Firebase. </p>
                        <a href="https://wanderlustapp-822a0.firebaseapp.com" className="btn-reverse">Wanderlust</a>  
                        <a href="https://github.com/Voloshchenko/wanderlust" className="btn-reverse">GitHub</a> 
                </div>
                <div className="img-block">
                    <img src={WanderlustImg} className="one-img"/>
                </div>                
            </div>
            <div className="portfolio-block">
                <div className="img-block">
                    <img src={KBL} className="one-img"/>
                </div>
                <div className="text-block">
                    <h3>Kissed by Light</h3>
                    <p>Kissed by light is a photo studio website made on Wordpress. Main tasks were to create a responsive website with good loading time and high-quality photos, migrate old database to a new hosting, attach a new website to an existing domain while supporting all the previous links and not lose Google ranking in the process.</p>
                    <a href="http://kissedbylightphoto.com/" className="btn-reverse">Kissed by Light</a>  
                </div>                
            </div> 
            <div className="portfolio-block">
                <div className="text-block">
                <h3>2Florista</h3>
                        <p>2Florista is a one-page business card website built for a floral design studio. Two main goals of the assignment were Main tasks were to showcase the company and its services to the customers and create a convenient way to get in touch. In collaboration with a web designer, we created a segment for main services, that allowed users to go through the slideshow for each category and enjoy an embedded YouTube video. In order to create an easy way of communication with customers, I wrote a built-in contact form powered by PHP.</p>
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
