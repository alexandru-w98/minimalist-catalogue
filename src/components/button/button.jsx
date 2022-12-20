import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({ children, className, size, ...props }) => {
  const buttonClasses = `${className} ${styles["btn"]} ${
    size ? styles[`size--${size.toLowerCase()}`] : ""
  }`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: "",
  size: "",
};
