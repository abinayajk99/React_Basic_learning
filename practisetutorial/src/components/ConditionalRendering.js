import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true,
    }
  }
  render() {
    return(
      this.state.isLoggedIn && <div>Iam logged in</div>
      // this.state.isLoggedIn?<div>Logged in</div>:<div>Logout</div>
    )

    // let message;
    // if (this.state.isLoggedIn){
    //   message = <h1>hai, Iam logged in</h1>
    // }
    // else{
    //   message = <h1>hai, Iam logged in</h1>
  
    // }
    // return (
    //   <React.Fragment>
    //     {message}
    //   </React.Fragment>
    // )
  //  if(this.state.isLoggedIn){
  //    return <button>Logout</button>
  //  }
  //  else{
  //    return <button>Login</button>
  //  }
  }
}



//NOtes
// Conditional Rendering

// 1. if/else
// 2. Element variables
// 3. Ternary conditional operator
// 4. Short circuit operator
