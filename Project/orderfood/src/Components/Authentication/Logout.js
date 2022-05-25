import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios';
import { connect } from 'react-redux'
import { isLogin } from '../../Redux/Shopping/Shopping_actions';
import HomeProduct from '../Products/HomeProduct';
function Logout({islogin,isLogin}) {
    let home;
    if(islogin){
        isLogin(false);
        console.log("----------->state1")
        home = <HomeProduct/>
    }
    else{
        console.log("----------->state1")
        home = <HomeProduct/>
    }
  return (
    <>
    {home}
    </>
  )
}

const mapStateToProps =  state =>{
    return{
        islogin : state.shop.isLogin,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      isLogin : (itemvalue) => dispatch(isLogin(itemvalue))
    }
  }
  


export default  connect (mapStateToProps,mapDispatchToProps) (Logout)