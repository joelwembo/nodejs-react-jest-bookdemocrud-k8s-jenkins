import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddTutorial from "./components/AddBook";
import Tutorial from "./components/Book";
import TutorialsList from "./components/BooksList";

// ui components
import Header from "./components/Header";

function App() {
  return (
    <div>

      <Header />


      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={BooksList} />
          <Route exact path="/add" component={AddBook} />
          <Route path="/tutorials/:id" component={Book} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
