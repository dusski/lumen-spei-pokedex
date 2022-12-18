import './Header.scss'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.context'
import { Button } from 'react-bootstrap'

function Header() {
  const navigate = useNavigate()
  const {
    user: { email, firstName },
    setUser
  } = useContext(AuthContext)
  let isUserAuthenticated = !!email

  const handleLogout = () => {
    setUser({})
    isUserAuthenticated = false;
  }

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand className="navbar-brand" onClick={() => navigate('/')}>
          React-Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link active')}>
            Home
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link active')}>
            Register
          </NavLink> */}
        </Nav>
        {isUserAuthenticated && (
          <Nav className="justify-content-end align-items-center">
            <Navbar.Text>{firstName}</Navbar.Text>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link active')}>
              <Button variant="primary" onClick={() => handleLogout()}>
                Logout
              </Button>
            </NavLink>
          </Nav>
        )}
      </Navbar>
    </>
  )
}

export default Header
