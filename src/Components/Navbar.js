import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <h1>
            <i>Math Magicians</i>
            😎
          </h1>
        </Link>
      </div>

      <div className="right">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/calculator">
          <h2>Calculator</h2>
        </Link>
        <Link to="/quote">
          <h2>Quote</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
