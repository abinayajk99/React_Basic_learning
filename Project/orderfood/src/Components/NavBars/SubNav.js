import React, { Component } from 'react'
import { Navbar,Container,Nav,Button,NavDropdown,Form,FormControl } from 'react-bootstrap'
export default class SubNav extends Component {
  render() {
    return (
        <Container className='mt-2'>
        <Navbar bg="light" expand="lg" >
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#Break_your_fast">Break your Fast</Nav.Link>
                <Nav.Link href="#Time_for_lunch">Time for Lunch</Nav.Link>
                <Nav.Link href="#can_i_have_snacks">Can i have snacks</Nav.Link>
                <Nav.Link href="#dinner">Dinner</Nav.Link>
                <Nav.Link href="#burgers_beverages">Burger and Beverages</Nav.Link>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#pizzanians">Pizza</NavDropdown.Item>
                <NavDropdown.Item href="#desserts">Desserts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#chick_chicken">
                Chick and Chicken
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
</Container>
    )
  }
}
