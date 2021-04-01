import React from "react";
import Typed from "react-typed";

import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="main-info">
          <h1>Rupratna memorial english school</h1>
          <Typed
            className="typed-text"
            strings={["ARJUNDHARA", "7", "SHANISHARE", "JHAPA", "NEPAL"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <Link to="/love" className="btn-main-offer">
            Join Us
          </Link>
        </div>
      </div>

      <div>
        <h1>hello I am saugat shrestha</h1>
      </div>
    </>
  );
}

export default Header;
