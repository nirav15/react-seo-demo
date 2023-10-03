import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>About page</title>
          <meta name="description" content="This is about page description." />
          <link rel="canonical" href="https://example.com/about-page" />
          <meta
            property="og:image"
            content="https://media.istockphoto.com/id/1144188586/photo/about-us-word-and-idea.jpg?s=612x612&w=0&k=20&c=uIxq86LADw2VZ55t3pfkSjkB7Q_nHABAl28DNDBCnPs="
          ></meta>

          <meta property="og:title" content="This is about page " />
          <meta
            property="og:description"
            content="decription page redirect home page "
          />
        </Helmet>
      </HelmetProvider> */}
      <div className="container">
        <h3>This is about page</h3>
        <Navbar />
      </div>
    </>
  );
}

export default About;
