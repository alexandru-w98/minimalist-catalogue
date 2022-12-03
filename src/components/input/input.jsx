import React, { useEffect, useRef, useState } from "react";
import Icon from "../icon";
import styles from "./input.module.scss";
import hideIcon from "../../assets/icons/show-hide/hide.svg";
import showIcon from "../../assets/icons/show-hide/show.svg";
import { TYPES_DEFAULT } from "./constants/variants";
import PropTypes from "prop-types";

const Input = ({ className, type, icon, onClick, ...others }) => {
  const [inputIcon, setInputIcon] = useState(null);
  const [onIconClick, setOnIconClick] = useState(null);
  const [inputType, setInputType] = useState("text");
  const inputStyles = `${styles["input"]} ${className}`;

  const inputRef = useRef(null);

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
    <div className={styles["container"]}>
      <input
        ref={inputRef}
        type={inputType}
        className={inputStyles}
        {...others}
      />
      {icon && (
        <Icon
          src={inputIcon}
          className={styles["icon"]}
          onClick={onIconClick}
        />
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  className: "",
  type: "text",
  icon: null,
  onClick: null,
};
