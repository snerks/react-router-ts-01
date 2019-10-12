import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorInfo from "./components/ErrorInfo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={ErrorInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
