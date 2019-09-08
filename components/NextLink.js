import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NextLink = ({ href, classes, children, external }) => {
  if (external) {
    return (
      <a href={href} className={classes} target="_blank">{children}</a>
    );
  } else {
    return (
      <Link href={href}>
        {/* eslint-disable-next-line */}
        <a className={classes}>{children}</a>
      </Link>
    );
  }
};

NextLink.defaultProps = {
  classes: '',
  external: false,
};

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

export default NextLink;
