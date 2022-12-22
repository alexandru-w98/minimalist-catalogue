import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.scss";

const Checkbox = (props, ref) => {
  // type is there only to avoid the inputType being changed
  // eslint-disable-next-line
  const { className, type, checked, id, label, onChange, ...others } = props;

  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const checkboxClasses = `${className} ${styles["checkbox-container"]}`;

  //need 2 way binding
  const onCheckboxClicked = () => {
    setIsChecked((prev) => !prev);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div className={checkboxClasses}>
      <div className={styles["checkbox"]} onClick={onCheckboxClicked}>
        <input
          ref={ref}
          className={styles["checkbox__input"]}
          type="checkbox"
          checked={isChecked}
          id={id}
          {...others}
        />
        <span className={styles["checkbox__checkmark"]} aria-hidden="true" />
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
