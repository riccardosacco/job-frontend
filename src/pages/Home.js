import React from "react";

import Resume from "../components/Resume/";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";

import settings from "../settings";

const Home = () => {
  const { resume } = settings;
  return (
    <div className="home">
      <h3 className="mb-3">My resume</h3>
      <Resume resume={resume} />
      <Contact />
      <Copyright />
    </div>
  );
};

export default Home;
