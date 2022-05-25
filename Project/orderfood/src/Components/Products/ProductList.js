import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Navbar,Card,Button,Form,FormControl } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, SetProduct } from '../../Redux/Shopping/Shopping_actions';

function ProductList(items) {
    const cart = useSelector((state)=>state.shop.cart)
    const islogin = useSelector((state) =>state.shop.isLogin)
    const dispatch = useDispatch();
    const [adddedCart,setAddedCart] = useState(false);
    console.log(islogin)

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
                                    {islogin
                                    ?<Button variant="outline-warning" onClick={()=>dispatch(addToCart(item))}>Add to cart</Button>
                                    :<Link to="login"><Button variant="outline-warning">Add To Cart</Button></Link>}
                                      
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