import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () =>{
    return (
      <div className={'navbar'}>
          <ul>
              <li><Link className={'links'} to={'/'}>Home</Link></li>
              <li><Link className={'links'} to={'/books'}>Books</Link></li>
              <li><Link className={'links'} to={'/categories'}>Categories</Link></li>
          </ul>
      </div>
    );
}

export default Navbar;