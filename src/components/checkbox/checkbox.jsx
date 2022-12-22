import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.scss";
import tickIcon from "./icons/tick.png";

const Checkbox = (props, ref) => {
  // type is there only to avoid the inputType being changed
  // eslint-disable-next-line
  const { className, type, checked, id, label, icon, ...others } = props;

  const defaultChecked = checked ? checked : false;
  const defaultIcon = icon ? icon : tickIcon;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const checkboxClasses = `${className} ${styles["checkbox-container"]}`;

  const onCheckboxClicked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={checkboxClasses}>
      <div className={styles["checkbox"]} onClick={onCheckboxClicked}>
        <span className={styles["checkbox__checkmark"]} aria-hidden="true">
          {isChecked && (
            <img className={styles["checkmark__icon"]} src={defaultIcon} />
          )}
        </span>
        <input
          ref={ref}
          className={styles["checkbox__input"]}
          type="checkbox"
          checked={isChecked}
          id={id}
          {...others}
        />
      </div>
      <label className={styles["checkbox__label"]} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Checkbox);

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: "",
};
