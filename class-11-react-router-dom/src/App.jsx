import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Course from "./pages/Course";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/course" element={<Course />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </div>
    );
};

export default App;
