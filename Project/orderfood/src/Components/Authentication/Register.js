import axios from 'axios';
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class userRegistration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fields:{},
       errors:{}
    }
    this.ChangeFields = this.ChangeFields.bind(this);
    this.submitUserForm = this.submitUserForm.bind(this);
  }

  ChangeFields(event){
    let field = this.state.fields;
    field[event.target.name] = event.target.value;
    this.setState({
      field
    },console.log(this.state.fields))
  }

  submitUserForm(event)
    {
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

  validateForm(event){
    let field =  this.state.fields;
    let error = {};
    let formIsValid = true;
    if (!field['username']){
      formIsValid = false;
      error['username'] = "Kindly enter userName";
    }
    if (typeof(field['username'] != "undefined"))
      {
        if(!field['username'].match(/^[a-zA-z]*$/))
        {
          formIsValid = false;
          error['username'] = "Kindly enter username field with charcters";
        }
      
      }
      if (!field['phono']){
        formIsValid = false;
        error['phono'] = "Kindly enter Mobilenumber";
      }


      if (typeof(field['phono'] != "undefined"))
      {
        if(!field['phono'].match(/^[0-9]{10}$/))
        {
          formIsValid = false;
          error['phono'] = "Kindly enter the valid phono";
        }
      
      }
      if (!field['email']){
        formIsValid = false;
        error['email'] = "Kindly enter email";
      }
      if (typeof(field['email'] != "undefined"))
      {
        if(!field['email'].match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))
        {
          formIsValid = false;
          error['email'] = "Kindly enter the valid email";
        }
      
      }
      if (!field['pswd']){
        formIsValid = false;
        error['pswd'] = "Kindly enter Mobilenumber";
      }
      if (typeof(field['pswd'] != "undefined"))
      {
        if(!field['pswd'].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/))
        {
          formIsValid = false;
          error['pswd'] = "Kindly enter the valid email";
        }
      }
      this.setState({
        errors:error
      })
      return formIsValid
  }
  render() {
    return (
      <div className='Container mt-4'>
        <h4>CreateAccount</h4>
        <form method='post' action="#" name="userRegistration" onSubmit={this.submitUserForm}> 
        <div>
          <label>UserName : </label> &nbsp; &nbsp;
          <input type="text" name="username" value={this.state.fields.username} onChange={this.ChangeFields} placeholder="Enter the username"/>
        </div><br/>
        <div className='error'>{this.state.errors.username}</div>
        <div>
          <label>Email : </label> &nbsp; &nbsp;
          <input type="email" name="email" value={this.state.fields.email} onChange={this.ChangeFields} placeholder="Enter the Email"/>
        </div><br/>
        <div className='error'>{this.state.errors.email}</div>
        <div>
          <label>PhoneNo : </label> &nbsp; &nbsp;
          <input type="number" name="phono" value={this.state.fields.phono} onChange={this.ChangeFields} placeholder="Enter the Phono"/>
        </div><br/>
        <div className='error'>{this.state.errors.phono}</div>
        <div>
          <label>Passaword : </label> &nbsp; &nbsp;
          <input type="password" name="pswd" value={this.state.fields.pswd} onChange={this.ChangeFields} placeholder="Enter the password"/>
        </div><br/>
        <div className='error'>{this.state.errors.pswd}</div>
        <div>
          <input type="submit" value="submit"/>
          <Link to="login"><input type="button" value="Login"/></Link>
        </div>
        <br/>
        </form>
      </div>
    )
  }
}
