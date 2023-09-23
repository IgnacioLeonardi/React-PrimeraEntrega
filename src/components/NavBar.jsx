import { CartWidget } from './CartWidget';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const NavBar = () => {
  const db = getFirestore()
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const refCollection = collection(db, "Products");
        const snapshot = await getDocs(refCollection);
        const uniqueCategories = new Set();

        snapshot.forEach((doc) => {
          const data = doc.data();
          uniqueCategories.add(data.category);
        });

        const categoriesArray = Array.from(uniqueCategories);
        setCategories(categoriesArray);
      } catch (error) {
        console.error("Error al obtener categorías desde Firebase:", error);
      }

    };
    fetchCategories();
  }, [db]);

  return (
    <Navbar className="Navbar container-fluid navv" bg="dark" variant="dark">
      <Container fluid className="navbar-container">
        <Navbar.Brand as={NavLink} to="/" className="mr-auto full-left logo-asd">
          Ecommerce
        </Navbar.Brand>
        <Nav className="navbar-center">
            {categories.map((category) => (
              <Nav.Link className="nav-link" as={NavLink} key={category} to={`/category/${category}`}
              >{category}</Nav.Link>
            ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;



// export const NavBar = () => (
//   <Navbar bg="dark" data-bs-theme="dark">
//     <Container>
//       <Navbar.Brand href="/">Ecomerce</Navbar.Brand>
//       <Nav className="me-auto">
//           <NavLink className="nav-link" key={"Bebidas"} to={`/category/Bebidas`}
//           >Bebidas</NavLink>
//       </Nav>
//       <CartWidget />
//     </Container>
//   </Navbar>
// );

