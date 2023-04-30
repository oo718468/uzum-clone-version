import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Header_bottom from './Header_bottom';
import Header_bottom_child from './Header_bottom_child';
import Humburger from './Humburger';
import Swiper_one from './Swiper_one';
import Cards from './Cards';
import Footer_menu from './Footer_menu';

function Home() {
  return (
   <>
  
      <Header/>
      <Header_bottom />
      <Header_bottom_child />
      <Humburger />
      <Swiper_one />     
      <Cards />
      <Footer_menu />
          
          
      </>      
  )
}

export default Home;