import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorInfo from "./components/ErrorInfo";
import MyFormPage from "./components/MyFormPage";
import ClippedDrawer from "./components/ClippedDrawer";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import FetchBlogPosts from "./components/FetchBlogPosts";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Navigation /> */}
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/" component={PersistentDrawerLeft} exact />

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/myform" component={MyFormPage} />
          <Route path="/clippeddrawer" component={ClippedDrawer} />
          <Route
            path="/persistentdrawerleft"
            component={PersistentDrawerLeft}
          />
          <Route path="/fetchblogposts" component={FetchBlogPosts} />
          <Route component={ErrorInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
