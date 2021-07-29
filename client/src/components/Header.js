import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>JJDT</Navbar.Brand>
            </LinkContainer>
               
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link >Cart<i className='fas fa-shopping-cart'></i></Nav.Link>
                </LinkContainer>

                <LinkContainer to='/profile'>
                  <Nav.Link >Profile<i className='fas fa-user'></i></Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  } else {
    return (<header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>JJDT</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <LinkContainer to='/cart'>
                <Nav.Link >Cart<i className='fas fa-shopping-cart'></i></Nav.Link>
              </LinkContainer>

              <LinkContainer to='/signin'>
                <Nav.Link >Sign In<i className='fas fa-user'></i></Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    )}
}

export default Header