import React from "react";
import "../../styles/About.css";

const AppAbout = () => {
  return (
    <section className="about">
      <h2>Github</h2>
      <p>
        A perfect app to search Github profiles. You can access all the data
        about certiain prifile.
      </p>

      <p>
        Version <span className="version">1.0.0</span>
      </p>
    </section>
  );
};

export default AppAbout;
