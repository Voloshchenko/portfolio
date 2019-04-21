import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutMePage from "./pages/AboutMePage";
import EducationAndWorkPage from "./pages/EducationAndWorkPage";
import ContactMePage from "./pages/ContactMePage";
import Menu from "./components/Menu";

var config = {
    apiKey: "AIzaSyDBNUBlV44NuRIwPQUGKmvXIPAw_X0T_JY",
    authDomain: "portfolio-99b68.firebaseapp.com",
    databaseURL: "https://portfolio-99b68.firebaseio.com",
    projectId: "portfolio-99b68",
    storageBucket: "portfolio-99b68.appspot.com",
    messagingSenderId: "225794336620"
  };
  
firebase.initializeApp(config)

function App(){
  return (
    <div className="block">
      <div>
        <Menu />
      </div>
      <div className="right">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/about-me" component={AboutMePage} />
        <Route
          exact
          path="/education-and-work"
          component={EducationAndWorkPage}
        />
        <Route exact path="/contact-me" component={ContactMePage} />
      </div>
    </div>
  );
}

ReactDOM.render(  
<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
