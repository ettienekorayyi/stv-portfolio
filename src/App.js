import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" exact component={AboutMe} />
        <Route path="/skills" exact component={Skills} />
      </BrowserRouter>
    </div>
  );
}

export default App;
