import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" exact component={AboutMe} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
