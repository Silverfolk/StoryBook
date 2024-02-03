// Navbar.js
import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ theme, backgroundColor, children }) => {
  const getNavbarClass = () => {
    let classes = "navbar";
    if (theme === "dark") {
      classes += " bg-dark border-bottom border-body";
    } else if (theme === "primary") {
      classes += " bg-primary";
    } else {
      classes += ` bg-body-${backgroundColor || 'tertiary'}`;
    }
    return classes;
  };

  return (
    <nav >
      {children}
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.oneOf(["dark", "primary"]),
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Navbar;
