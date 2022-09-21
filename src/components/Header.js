import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

import { Link } from "react-router-dom";

function Header(){

  const headingStyle = {
    backgroundColor: 'white',
    color: 'turquoise',
    }
  return (
    <React.Fragment>
      <div style={headingStyle} id="header">
       <Link to="/"> <h1>Help Queue</h1></Link>
      <ul>
          <h4>Already a Member? <span></span>
         <Link to="/sign-in">Sign Up</Link>
         </h4> </ul>
      </div>
    </React.Fragment>
  );
}


export default Header;