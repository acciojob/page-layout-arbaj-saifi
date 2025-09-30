import React from "react";
import PropTypes from "prop-types";

export default function PageLayout({ header, footer, children }) {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}

PageLayout.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  header: null,
  footer: null,
};
