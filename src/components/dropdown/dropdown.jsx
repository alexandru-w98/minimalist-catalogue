import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./dropdown.module.scss";

const Dropdown = ({ label, header, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(null);

  const onHeaderClicked = () => {
    setIsExpanded((prev) => !prev);
  };

  const onItemClicked = (item) => {
    setSelected(item);
    setIsExpanded(false);
  };

  const headerStyles = `${styles["content__header"]} ${
    isExpanded ? styles["expanded"] : ""
  }`;

  const listItems = items.map((item) => (
    <li
      key={`item-${item.id}`}
      className={styles["list__item"]}
      onClick={() => {
        onItemClicked(item);
      }}
    >
      {item.label}
    </li>
  ));

  const onDropdownBlured = () => {
    setIsExpanded(false);
  };

  return (
    <div className={styles["dropdown"]} onBlur={onDropdownBlured} tabIndex="0">
      {label && <div className={styles["dropdown__label"]}>{label}</div>}
      <div className={styles["dropdown__content"]}>
        <div className={headerStyles} onClick={onHeaderClicked}>
          <span className={styles["header__title"]}>
            {selected?.label ? selected.label : header}
          </span>
          <span className={styles["header__icon"]} />
        </div>
        {isExpanded && <ul className={styles["content__list"]}>{listItems}</ul>}
      </div>
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string,
  header: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

Dropdown.defaultProps = {
  label: "",
  header: "",
  items: [],
};
