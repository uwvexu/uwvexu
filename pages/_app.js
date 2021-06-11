import '../styles.scss';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UWAT VEX U Robotics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <script src="https://use.fontawesome.com/7e50edc346.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}