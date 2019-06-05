import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/About') 
  //   }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        
        <a href="/" className="brand-Logo">Poke'Time</a>
        <ul className="right ">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/Echosystem">Echosystem</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        
      </div>
    </nav>
  );
};
//wrapping commponet with routing 
// *Higher Order Components
export default withRouter(Navbar);
