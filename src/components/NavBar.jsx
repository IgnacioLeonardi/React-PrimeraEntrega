import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import data from "../data/products.json"
import { NavLink } from 'react-router-dom';


const categories = data.map(item => item.category)

const uniqueCategories = new Set(categories)

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Ecomerce</Navbar.Brand>
      <Nav className="me-auto">
        {[...uniqueCategories].map(category => (
          <NavLink className="nav-link" key={category} to={`/category/${category}`}
          >{category}</NavLink>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);

