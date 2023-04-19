import React from "react";
import "./Button.css";

function Button({ text, onClick, outlined }) {
  return (
    <div
      className={outlined ? "outlined-btn21" : "btn21"}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;