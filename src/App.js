import React from "react";
import "./app.scss";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import BackToTop from "./components/BackToTop";
import OverlayMenu from "./components/OverlayMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <OverlayMenu />
      <BackToTop />
    </BrowserRouter>
  );
};

export default App;
