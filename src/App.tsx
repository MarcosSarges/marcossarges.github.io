import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import Home from "./pages/Home";

function About() {
  return <h2>About</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div className="main ajuste">
        <Menu
          links={[
            {
              name: "Home",
              to: "/"
            },
            {
              name: "Sobre",
              to: "/about/"
            },
            {
              name: "Github",
              to: "/about/"
            },
            {
              name: "Certificados",
              to: "/about/"
            }
          ]}
        />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
