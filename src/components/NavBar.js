import{Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar =() =>{
    return(
        <div>
   <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
  <Container>
  <Navbar.Brand> <Link to="/">TIENDA ONLINE</Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link><Link to="/">Inicio</Link></Nav.Link> 
      <Nav.Link href="#Sale">Sale</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
      <NavDropdown.Item><Link to="/categoria/teclado">Teclado</Link></NavDropdown.Item> 
        <NavDropdown.Item><Link to="/categoria/mouse">Mouse</Link></NavDropdown.Item> 
        <NavDropdown.Item><Link to="/detalle">Microprocesador</Link></NavDropdown.Item> 
        <NavDropdown.Item><Link to="/detalle">Mother</Link></NavDropdown.Item> 
        <NavDropdown.Item><Link to="/detalle">Auriculares</Link></NavDropdown.Item> 
      </NavDropdown>
    </Nav>
    <Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="¿Qué estás buscando?"
          className="me-2"
          aria-label="Search"
        />
        <Button className="boton" variant="outline-success" >Buscar</Button>
      </Form>
      <CartWidget/>
    </Nav>
  </Navbar.Collapse>
  <Nav.Link><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></Link></Nav.Link>
  
  </Container>
</Navbar>
      </div>
    ); };

export default NavBar