import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allmovie" element={<AllMovies />} />
                <Route path="/allmovie/:id" element={<Movie />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
