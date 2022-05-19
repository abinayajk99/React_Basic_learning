import React, { Component } from 'react'

export default class CyclingMethods extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:"welcome",
         name:"Guys"
      }
    }
    componentWillMount(){
        alert("Learn ReactJS Lifecycle");
    }
    render() {
    return (
      <div>
          <h1>{this.state.value} {this.state.name}</h1>
        <button type="button" onClick={this.changeColor}>Change Value</button>
        <button type="button" onClick={this.DeleteHeader}>Delete Header</button>
      </div>
    )
  }
  changeColor = () =>{
      this.setState({value:"Learn react in tamil"})
  }
  componentDidMount(){
      setTimeout(()=>{
          this.setState({value:"Thankyou"})
      },5000)
  }
  componentWillUpdate(){
      alert("Do you want to update a new value")
  }
  componentDidUpdate(){
      document.getElementById("mydiv").innerHTML = "New value updated succesfully"+this.state.value
  }
  shouldComponentUpdate(){
      return true;
  }
  componentWillUnmount(){
      alert("Header Deleted");
  }
  DeleteHeader = () =>{
      this.setState({
          value:"false",name:"False"
      })
  }
}
