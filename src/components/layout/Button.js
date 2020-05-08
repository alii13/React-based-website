import React from "react";

function Button(props) {
  const { button, line, type } = props;
  let color = "";
  let borders = "none";
  if (button === "2") {
    color = "white";
    borders = "1px solid black";
  }
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color, border: borders }}
        type={type}
      >
        {line}
      </button>
    </div>
  );
}

export default Button;
