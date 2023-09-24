// header
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header_items">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/history">History</Link>
      </div>
    </div>
  );
}

export default Header;