import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
          <meta name="description" content="This is Home page description." />
          <meta
            property="og:image"
            content="https://play-lh.googleusercontent.com/J7Qt8buwxAHg2Ox3XiVu1z8-yrWIqQ3L-nKDaUfax2nbQZJtUdsKb_3E6UsWtxOVaw"
          ></meta>
          <link rel="canonical" href="https://example.com/home-page" />

          <meta property="og:title" content="This is Home page " />
          <meta
            property="og:description"
            content="home page redirect to main page"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container">
        <h3>This is Home page</h3>
        <Navbar />
      </div>
    </>
  );
}

export default Home;
