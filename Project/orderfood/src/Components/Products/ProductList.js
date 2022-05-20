import React, { useState } from 'react'
import { Container,Row,Col,Navbar,Card,Button,Form,FormControl } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, SetProduct } from '../../Redux/Shopping/Shopping_actions';

function ProductList(items) {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();
  return (
    <React.Fragment>
                <Row className='mt-3' >
                    {items.items.length > 0 && items.items.map((item)=>{
                        return (
                            <Col md={6} key={item.id}>
                                <Card style={{ width: '35rem' }} className="mb-3">
                                    <Row>
                                        <Col md={4}>
                                            <Card.Img variant="img" src={item.img}   width={171} height={180}/>
                                        </Col>
                                    <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{item.itemName}</Card.Title>
                                        <Card.Text>${item.price}</Card.Text>
                                        <Card.Text>id:{item.id}</Card.Text>
                                        <Button variant="outline-warning" onClick={()=>dispatch(addToCart(item))}>Add to cart</Button>
                                    </Card.Body>
                                    </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )

                    })}
            </Row>
    </React.Fragment>
  )
}

export default ProductList