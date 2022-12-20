import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";
import hideIcon from "./icons/hide.svg";
import showIcon from "./icons/show.svg";
import { TYPES_DEFAULT } from "./constants/variants";
import getVariant from "./utils/get-variants";

const Input = ({ className, type, icon, size, onClick, ...others }) => {
  const [inputIcon, setInputIcon] = useState(null);
  const [onIconClick, setOnIconClick] = useState(null);
  const [inputType, setInputType] = useState("text");

  const inputRef = useRef(null);
  const inputVariant = getVariant(others);

  const inputStyles = `${className} ${styles["container"]} ${
    size ? styles[`size--${size.toLowerCase()}`] : ""
  } ${inputVariant ? styles[`input--${inputVariant}`] : ""}`;

  const cursorPointer = { cursor: "pointer" };

  useEffect(() => {
    const typeDefault = TYPES_DEFAULT[type];

    if (typeDefault) {
      setInputType(typeDefault.INPUT_TYPE);

      if (icon === "default") {
        setInputIcon(typeDefault.ICON);
      }

      if (!onClick && type === "password") {
        setOnIconClick(onPasswordIconClick);
      }
    }
  }, []);

  const onPasswordIconClick = () => () => {
    const iType = inputRef.current.type;

    if (iType === "password") {
      setInputType("text");
      setInputIcon(showIcon);
    } else {
      setInputType("password");
      setInputIcon(hideIcon);
    }
  };

  return (
    <div className={inputStyles}>
      <input
        ref={inputRef}
        type={inputType}
        className={styles["input"]}
        {...others}
      />
      {icon && (
        <div className={styles["input__icon-container"]}>
          <img
            style={onIconClick ? cursorPointer : null}
            onClick={onIconClick}
            className={styles["icon-container__img"]}
            src={inputIcon}
          />
        </div>
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  className: "",
  type: "text",
  icon: null,
  size: "",
  onClick: null,
};
