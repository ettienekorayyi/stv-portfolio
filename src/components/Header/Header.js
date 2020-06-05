import React from "react";
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
              class="menu-close"
              aria-label="Close Main Menu"
            >
              <span class="sr-only">Close Main Menu</span>
              <span class="fa fa-close" aria-hidden="true"></span>
            </a>
            <a className="active item">Home</a>
            <a className="item">About Me</a>
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
