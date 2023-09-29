import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Navbar } from "react-bootstrap";

export default function NavigationBar({ onBarsClick }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className="justify-content-start">
        <Button className="me-2 d-sm-none" variant="dark" onClick={onBarsClick} >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            height="24"
            className="d-inline-block align-top"
          />{' '}
          Quick Note
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}