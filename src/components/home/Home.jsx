// Third Party Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Project Imports
import bg from '../../images/abstract-min.jpg';
import './home.css';

function Home() {
  return (
    <div
      className="home-page"
      style={{
        background: `url("${bg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Link to="/signup/creator" className="btn btn-creator">
        Are you a creator
      </Link>
      <Link to="/signup/user" className="btn btn-user">
        Are you a user
      </Link>
    </div>
  );
}

export default Home;
