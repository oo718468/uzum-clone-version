import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function Humburger() {
  const [showNavExternal2, setShowNavExternal2] = useState(false);
  
 

  return (
    <>
    
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal2(!showNavExternal2)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer> 
     

      <MDBCollapse show={showNavExternal2} >
        <div className='mini_humburger'>
        <div className='bg-light shadow-3 p-4 '>
          <MDBBtn block className='border-bottom m-0' color='link'>
            <Link to="/">Home</Link>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          <Link to="/cloth">одежда</Link>
            
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          <Link to="/appliances">bitovoy texnika</Link>
           
          </MDBBtn>
        </div>
        </div>
      </MDBCollapse>
    
    
    </>
  );
}