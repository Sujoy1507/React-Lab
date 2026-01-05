import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Nav from "./components/Nav";
import Soap from "./pages/Soap";
import BodySpray from "./pages/BodySpray";
import Shampoo from "./pages/Shampoo";
import AllProduct from "./pages/AllProduct";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} >
                    <Route path="/product" element={<AllProduct/>}/>
                    <Route path="/product/soap" element={<Soap/>}/>
                    <Route path="/product/bodyspray" element={<BodySpray/>}/>
                    <Route path="/product/shampoo" element={<Shampoo/>}/>
                </Route>

            </Routes>

            <Footer/>
        </div>
    );
};

export default App;
