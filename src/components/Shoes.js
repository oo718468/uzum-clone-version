import React from 'react';
import Header from './Header';
import Header_bottom from './Header_bottom';
import Header_bottom_child from './Header_bottom_child';
import Humburger from './Humburger';

function Shoes() {
  return (
    <>
     <Header />
    <Humburger />
    <Header_bottom />
    <Header_bottom_child />
 
    <div className='container'>
     <h1>bu oyoq kiyim menyusi</h1>
    </div>
    </>
  )
}

export default Shoes