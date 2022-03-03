import './NavBar.css'
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState, useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/CartContext'



const NavBar = () => {
  const [categories, setCategories] = useState([])

  const { products } = useContext(CartContext)

  useEffect(() => {
      getDocs(collection(firestoreDb, 'categories')).then(response => {
        const categories = response.docs.map(cat => {
          return { id: cat.id, ...cat.data()}
        })
        setCategories(categories)
      })
  }, [])

  return (

    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to={'/'} className="BrandNav">Xplora</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
            {products.length > 0 && <CartWidget />}
          </Nav>
        </Navbar.Collapse>
        
      </Container>
</Navbar>


   
      
  )
}

export default NavBar