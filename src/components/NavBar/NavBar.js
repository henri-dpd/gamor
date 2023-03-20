
import './NavBar.css';
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from '../../lib/customHooks';

function NavBar() {
  const { user, authenticated } = useUser();
  
  return (
    <nav className='NavBar'>
      <ul>
        <li>
          <Link className='HomeIcon' to="/">Home</Link>
        </li>
        <li>
          <Link to="/Stream">Stream</Link>
        </li>
        <li>
          <Link to="/Party">Party</Link>
        </li>
        <li>
          <Link to="/Premium">Premium</Link>
        </li>
      </ul>
      <span>Gamor</span>
      <div className='Auth'>
        {(user || authenticated) ? <Link className='SignButton' to="/Logout">Sign out</Link> : <Link className='SignButton' to="/Login">Sign in</Link> }        
        <Link className='CreateButton' to="/Register">Create Account</Link>
      </div>
    </nav>
  );
}

export default NavBar;