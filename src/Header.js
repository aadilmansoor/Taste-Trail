import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://banner2.cleanpng.com/20180920/vgj/kisspng-vector-graphics-computer-icons-restaurant-logo-foo-5ba34341ecff51.4896594815374262419707.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
            />{" "}
            <span>Taste Trail</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
