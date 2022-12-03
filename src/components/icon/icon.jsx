import React from "react";
import styles from "./icon.module.scss";
import PropTypes from "prop-types";

const Icon = ({ className, src, onClick }) => {
  const iconStyles = `${className} ${styles["icon-container"]}`;

  const cursorPointer = { cursor: "pointer" };

  return (
    <div className={iconStyles}>
      <img
        style={onClick ? cursorPointer : null}
        onClick={onClick}
        className={styles["icon-container__img"]}
        src={src}
      />
    </div>
  );
};

export default Icon;

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: "",
  src: "",
  onClick: null,
};
