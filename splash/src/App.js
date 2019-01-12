import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.svg';

import './style.css';

class App extends Component {
  render() {
    return (
      <div className="Splash">
        <div className="parallax"></div>
        <Header />
        <Navigation />
        <AboutSplash />
        <Gallery />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return(
        <div className="nav-container mx-auto py-5">
          <Nav>
            <NavItem>
              <NavLink href="#about-splash">About Splash</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Donate</NavLink>
            </NavItem>
          </Nav> 
        </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="Splash-header">

      </header>
    );
  }
}

class AboutSplash extends Component {
  render() {
    return (
      <section id="about-splash">
        <div className="splash-container mx-auto my-5 py-5">
          <div className="w-75 mx-auto">
            <h1 className="about-header">About Splash</h1>
            <p className="about-text">
              Splash is a mobile app game that is designed to help end the water crisis and promote a healthier lifestyle for users through improving their water intake.
            <br></br>
              The game’s goal is to take care of fish by maintaining the tank water’s purity and unlock new fish characters during this process.
          </p>
            <p className="about-text">
              With water comes life. It is the main constituent of the Earth’s surface and in most living organisms.  However, almost 844 million people live without access to safe water.
              This means that nearly 1 in 9 individuals are unable to obtain this necessity (World Health Organization 2017).
              Distance from these developing countries often makes us oblivious to the notion that water is a crisis for many.
              On the other hand, even those with access to water do not consume enough water for their health needs. A 2018 study states that 80% Americans drink less water than the recommended daily amount (Quench USA).
              Splash strives to tackle both of these problems by creating a fun and engaging experience. Its gameplay encourages users to drink water while giving support to the cause through donations.
              Therefore, Splash aims to bring equity and empower its users and the world as a whole.
          </p>
          </div>
        </div>
      </section>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <section id="gallery">

      </section>
    );
  }
}

class AboutUs extends Component {
  render() {
    return (
      <section id="about-us">
        <div className="splash-container mx-auto my-5 py-5">
          <div className="w-75 mx-auto">
            <h1 className="about-header">About Us</h1>
            <p className="about-text">
              Splash is a mobile app game that is designed to help end the water crisis and promote a healthier lifestyle for users through improving their water intake.
            <br></br>
              The game’s goal is to take care of fish by maintaining the tank water’s purity and unlock new fish characters during this process.
          </p>
            <p className="about-text">
              With water comes life. It is the main constituent of the Earth’s surface and in most living organisms.  However, almost 844 million people live without access to safe water.
              This means that nearly 1 in 9 individuals are unable to obtain this necessity (World Health Organization 2017).
              Distance from these developing countries often makes us oblivious to the notion that water is a crisis for many.
              On the other hand, even those with access to water do not consume enough water for their health needs. A 2018 study states that 80% Americans drink less water than the recommended daily amount (Quench USA).
              Splash strives to tackle both of these problems by creating a fun and engaging experience. Its gameplay encourages users to drink water while giving support to the cause through donations.
              Therefore, Splash aims to bring equity and empower its users and the world as a whole.
          </p>
          </div>
        </div>
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <p className="text-center my-4">
          website created by jiyun yu & jion yi using 
          <img className="footer-logo" src="img/react-logo.png" alt="react logo" />
        </p>
      </section>
    );
  }
}

export default App;
