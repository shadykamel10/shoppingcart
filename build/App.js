import React from "react";
import "./App.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./Shoppingcontext";

// component
import Shop from "./Shop";
import { Container } from "react-bootstrap";
import Cart from "./Cart";
import NavBar from "./NavBar";
const App = () => {
  return (
    <div>
      <Container>
        <Container className="mt-4"></Container>
        <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </ShopContextProvider>
      </Container>
      </div>
  );
};
export default App;
