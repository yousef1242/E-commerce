
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../"
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';





function NavbarOne(props){
  const cart = useSelector(state => state.cart)

    return(
        <Navbar style={{background:"#203040"}} className='py-4' expand="lg">
        <Container>
          <Link to="/"  style={{fontWeight:"bold",color:"white",fontSize:"20px"}}>Shopping</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse style={{color:"white"}} id="basic-navbar-nav">
            <Nav className="ms-auto">
            {props.switch}
              <Link to="/cart" style={{color:"white"}} className='nav-link text-center  fs-5' href="#home">Cart-{cart.length}</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default NavbarOne