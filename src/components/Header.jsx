import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default class Header extends React.Component {
  renderUser() {
    const { userData, logout } = this.props;

    if (null === userData) {
      return <i className="fas fa-Loading fa-spin" />;
    }

    return (
      <Nav.Item>
        <Button variant="link" onClick={logout}>
          Logout
        </Button>
      </Nav.Item>
    );
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React Progress Bot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav.Item>

            {isAuthenticated ? (
              this.renderUser()
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
