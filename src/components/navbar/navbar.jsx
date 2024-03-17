<<<<<<< HEAD
import React from 'react';
import './navbar.css'
import { useNavigate , Link } from 'react-router-dom';




function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
 return (
    <nav className="navbar">
    <div className="navbar-brand">
        <h2>My App</h2>
    </div>
    <ul className="navbar-menu">
    <Link to="/Dashboard"><li><a href="#">Dashboard</a></li></Link>
    <Link to="/Chat"><li><a href="#">Chat</a></li></Link>
    <Link to="/Quiz"><li><a href="#">Quiz</a></li></Link>
    <Link to="/Summarysheet"><li><a href="#">Summarysheet</a></li></Link>
     <button onClick={handleLogout}>Logout</button>
    </ul>
</nav>
 );
}

export default Navbar;

=======
import React, { memo } from 'react';
import './navbar.css'; 

const Navbar = memo(function Navbar({ className = '' }) {
 return (
    <div className="root">
      <div className="frame4"></div>
      <div className="frame1">
        <a href="/" className="home">Home</a>
        <a href="/help" className="help">Help</a>
        <a href="/reservation" className="reservation">Reservation</a>
        <a href="/contactus" className="contactUs">Contact Us</a>
      </div>
      <div className="frame3">
        <div className="frame2">
          <a href="/login" className="signIn">Sign In</a>
        </div>
        <div className="frame32">
          <a href="/register" className="signUp">Sign Up</a>
        </div>
      </div>
    </div>
 );
});

export default Navbar;
>>>>>>> origin/master
