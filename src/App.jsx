import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">Receptes</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about" className='nav-link'>About...</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App

