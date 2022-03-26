import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <About />
        <Services />
        <Skills />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
