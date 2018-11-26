import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';


const Home = () => (
  <div className="main-container">
    <h1>HOME</h1>
    <button type="button"><Link to="/counter/">counter</Link></button>
  </div>
);

export default Home;
