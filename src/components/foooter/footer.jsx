import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = ({ links, subText, className }) => {
  const footerLinks = links.map((link, index) => (
    <li
      key={link.id}
      className={index !== links.length - 1 ? styles["delimiter--right"] : ""}
    >
      <Link className={styles["footer__links__item"]} to={link.href}>
        {link.label}
      </Link>
    </li>
  ));

  return (
    <div className={`${styles["footer"]} ${className}`}>
      <div className={styles["footer__content"]}>
        <ul className={styles["footer__links"]}>{footerLinks}</ul>
        <span className={styles["footer__subtext"]}>{subText}</span>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  subText: PropTypes.string,
  className: PropTypes.string,
};

Footer.defaultProps = {
  links: [],
  subText: "",
  className: "",
};
