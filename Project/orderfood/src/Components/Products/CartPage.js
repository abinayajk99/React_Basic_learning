import {React,useEffect,useState} from 'react'
import BaseNav from '../NavBars/BaseNav';
import SubNav from '../NavBars/SubNav';
import {Table,Container,Row,Col,Image,Figure,Card,ListGroup,ListGroupItem,Button,ButtonGroup} from 'react-bootstrap'
import ImageName from '/home/user/repository/React_Basic_learning/Project/orderfood/src/Components/Products/foodmitho.jpg'
import { connect } from 'react-redux'
import { addadjustQuality, removeFromCart,decadjustQuality } from '../../Redux/Shopping/Shopping_actions';


function CartPage({cart,removeFromCart,addadjustQuality,decadjustQuality}) {
    const totalValue = (item,price) =>{
        return item*price
    }
    const totalAmount =(cart) =>{
        var total =0;
        cart.map((item) =>{
            total=item.quantity*item.price
            return total
        })

    }
  return (
    <div>
    <BaseNav/>    
    <Container className='mt-2' >
        <Row className='mt-3'>
            <Col md={4}>
            <Image  width={400} height={440} src={ImageName}rounded />
            </Col>
            <Col md={8}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>ItemName</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>Adjustquantity</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item)=>(
                        <tr key={item.id}>
                        <td></td>
                        <td>{item.itemName}</td>
                        <td>${item.price}</td>
                        <th>{item.quantity}</th>
                        <td>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="warning" onClick={()=>{decadjustQuality(item)}}>-</Button>
                            <Button variant="danger" onClick={()=>removeFromCart(item.id)}>Remove</Button>
                            <Button variant="success" onClick={()=>addadjustQuality(item)}>+</Button>
                        </ButtonGroup>
                        </td>
                        <td>{totalValue(item.price,item.quantity)}</td>
                        </tr>
                        
                    ))}
                </tbody>
                </Table>
                Amount to be paid in total:{totalAmount(cart)}
            </Col>
        </Row>
    </Container>
    </div>
  )
}

const mapStateToProps =  (state,dispatch) =>{
    return{
        cart : state.shop.cart,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeFromCart : (id) => dispatch(removeFromCart(id)),
        addadjustQuality : (item) => dispatch(addadjustQuality(item)),
        decadjustQuality : (item) => dispatch(decadjustQuality(item)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(CartPage) ;