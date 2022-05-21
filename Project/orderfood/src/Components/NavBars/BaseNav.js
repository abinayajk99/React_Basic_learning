import React, { Component, useEffect, useState } from 'react'
import { Navbar,Container,Nav,Button,Badge } from 'react-bootstrap'
import NameImage from '/home/user/repository/React_Basic_learning/Project/orderfood/src/Components/NavBars/y-logo.jpeg'
import {Link} from 'react-router-dom'
import SideNAv from './SideNAv'
import { connect } from 'react-redux'

function BaseNav({cart}) {
    const [cartCount,setCartCount] = useState(0);
    useEffect(()=>{
      let count = 0;
      if (cart.length === []){
        setCartCount(count)
      }
      else{
      cart.forEach(item => {
        count+=item.quantity;
        setCartCount(count)
      });
      }
    },[cart,cartCount])
    return (
        <>
        <Navbar bg="dark" variant="dark"  sticky="top">
          <Container>
            <Navbar.Brand href="/">
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
          <Link to="/cart"><Button variant="dark">Add To Cart <Badge bg="warning" text="dark">{cartCount}</Badge></Button></Link>
          <SideNAv/>
        <Link to="login"><Button variant="dark">Login</Button></Link>
        <Link to="register"><Button variant="dark">Register</Button></Link>
    </Nav>
        </Navbar>
      </>
    )
}


const mapStateToProps =  state =>{
    return{
        cart : state.shop.cart
    }
}

export default connect (mapStateToProps)(BaseNav);