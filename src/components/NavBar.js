import{Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

const NavBar =() =>{
    return(
        <div>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MI TIENDA ONLINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Inicio">Inicio</Nav.Link>
      <Nav.Link href="#Sale">Sale</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Jeans/3.1">Jeans</NavDropdown.Item>
        <NavDropdown.Item href="#Remeras/3.2">Remeras</NavDropdown.Item>
        <NavDropdown.Item href="#Abrigos/3.3">Abrigos</NavDropdown.Item>
        <NavDropdown.Item href="#Camisas/3.4">Camisas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#Usuario">Usuario</Nav.Link>
      <Nav.Link eventKey={2} href="#Carrito">
        Carrito
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    ); };

export default NavBar