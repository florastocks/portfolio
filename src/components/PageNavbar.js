import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

const PageNavbar = () => {
  return (
    <Navbar className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to='/' className="brand">FS</Navbar.Brand>
        <Navbar.Collapse id='navbar-collapse'>
          <Nav.Link className="navbarLink" as={Link} to='/'>Home</Nav.Link>
          <Nav.Link className="navbarLink" as={Link} to='/about'>About Me</Nav.Link>
          <Nav.Link className="navbarLink" as={Link} to='/projects'>My Projects</Nav.Link>
          <Nav.Link className="navbarLink" as={Link} to='/skills'>Skills</Nav.Link>
          <Nav.Link className="navbarLink" as={Link} to='/contact'> Contact Me</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default PageNavbar