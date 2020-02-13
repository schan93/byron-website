import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Home from './Home';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import Testimonials from './Testimonials';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './style.css';
import Background from '../assets/images/white-background.jpg'


const App = () => {

  return (
    <div className="background">
      <Container className="container">
        <NavBar />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/" component={Home} />
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
        </Container>
    </div>

  );
}

export default App;