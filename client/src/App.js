import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
