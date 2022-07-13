import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../../index.css";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo from '../../assets/images/favicon-copy.ico'


function Header() {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
        <>
  <Navbar collapseOnSelect expand="lg" className="gradient-teal-fill">
    <Container className='nav-text'>
     <img className='logo' src={logo} alt="logo" width='10%' />
    <Navbar.Brand className='nav-text' href="#home"><span className='nav-text'>Maecenas Devs</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="me-auto" href="/"><span className='nav-text'>Home</span></Nav.Link>
      <Nav.Link as={Link} to="/creators"><span className='nav-text'>Creators</span></Nav.Link>
        {Auth.loggedIn() ? (
              <>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Login"><span className='nav-text'>Login/Logout</span></Nav.Link>
                <Nav.Link as={Link} to="/Signup"><span className='nav-text'>Signup</span></Nav.Link>
                
              </>
            )}
      <Nav.Link as={Link} to="/contact"><span className='nav-text'>Contact</span></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

</>
    )
}

export default Header;
