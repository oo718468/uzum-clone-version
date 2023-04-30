import React from 'react';
import styled from 'styled-components';
import location from '../photo/location.svg';
import { Link } from 'react-router-dom';




function Header(props) {
  return (
    <>
    
        <Big_header_one>
            <Container>
                <Big_header>
                <Location>
               <img src={location} />
                <p>Город: <span>Ташкент</span></p>
                </Location>             
                <p style={{marginBottom:0,}}>Пункт Выдача</p>
                <Child4>
                <span>Доставим ваш заказ бесплатно — всего за 1 день!</span>
                </Child4>
                <p>Вопрос-узум</p>
                <p>Мои заказы</p>
                <Img>

                <p>русский</p>
                </Img>      
                </Big_header>
              
            </Container>         
        </Big_header_one>
    </>
  )
}


export default Header;


  const Big_header_one = styled.div`
  background-color:  #F4F5F5;
  
  `;



  const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  
  `;


  const Big_header = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    margin-bottom: 0px;
  }
 
   
   @media (max-width:960px) {
     p{display: none;}
     img{
      display: none;
     }
  }

   span{
    text-decoration: underline;
    color: #000;
    font-size: 16px;
    cursor: pointer;
   }
  p{
    font-size: 14px;
    color: #62656A;
  }
  `;


const Img = styled.div` `;



const Location =styled.div`
display: flex;
align-items: center;
  span{
    text-decoration: none;
  }
`;

const Child4 = styled.div`
  span{
    text-decoration: none;
    color: #62656A;
    font-size: 14px;
  }
  @media (max-width:950px) {
    span{
      display: block;
      text-align: center;
      text-decoration: none;

    }
    
  }
 
`