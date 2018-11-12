import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

// import './app.css'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// Components
import { NavBar, Footer } from "./containers/shared";
// import Home from "./containers/screens/Home";
// import AboutUs from "./containers/screens/AboutUs";
// import Capabilities from "./containers/screens/Capabilities";
// import Portfolio from "./containers/screens/Portfolio";
// import ContactUs from "./containers/screens/ContactUs";
// import WorkWithUs from "./containers/screens/Workwithus";
// import Services from "./containers/screens/Servs";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
)

export default hot(module)(App)
