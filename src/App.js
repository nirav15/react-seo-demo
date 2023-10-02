import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./components/About";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
