import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav";

function App() {
  return (
    <Router>
      <CustomNav />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
