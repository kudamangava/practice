import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
};
Button.propTypes = {
  onClick: PropTypes.any,
};
Button.propTypes = {
  children: PropTypes.string,
};
export default Button;
