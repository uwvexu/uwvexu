import React from 'react';
import Link from 'next/link';

const NextLink = ({ href, children, external }) => {
  if (external) {
    return (
      <a href={href} target="_blank">{children}</a>
    );
  }
  else {
    return (
      <Link href={href}>
        {/* eslint-disable-next-line */}
        <a className={classes}>{children}</a>
      </Link>
    );
  }
};

export default NextLink;
