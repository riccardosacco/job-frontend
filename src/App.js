import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/admin/";

import client from "./contentful";

const App = () => {
  const [resume, setResume] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntry("4Ccf3kUT4T0PCjk0EtPOGf").then(data => {
      setResume(data.fields.resume);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <Home {...props} resume={resume} loading={loading} />
            )}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            component={props => (
              <Admin {...props} resume={resume} loading={loading} />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
