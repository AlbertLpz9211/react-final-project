import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBarr from "./components/NavBarr";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import LoadingScreen from "./components/LoadingScreen";
import {useSelector} from 'react-redux'

//video 2 :  00:35:59



function App() {

  const isLoading =useSelector(state => state.isLoading)
  return (
    <div className="App">
      <HashRouter>
        <NavBarr />
        {isLoading && <LoadingScreen />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchases/:id" element={<Purchases />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
