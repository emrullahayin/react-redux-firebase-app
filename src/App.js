import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
