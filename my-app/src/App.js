import React from "react";
import TypeformEmbed from "./components/TypeformEmbed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="App">
        <Header />
        <main>
          <TypeformEmbed />
          <Results />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
