import React from 'react'
import {useParams } from 'react-router-dom'

function ListProduct() {
    
    const {id} = useParams();
    const productData = [{
        "productno": 111,
        "name": "IPhone",
        "manufacturer": "Apple",
        "price": "Rs. 45000"
        },
        {
        "productno": 121,
        "name": "IPad",
        "manufacturer": "Apple",
        "price": "Rs. 34500"
        },
        {
        "productno": 131,
        "name": "IPod",
        "manufacturer": "Apple",
        "price": "Rs. 32222"
        },
        {
        "productno": 141,
        "name": "Moto G",
        "manufacturer": "Motorola",
        "price": "Rs. 35678"
        },
        {
         "productno": 151,
        "name": "Moto X",
        "manufacturer": "Motorola",
        "price": "Rs. 43434"
        }]
    const data = productData.map(
        (prod,items) => {
            if (prod.productno == id){
                return (
                    <tr>
                        <td>{ prod.productno}</td>
                        <td> { prod.name } </td>
                        <td> {prod.manufacturer} </td>
                        <td> {prod.price} </td>
                    </tr>
                )
            }
        } 
    )
  return (
      
    <div>
        <h1 style={{color:"blue"}}> ListProduct {id} </h1>
        <table>
        <tr>
            <th>Product Number</th>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>price</th>
        </tr>
        {data}
        </table>
    </div>
  )
}

export default ListProduct