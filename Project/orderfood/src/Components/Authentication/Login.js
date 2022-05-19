import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios';


export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fields:{},
       errors:{}
    }
    this.ChangeFields = this.ChangeFields.bind(this);
    // this.submitUserLoginForm = this.submitUserLoginForm.bind(this);
  }
  ChangeFields(event){
    let field = this.state.fields;
    field[event.target.name] = event.target.value;
    this.setState({
      field
    },console.log(this.state.fields))
  }
  submitLoginForm(event){
    event.preventDefault();
    if (this.validateForm()){  // once the form is valide and submiting the value to the database clear the state fields.
      axios.post("http://localhost:7000/users",this.state.fields).then(
        (data) =>{
          let fields = {};
          fields['username'] = " ";
          fields['email'] = '';
          fields['pswd'] = '';
          fields['phono'] = '';
          this.setState({
            fields:fields
          })
        alert("Form Submitted");

        }
      )
      // this.state.fields['errors'];
      
    }
  }

  render() {
    return (
      <div className='Container mt-4'>
        <h4>Login</h4>
        <form method='post' action="#" name="userLogin" onSubmit={this.submitLoginForm}> 
        <div>
          <label>Email : </label> &nbsp; &nbsp;
          <input type="email" name="email" value={this.state.fields.email} onChange={this.ChangeFields} placeholder="Enter the Email"/>
        </div><br/>
        <div>
          <label>Passaword : </label> &nbsp; &nbsp;
          <input type="password" name="pswd" value={this.state.fields.pswd} onChange={this.ChangeFields} placeholder="Enter the password"/>
        </div><br/>
        <div className='error'>{this.state.errors.pswd}</div>
        <div>
          <Link to="login"><input type="button" value="Login"/></Link>
        </div>
        <br/>
        </form>
      </div>
      
    )
  }
}
