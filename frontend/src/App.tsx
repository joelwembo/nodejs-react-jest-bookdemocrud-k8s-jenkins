import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

// ui components
import Header from "./components/Header";

function App() {
  return (
    <div>

      <Header />
      

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
