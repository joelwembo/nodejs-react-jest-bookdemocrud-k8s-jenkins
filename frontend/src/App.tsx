
// react frontend application for the book store demo
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddBook from "./components/AddBook";
import Book from "./components/Book";
import BooksList from "./components/BooksList";

// ui components
import Header from "./components/Header";

function App() {
  return (
    <div>

      <Header />


      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/Books"]} component={BooksList} />
          <Route exact path="/add" component={AddBook} />
          <Route path="/Books/:id" component={Book} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
