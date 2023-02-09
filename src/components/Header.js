import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    //html code
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt="no image"
          src="https://live.staticflickr.com/8060/8200125819_e8637e26f4_z.jpg"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '} &nbsp;
        Casa Emilies Restoran
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header