import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WelcomePage.css';
import welcomeImage from '../assets/welcome.jpg.jpg';

function WelcomePage() {
  return (
    <div style={styles.wrapper}>
      <Container style={styles.content} className="fade-in">
        <h1 style={styles.heading} className="slide-down pulse-heading gradient-text">JINU</h1>
        <p style={styles.subheading} className="slide-up">Explore our features and get started today!</p>
        <Link to="/home">
          <Button variant="outline-light" size="lg" className="hover-button">
            Get Started
          </Button>
        </Link>
      </Container>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundImage: `url(${welcomeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    paddingTop: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
};

export default WelcomePage;
