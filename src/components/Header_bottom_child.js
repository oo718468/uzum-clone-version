import React from 'react'
import styled from 'styled-components';
import '../style.css';
import { Link } from 'react-router-dom';

function Header_bottom_child() {
  return (
      <>
      <div className='container'>
      <div className='child2'>
      <Link to="/Reactdom"><p className='child3'>Электроника</p></Link>
      <Link to="/appliances"><p  className='child3'>Бытовая техника</p></Link>
      <Link to="/Cloth"> <p  className='child3'>одежда</p></Link>
      <Link to="/shoes">    <p  className='child3'>Обувь</p></Link>
      <p>Акессуары</p>
      <p>Красота</p>
      <p>Здаровый</p>
      <p>товары для дома</p>
      <p>Строительство и ремонт</p>
      <p>Автотовары</p>
      <p>Детские товары</p>
      <p>Ешё <span></span></p>
      </div>
      </div>
      </>
  )
}

export default Header_bottom_child;
