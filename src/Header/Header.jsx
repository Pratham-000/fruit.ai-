import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MyComponent } from '../assets/MyComponent';

const Header = () => {
  const handleSearch = () => {
    const postcode = document.getElementById('postcode').value;
    if (!postcode) {
      alert('Please enter the value');
    } else if (/^\d{6}$/.test(postcode)) {
      alert('Deliverable');
    } else {
      alert('Error, enter the correct value');
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img src={MyComponent.fruits} height="35" alt="" /> Fruit.ai
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>

               <NavDropdown title="More" id="basic-nav-dropdown">
                 <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
                 <NavDropdown.Item as={NavLink} to="/chatbot">Chatbot</NavDropdown.Item>
                 <NavDropdown.Item as={NavLink} to="/faq">FAQ</NavDropdown.Item>
                 
               </NavDropdown>
            </Nav>
            <Form className="d-flex" role="search">
              <Form.Control
                type="search"
                placeholder="postcode"
                className="me-2"
                aria-label="Search"
                id="postcode"
              />
              <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
