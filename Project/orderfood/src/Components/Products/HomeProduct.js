import { Container,Row,Col,Navbar,Card,Button,Form,FormControl } from 'react-bootstrap'
import axios from 'axios'
import React, { useState,useEffect } from "react";
import ProductList from './ProductList';
import {useParams } from 'react-router-dom'
import BaseNav from '../NavBars/BaseNav';
import SubNav from '../NavBars/SubNav';
import { useSelector,useDispatch } from 'react-redux'
import { SetProduct } from '../../Redux/Shopping/Shopping_actions';

//To connect redux sstate

function HomeProduct() {

    // const {category} = useParams();
    // console.log(category)
    const [apiData,setApiData] = useState([]);

    //Redux state 
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();


    useEffect(()=>{
        axios.get("http://localhost:7000/products")
        .then((getData)=>{
            setApiData(getData.data)
            dispatch(SetProduct(getData.data))
        })
        .catch()
    },[])

  return (
      <>
    <BaseNav/>
    <SubNav/>
    
    <Container className='mt-2'>
        {apiData.map((data)=>{
            return (
                <React.Fragment key={data.id}>
                <Navbar bg="light">
                <Container className='mt-2'>
                <Navbar.Brand id={data.category_id} >{data.category}</Navbar.Brand>
                </Container>
                </Navbar>
                    <ProductList key={data.id} items={data.items}/>
            
                </React.Fragment>
            )
        })}    
      </Container>
      </>
  )
}



export default HomeProduct
