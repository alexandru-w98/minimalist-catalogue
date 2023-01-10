import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./navbar.module.scss";
import menuIcon from "./icons/burger_menu.svg";
import closeIcon from "./icons/close.svg";
import { Link } from "react-router-dom";

const Navbar = ({ links, isBurgerMenu }) => {
  const [selected, setSelected] = useState(null);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isAnimatingMenu, setIsAnimatingMenu] = useState(false);

  const leftMargin = { marginLeft: "auto" };

  const onLinkClicked = (index) => {
    setSelected(index);
  };

  const allLinks = [...links.leftLinks, ...links.rightLinks];

  const main = allLinks.map((link, index) => {
    return (
      <li
        className={styles["nav__link"]}
        key={link.id}
        style={
          !isBurgerMenu && index === allLinks.length - links.rightLinks?.length
            ? leftMargin
            : null
        }
        onClick={() => {
          onLinkClicked(index);
        }}
      >
        <Link
          className={index === selected ? styles["nav__link--selected"] : ""}
          to={link.href}
        >
          {link.label}
        </Link>
      </li>
    );
  });

  const onMenuOpened = () => {
    setIsMenuExpanded(true);
  };

  const navClasses = `${styles["nav"]} ${
    isMenuExpanded ? styles["expanded"] : ""
  }`;

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function sleep(ms) {
    await timeout(ms);
  }

  const onMenuClosed = async () => {
    setIsAnimatingMenu(true);
    await sleep(100);
    setIsMenuExpanded(false);
    setIsAnimatingMenu(false);
  };

  return (
    <nav className={navClasses}>
      {isBurgerMenu && (
        <div className={styles["logo-container"]} onClick={onMenuOpened}>
          <img className={styles["logo"]} src={menuIcon} />
        </div>
      )}
      {(!isBurgerMenu || isMenuExpanded) && (
        <div
          className={`${styles["expanded-container"]} ${
            isAnimatingMenu ? styles["closing"] : ""
          }`}
        >
          {isMenuExpanded && (
            <div className={styles["icon-container"]} onClick={onMenuClosed}>
              <img className={styles["icon"]} src={closeIcon} />
            </div>
          )}
          <ul className={styles["nav__links"]}>{main}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  links: PropTypes.object,
  isBurgerMenu: PropTypes.bool,
};

Navbar.defaultProps = {
  links: {},
  isBurgerMenu: false,
};
