import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

function Icons() {
  return (
    <div className="d-flex p-1">
      <IconContext.Provider value={{ size: "2em" }}>
        <div className="icons">
          <FaFacebookSquare />
        </div>
        <div className="icons">
          <FaInstagramSquare />
        </div>
        <div className="icons">
          <FaTwitterSquare />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Icons;
