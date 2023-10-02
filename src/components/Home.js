import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
          <meta
            property="og:image"
            content="https://fastly.picsum.photos/id/466/300/200.jpg?hmac=ynZ9L9zmxdc_vQ-UM_FDRX4tUF-5Ogg8apdMbX1_8sU"
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
