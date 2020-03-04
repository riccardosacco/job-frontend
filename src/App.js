import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/admin/";

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  </>
);

export default App;
