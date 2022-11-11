import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import { NavLink } from 'react-router-dom';

import { ShoppingCart } from 'phosphor-react';

export function NavBar(){
  return (
    <Navbar sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button 
          className='bg-white border-white' 
          style={{
            width: '3rem',
            height: '3rem',
            position: 'relative'
          }}
        >
          <ShoppingCart size={24} color="black"/>
          <div 
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{
              color: "white",
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%, 25%)'
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  )
}