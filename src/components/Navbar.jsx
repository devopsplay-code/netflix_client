import React from 'react';
import './Navbar.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear auth data like localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <h2 className="logo">NETFLIX</h2>
        {/* <a href="#webseries">Webseries</a>
        <a href="#movies">Movies</a> */}
      </div>
      <div className="nav-right" onClick={handleLogout} style={{ cursor: 'pointer' }}>
        <FaSignOutAlt className="logout-icon" />
      </div>
    </div>
  );
}

export default Navbar;
