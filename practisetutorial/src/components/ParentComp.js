import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Abinaya"
      }
    }
    componentDidMount(){
       setInterval(()=>{
        this.setState({
            name:"Abinaya"
        })
       },2000)
    }
  render() {
      console.log("***********parentComponent*************")
    return (
      <div>
          <h1>ParentComp</h1>
          {/* <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/> */}
          <MemoComp name={this.state.name}/>
      
      </div>
    )
  }
}
