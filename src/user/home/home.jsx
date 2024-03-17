// About.js
import React from 'react';
<<<<<<< HEAD
import './home.css';
=======
import './home.css'; // Import the CSS file for this page
>>>>>>> origin/master
import { Link } from 'react-router-dom';

const Home = () => {
 return (
  <>

    <div className="container">
      <div className="text-container">
        <h1>Bienvenue!</h1>
        <p>Your AI companion for personalized dining recommendations.</p>
      </div>
      <div className="button-container">
      <Link to="/login"><button>Se connecter</button></Link>
          <Link to="/register"><button>Inscrivez-vous</button></Link>
      </div>
    </div>
   
    </>
 );
};

export default Home;
