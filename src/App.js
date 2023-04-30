import React from "react";
import './style.css';
import Header from "./components/Header";
import Header_bottom from "./components/Header_bottom";
import Swiper_one from "./components/Swiper_one";
import Header_bottom_child from "./components/Header_bottom_child";
import Humburger from "./components/Humburger";
import Cards from "./components/Cards";
import { Outlet, Route, Routes } from "react-router-dom";
import ReactDom from "./components/ReactDom";
import Home from "./components/Home";
import Appliances from "./components/Appliances";
import Cloth from "./components/Сloth";
import Shoes from "./components/Shoes";
import PhotoMenu from "./components/PhotoMenu";
import Register from "./fireBase/Register";
import Login1 from "./fireBase/Login";
import Footer_menu from "./components/Footer_menu";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="ReactDom" element={<ReactDom/>}/>
        <Route index element={< Home/>}/>
        <Route path="header" element={<Header />} />
        <Route path="Cards" element={<Cards />} />      
        <Route path="header_bottom" element={<Header_bottom />} />
        <Route path="Header_bottom_child" element={<Header_bottom_child />}/>
        <Route path="humburger" element={<Humburger />} />
        <Route path="swiper_one" element ={<Swiper_one />} />
        <Route path="Cards" element={<Cards />} />
        <Route path="appliances" element={<Appliances />}/>
        <Route path="Cloth" element={<Cloth />} />
        <Route path="shoes" element={<Shoes/>} />
        <Route path="PhotoMenu" element={<PhotoMenu/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="login1" element={<Login1 />} />
        <Route path="footer_menu" element={<Footer_menu />} />
      </Routes>
 
    </div>
  );
};

export default App;
