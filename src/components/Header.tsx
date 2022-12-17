import "./Header.scss"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand className="navbar-brand" onClick={() => navigate('/')}>React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link' : 'nav-link active'}>Home</NavLink>
          <NavLink to="/register" className={({isActive}) => isActive ? 'nav-link' : 'nav-link active'}>Register</NavLink>
        </Nav>
    </Navbar>
    </>
  )
}

export default Header