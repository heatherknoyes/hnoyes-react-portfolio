import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav";
import CustomFooter from "./components/CustomFooter";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <CustomNav />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CustomFooter />
    </Router>
  );
}

export default App;
