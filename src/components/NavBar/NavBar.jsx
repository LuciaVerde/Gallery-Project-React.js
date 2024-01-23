import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

  const logoImageURL = 'https://firebasestorage.googleapis.com/v0/b/gallery-a463c.appspot.com/o/gallery-img%2FLogo.png?alt=media&token=16d410dd-2350-432b-986b-20b4b1319306';

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to='/' className="text-decoration-none">
          <Navbar.Brand>
            <img src="https://firebasestorage.googleapis.com/v0/b/gallery-a463c.appspot.com/o/gallery-img%2FLogo.png?alt=media&token=16d410dd-2350-432b-986b-20b4b1319306" alt="Logo" style={{ height: '50px', width: 'auto' }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='/category/paisajes'>Paisajes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/mar y playa'>Mar y playa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/floral'>Floral</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/abstracto'>Abstracto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Contacto
            </Nav.Link>
          </Nav>
          <Link to="/cart"> <Button variant="outline-dark"><CartWidget /></Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;