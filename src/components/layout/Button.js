import React from "react";

function Button(props) {
  const { button, line } = props;
  let color = "";
  let borders = "none";
  if (button == "2") {
    color = "white";
    borders = "1px solid black";
  }
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color, border: borders }}
      >
        {line}
      </button>
    </div>
  );
}

export default Button;
