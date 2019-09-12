import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import "../main.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>UW VEXU Robotics</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
