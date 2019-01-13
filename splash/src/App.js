import React, { Component } from 'react';
import { Nav, NavItem, NavLink, UncontrolledCarousel, Button, Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';

import './style.css';

let items = [
  {
    src: './img/carousel1.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: './img/carousel2.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: './img/carousel3.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'nav-container my-4 ml-3',
    };
  }

  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({color: 'nav-container-colored scrolled  pt-3'})
    } else {
      this.setState({color: 'nav-container my-4 ml-3'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
  render() {
    return (
      <div className="splash">
        <Header />
        <div className="parallax">
          <img className="fish-logo d-block mx-auto" src="./img/splash-logo-fish.png" alt="fish logo" />
          <p className="parallax-title text-center">splash<span className="blink">!</span></p>
        </div>
        <Navigation color={this.state.color} />
        <AboutSplash />
        <Gallery />
        <AboutUs />
        <Donate />
        <Footer />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return(
        <div className={this.props.color}>
          <Nav className="ml-3">
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

class Donate extends Component {
  render() {
    return (
      <section className="donate">
        <div className="splash-container mx-auto my-5 py-5 w-75 mx-auto">
        <h1 className="about-header mb-3">Donate</h1>
          <p className="about-text">Help us bring equity to the world by donating. Here are different ways to donate:</p>
          <Container>
          ` <Row>
              <Col xs="6"><Button style={{backgroundColor: 'rgb(191, 148, 227)'}} size="lg" block>Start a fundraiser</Button></Col>
              <Col xs="6"><Button style={{backgroundColor: 'rgb(191, 148, 227)'}} size="lg" block>Shop our products</Button></Col>
            </Row>
            <br></br>
            <Row>
              <Col xs="6"><Button style={{backgroundColor: 'rgb(191, 148, 227)'}} size="lg" block>Donate Online</Button></Col>
              <Col xs="6"><Button style={{backgroundColor: 'rgb(191, 148, 227)'}} size="lg" block>Donate via email or phone</Button></Col>              
            </Row>
            <br></br>
            <Row>
              <Col xs="6"><Button style={{backgroundColor: 'rgb(191, 148, 227)'}} size="lg" block>Donate monthly</Button></Col>
              <Col xs="6"><Button style={{backgroundColor: 'rgb(191, 148, 227)'}} size="lg" block>Donate as an enterprise</Button></Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header className="splash-header">
      
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
            <h1 className="about-header mb-3">About Splash</h1>
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
        <div className="w-75 mx-auto"> 
          <UncontrolledCarousel className="my-5" items={items} />
        </div>
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
        <p className="footer-text text-center my-4">
          website created by jiyun yu & jion yi using 
          <img className="footer-logo" src="img/react-logo.png" alt="react logo" />
        </p>
      </section>
    );
  }
}

export default App;
