import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route to="/" component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
