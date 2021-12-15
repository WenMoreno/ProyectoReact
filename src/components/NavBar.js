import{Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar =() =>{
    return(
        <div>
   <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
  <Container>
  <Navbar.Brand href="#home">MI TIENDA ONLINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Inicio">Inicio</Nav.Link>
      <Nav.Link href="#Sale">Sale</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Teclado/3.1">Teclado</NavDropdown.Item>
        <NavDropdown.Item href="#Mouse/3.2">Mouse</NavDropdown.Item>
        <NavDropdown.Item href="#Microprocesador/3.3">Microprocesador</NavDropdown.Item>
        <NavDropdown.Item href="#Mother/3.4">Mother</NavDropdown.Item>
        <NavDropdown.Item href="#Auriculares/3.5">Auriculares</NavDropdown.Item>
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
  </Container>
</Navbar>
      </div>
    ); };

export default NavBar