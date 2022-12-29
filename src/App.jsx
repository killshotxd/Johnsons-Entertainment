import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AdultsAppre from "./components/AdultsApprehension/AdultsAppre";
import ChildrenBook from "./components/ChildrenBook/ChildrenBook";
import Novel from "./components/Novel/Novel";
import Spook from "./components/SpookMook/Spook";
import Header from "./components/Header/Header";
import About from "./components/About/About";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AdultApprehension" element={<AdultsAppre />}></Route>
        <Route path="/ChildrenBook" element={<ChildrenBook />}></Route>
        <Route path="/Novels" element={<Novel />}></Route>
        <Route path="/SpookMook" element={<Spook />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
