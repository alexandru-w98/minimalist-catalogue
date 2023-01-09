import React from "react";
import PropTypes from "prop-types";
import styles from "./spinner.module.scss";

const Spinner = ({ className }) => {
  const conntainerClasses = `${styles["spinner-container"]} ${className}`;

  return (
    <div className={conntainerClasses}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
};

export default Spinner;

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: "",
};
