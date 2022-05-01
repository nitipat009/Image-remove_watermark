import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Model1 from "./pages/Model1";
import Model2 from "./pages/Model2";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Model1" element={<Model1/>}/>
        <Route path="/Model2" element={<Model2/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
      </Routes>
    </>
  );
}

export default App;
