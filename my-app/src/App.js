import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Evaluation from "./pages/Evaluation";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import TallyformEmbed from "./components/TallyformEmbed";
import heartChakraIMG from "./assets/images/free_throat_chakra.png";
import ChakraResultsButton from "./components/ChakraResultsButton";
import ChakraPolarChart from "./components/ChakraPolarChart";
import { NavLink } from "react-router-dom";

const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const App = () => {
  const [chakraResults, setChakraResults] = useState({
    root: 8,
    sacral: 5,
    solar: 5,
    heart: 5,
    throat: 5,
    thirdEye: 5,
    crown: 5,
  });

  const [chartData, setChartData] = useState(null); // Moved here

  const fetchResults = async () => {
    const range = "Sheet2!A1:Z"; // Adjust as needed

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();

    const latestRow = data.values[data.values.length - 1];
    const labels = [
      "Grounded",
      "Needs Met",
      "Express Emotions",
      "Creativity",
      "Control",
      "Boundaries",
      "Love",
      "Forgiveness",
      "Speaking Truth",
      "Expression",
      "Intuition",
      "Open Mind",
      "Purpose",
      "Spirituality",
    ];
    const values = latestRow.slice(2, 16).map(Number); // Convert string to numbers

    setChartData({
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
            "#FF6384",
            "#36A2EB",
          ],
        },
      ],
    });
  };

  return (
    <Router>
      <div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/evaluation"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Evaluation
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/evaluation" element={<Evaluation />} />
        </Routes>
      </div>
      <div className="App">
        <Header />
        <main>
          <TallyformEmbed />
          <ChakraResultsButton fetchResults={fetchResults} />
          {chartData && <ChakraPolarChart chartData={chartData} />}
          <div>
            <img
              src={heartChakraIMG}
              alt="Description"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
