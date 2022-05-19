import React, { Component } from 'react'
import { Navbar,Container,Nav,Button } from 'react-bootstrap'
import NameImage from '/home/user/repository/React_Basic_learning/Project/orderfood/src/Components/NavBars/y-logo.jpeg'
import {Link} from 'react-router-dom'
import SideNAv from './SideNAv'

export default class BaseNav extends Component {
  render() {
    return (
        <>
        <Navbar bg="dark" variant="dark"  sticky="top">
          <Container>
            <Navbar.Brand href="/home">
              <img
                alt=""
                src={NameImage}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Yumito
            </Navbar.Brand>
          </Container>
          <Nav>
          {/* <Link to="about"><Button variant="dark">About</Button></Link> */}
          <SideNAv/>
        <Link to="login"><Button variant="dark">Login</Button></Link>
        <Link to="register"><Button variant="dark">Register</Button></Link>
    </Nav>
        </Navbar>
      </>
    )
  }
}
