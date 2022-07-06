import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/favicon-copy.ico'


function Header() {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" className="gradient-teal-fill">
    <Container className='nav-text'>
     <img className='logo' src={logo} alt="logo" width='10%' />
    <Navbar.Brand className='nav-text' href="#home"><span className='nav-text'>Maecenas Devs</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="me-auto" href="#home"><span className='nav-text'>Home</span></Nav.Link>
      <Nav.Link href="#creator"><span className='nav-text'>Creators</span></Nav.Link>
      <Nav.Link href="#contact"><span className='nav-text'>Contact</span></Nav.Link>
      <Nav.Link href="#Login"><span className='nav-text'>Login/Logout</span></Nav.Link>
      <Nav.Link href="#Signup"><span className='nav-text'>Signup</span></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

</>
    )
}

export default Header;