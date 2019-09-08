import React from 'react';

import NextLink from '../components/NextLink';

const Error404 = () => (
    <section>
      <div>
        <h2>⚠️ Page Not Found ⚠️</h2>
        <p>Sorry, we couldn't find that page!</p>
        <NextLink href="/">return to homepage</NextLink>
      </div>
    </section>
);

export default Error404;
