import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faLinkedin, faGithub);

const App = () => <PortfolioContainer />;

export default App;
