import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <span className="navbar-brand mb-0 h1">Awakaza Delivery</span>
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/payments">Payments</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/namelist">Profile</Link></li>
      </ul >
    </nav >
  );
};

export default NavBar;