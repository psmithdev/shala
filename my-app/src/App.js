import React, { useState, useEffect } from "react";
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
import axios from "axios";
import ChakraRadarChart from "./components/ChakraRadarChart";
import calculateChakraResults from "./utils/calculateChakraResults";

const App = () => {
  const [chakraResults, setChakraResults] = useState({
    root: 0,
    sacral: 0,
    solar: 0,
    heart: 0,
    throat: 0,
    thirdEye: 0,
    crown: 0,
  });

  const FORM_ID = "WqXKx61Y";
  const API_KEY =
    "X";

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await axios.get(
          `https://api.typeform.com/forms/${FORM_ID}/responses`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        const responses = response.data.items;
        const chakraData = calculateChakraResults(responses);
        setChakraResults(chakraData);
      } catch (error) {
        console.error("Error fetching Typeform responses:", error);
      }
    };

    fetchResponses();
  }, []);

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
