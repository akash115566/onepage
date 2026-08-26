import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />

                           
             
             
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
