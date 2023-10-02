import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";
import image from "../images/1689367378166.jpeg"

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
          <meta name="description" content="This is Home page description." />
          <meta
            property="og:image"
            content={image}
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
