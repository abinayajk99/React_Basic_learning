// import React from 'react'
import React, { useState } from "react";
import { Navbar,Container,Button,Offcanvas } from 'react-bootstrap'

function SideNAv() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          About
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Who Are We?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            our technology patform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover their favourite food items, read and write customer generated reviews, offers, various deals on food item, order food delivery and make payments while dining-out at restaurant, we provide high quality food items delivery within short time.
            <Container className="mt-4">
              <Button variant="outline-success">Menu</Button>{' '}
              <Button variant="outline-warning">House and location</Button>{' '}
              <Button variant="outline-danger">Login</Button>{' '}
              <Button variant="outline-secondary">Signup</Button>{' '}
              <Button variant="outline-dark">Admin</Button>{' '}
              <Button variant="outline-info">offers</Button>{' '}
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  

export default SideNAv