import React from "react";
import {
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap"
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));


const Header = props => {
  const currentUser = props.userName;
    return (
      <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {currentUser ? (
              <Navbar.Text className="justify-content-end"> 
                  Welcome, {currentUser}! 
              </Navbar.Text>
               ) : null}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#add">Add</Nav.Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#feedback">Feedback</NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() =>
                    Auth.signOut()
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
                  }>
                  Logout
                </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>
    );
};
export default Header;