import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

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

export default App;
