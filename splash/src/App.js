import React, { Component } from 'react';
import logo from './logo.svg';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="Splash">
        <Header />
        <AboutSplash />
        <Gallery />
        <AboutUs />
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

      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <p className="text-center my-4">
          website created by jiyun yu using 
          <img src="img/react-logo.png" alt="react logo" />
        </p>
      </section>
    );
  }
}

export default App;
