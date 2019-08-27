import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MyCarousel from "./components/carousel"
import Blank from "./components/Blank";
import Grid from "./components/Grid";
import PrayerTimes from "./components/PrayerTimes";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Blank" />
          <Route path = "/Blank" component = { Blank } />
          <Route path = "/Grid" component = { Grid } />
        </Switch>
        <MyCarousel />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
