import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Courses from "./pages/courses/Courses";
import Footer from "./pages/footer/Footer";
import { ThemeContext } from "./contexts/ThemeContext";
function App() {
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
      <Footer />
    </>
  );
}

export default App;
