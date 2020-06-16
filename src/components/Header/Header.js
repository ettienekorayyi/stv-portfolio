import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  
  return (
    <header>
      <div className="ui container">
        <div className="ui secondary menu">
          <a href="#main-menu" id="main-menu-toggle" className="menu-toggle" aria-label="Open main menu">
            <span className="sr-only">Open main menu</span>
            <span className="fa fa-bars" aria-hidden="true"></span>
          </a>
          <nav id="main-menu" className="right menu main-menu" aria-label="Main Menu">
          <a
              href="#main-menu-toggle"
              id="main-menu-close"
              className="menu-close"
              aria-label="Close Main Menu"
            >
              <span className="sr-only">Close Main Menu</span>
              <span className="fa fa-close" aria-hidden="true"></span>
            </a>
            <Link to="/" className="active item"  >Home</Link>
            <Link to="/aboutme" className="item" >About Me</Link>
            <Link to="/skills" className="item">Skills</Link>
            <a className="item">Portfolios</a>
            <a className="item">Contact</a>
          </nav>
          <a
            href="#main-menu-toggle"
            className="backdrop"
            tabIndex="-1"
            hidden
          ></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
