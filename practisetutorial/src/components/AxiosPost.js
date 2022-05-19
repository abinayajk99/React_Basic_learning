import React, { Component } from 'react'

export default class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    ChangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})

    }
    SubmitForm = e () =>{
        e.PreventDefault()
    }
    
  render() {
      const {userId,title,body} = this.state
    return (
      <div>
          <form onSubmit={this.SubmitForm}>
              <input type="text" name="userId" value={userId} onChange={this.ChangeHandler}/>
              <input type="text" name="title" value={title} onChange={this.ChangeHandler}/>
              <input type="text" name="body" value={body} onChange={this.ChangeHandler}/>
            <button type="submit">Clikme</button>         
          </form>
      </div>
    )
  }
}
