import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1></h1>
          </div>
          <h2>E DOC - "We care for your health"</h2>
          <p>
            Make doctor appointments through us.

          </p>
          <NavLink to="/">Make An Appointment</NavLink>
        </div>
      </div>
    </>
  );
};

export default Error404;
