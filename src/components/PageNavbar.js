import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

const PageNavbar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand as={Link} to='/' className="brand">add brand in</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default PageNavbar