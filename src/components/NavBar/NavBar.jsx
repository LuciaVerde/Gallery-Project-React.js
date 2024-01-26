import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

  return (
    <Container className="mt-2">
      <Navbar expand="lg" className="bg-white">
        <Link to='/' className="text-decoration-none">
          <Navbar.Brand>
            <img src="https://firebasestorage.googleapis.com/v0/b/gallery-a463c.appspot.com/o/gallery-img%2FLogo.png?alt=media&token=16d410dd-2350-432b-986b-20b4b1319306" alt="Logo" style={{ height: '50px', width: 'auto' }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav className="my-2 mx-auto text-center"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link as={Link} to='/' style={{ fontSize: "1.1rem", color: "black" }}>Home</Nav.Link>
            <Nav.Link style={{ fontSize: "1.1rem", color: "black" }} href="#action2">Nosotros</Nav.Link>
            <NavDropdown style={{ fontSize: "1.1rem", color: "black" }} title="Categorías" id="navbarScrollingDropdown" >
              <NavDropdown.Item as={Link} to='/category/paisajes'>Paisajes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/mar y playa'>Mar y playa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/floral'>Floral</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/abstracto'>Abstracto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ fontSize: "1.1rem", color: "black" }} href="#">
              Contacto
            </Nav.Link>
          </Nav>
          <Link to="/cart"> <Button variant="outline-dark"><CartWidget /></Button></Link>
        </Navbar.Collapse>

      </Navbar>
    </Container>
  );
}

export default NavBar;