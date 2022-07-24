import React, { useState } from "react";
import StateNav from "./StateNav";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import Container from "react-bootstrap/Container";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return (
        <Container>
          <Contact />
        </Container>
      );
    }
    if (currentPage === "Portfolio") {
      return <Projects />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <StateNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
