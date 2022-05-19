import Home from "./Home";
import ReactDOM from  'react-dom'
import React from 'react'
var  home=new Home();
beforeEach(()=>{
    console.log("I will get executed before each testcases that is executed")
})

describe("test happen on Home Component",()=>{

it("render home component",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Home/>,div)
})

it("Test done on add method from home component",()=>{
    expect(home.sum(3,4)).toBe(7);
})

})