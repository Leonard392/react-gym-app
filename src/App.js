import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./front/views/home";
import Navbar from "./front/components/navbar";
import Footer from "./front/components/footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
