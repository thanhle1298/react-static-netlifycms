import React, { Component } from "react";
import { NavBar, Footer } from "./shared";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Capabilities from "./screens/Capabilities";
import Portfolio from "./screens/Portfolio";
import ContactUs from "./screens/ContactUs";
import WorkWithUs from "./screens/Workwithus";
import Services from "./screens/Servs";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/capabilities" component={Capabilities} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/workwithus" component={WorkWithUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path='/closedeal-store' component={() => window.location = 'https://closedeal.net'}/>
          <Route path='/holdsport-store' component={() => window.location = 'https://itunes.apple.com/us/app/sportmember/id1105341798?mt=8'}/>
          <Route path='/glamira' component={() => window.location = 'https://www.glamira.com/'}/>
          <Footer />
        </div>
    );
  }
}

export default App;
