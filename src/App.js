import React from "react";

// Components
import Home from './pages/Home';
import Nav from './components/Nav';
import GameDetail from "./components/GameDetail";

// Styles
import GlobalStyles from "./components/GlobalStyles";

// Routes
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>


    </div>
  );
}

export default App;
