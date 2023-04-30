import React from 'react';
import styled from 'styled-components';
import Logo1 from "../photo/uzumLogo.svg";
import search from "../photo/searchLogo.svg";
import person from "../photo/personLogo.svg";
import like from "../photo/likeLogo.svg";
import korzina1 from "../photo/korzinaLogo.svg";
import katalog1 from "../photo/katalogImg.svg"
import { Link } from 'react-router-dom';

function Header_bottom() {
  return (
    <Navbar>
    <Container> 
    <Header_logo>

        <Logo>
     <Link to="/"><img src={Logo1}/></Link> 
        </Logo>

        <Katlog>
          <img src={katalog1} />
          <p>Каталог</p>   
        </Katlog>

        <Header_input>
          <input type='text' placeholder='Искать товары и категории' />
          <Seacrch_img>
          <img src={search} />
          </Seacrch_img>       
        </Header_input>

        <Header_right_about>
            <Login>
            <Link to="/Register">   <img src={person} /></Link> 
        <Link to="/Register"><p>войти</p></Link>  
            </Login>

            <Save>
            <img src={like} />
              <p>избранной</p>
            </Save>

            <Korzina>
            <img src={korzina1} />
            <p>korzina</p>
            </Korzina>
        </Header_right_about>
    </Header_logo>
    <Mini_input>
    <img src={search} />
    <input  type={Text} placeholder='Искат товары и категории'/>
    </Mini_input>  
    </Container>
    </Navbar>
  )
}

export default Header_bottom;

const Mini_input = styled.div`
  display:none;
  @media (max-width:960px) {
    width: 95%;
    background: rgb(244, 245, 245);
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 40px;
    border-radius: 9px;
    input{
      width: 90%;
      border: none;
      outline: none;
      background-color: rgb(244, 245, 245);
    }
  }
   
`;

const Navbar = styled.div`
@media (max-width:960px) {
  padding: 5px 10px;
}
`;


const Container = styled.div`
max-width: 1240px;
margin:0 auto;

`;


const Header_input = styled.div`
    display: flex;
    align-items: center;
    width: 496px;
    height: 40px;
    border: 1px solid #62656A;
    border-radius: 5px;
    @media (max-width:960px) {
      display: none;
     
    }
   
    input{
      width: 440px;
    height: 30px;
    border: none;
    outline: none;
    padding: 5px;
    }
`;

const Seacrch_img = styled.div`
display: flex;
align-items: center;
width: 15%;
justify-content: center;
height: 40px;
background-color: #76797F0D;
`;

const Header_logo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 14px 0;
@media (max-width:960px){
  padding: 15px 18px;
    margin-top: 15px;
}
`;

const Header_right_about = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;


const Logo = styled.div``;


const Katlog = styled.div`
width: 120px;
height: 40px;
background-color: #3131C41A;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
p{
  margin-bottom: 0px;
}
@media (max-width:960px) {
      display: none;
    }
 p{
  font-size: 14px;
  color: #3333CC;
  font-weight: 500;
  padding: 5px;
 }
`;



const Korzina =styled.div`
display: flex;
align-items: center;
gap: 4px;
font-size: 14px;
p{
  margin-bottom: 0px;
}

@media (max-width:1200px){
      p{
        display: none;
      }
 }
`;



const Save = styled.div`
display: flex;
align-items: center;
gap: 4px;
font-size: 14px;
p{
  margin-bottom: 0px;
}

@media (max-width:1200px){
      p{
        display: none;
      }
 }
`;



const Login = styled.div`
display: flex;
align-items: center;
gap: 4px;
font-size: 14px;
p{
  margin-bottom: 0px;
}
 @media (max-width:1200px){
      p{
        display: none;
      }
 }
`;

