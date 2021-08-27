import React from "react";
import ThemeSlider from "./components/ThemeSlider";

// Components
import Home from './pages/Home';
import Nav from './components/Nav';

// Styles
import GlobalStyles from "./components/GlobalStyles";

// Routes
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeSlider />
      <Nav />
      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>


    </div>
  );
}

export default App;
