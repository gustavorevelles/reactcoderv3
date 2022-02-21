import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

const NavBar = () => {

  return (

    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
                  to={'/category/esquis'}
                  className={({ isActive }) =>
                    isActive ? 'ActiveOption' : 'Option'
                  }
                >
                  Esquís
            </NavLink>
              <NavLink
                to={'/category/botas'}
                className={({ isActive }) =>
                  isActive ? 'ActiveOption' : 'Option'
                }
              >
                Botas
              </NavLink>
            
            <NavLink
                to={'/category/tablas'}
                className={({ isActive }) =>
                  isActive ? 'ActiveOption' : 'Option'
                }
              >
                Tablas
              </NavLink>
            
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
</Navbar>


   
      
  )
}

export default NavBar