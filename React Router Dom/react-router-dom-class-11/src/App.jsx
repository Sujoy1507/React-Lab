import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import Women from "./pages/Women";
import Men from "./pages/Men";
import AboutAny from "./pages/AboutAny";
import Course from "./pages/Course";
import Cohort2 from "./pages/Cohort2";
import AnyCourse from "./pages/AnyCourse";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <div>
            <Nav />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/course" element={<Course />} />

                {/* Nested Routes */}
                <Route path="/product/men" element={<Men />} />
                <Route path="/product/women" element={<Women />} />
                <Route path="/course/cohort2" element={<Cohort2 />} />

                {/* Dynamic Routes */}
                <Route path="/about/:id" element={<AboutAny />} />
                <Route path="/course/:id" element={<AnyCourse />} />
                {/* Dynamic Nested Routes */}
                <Route path="/course/:id/detail" element={<CourseDetail />} />

                {/* Not Found Page */}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;
