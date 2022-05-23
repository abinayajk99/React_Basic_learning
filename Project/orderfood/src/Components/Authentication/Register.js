import axios from 'axios';
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class userRegistration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fields:{},
       errors:{},
       isRegister:false,
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
          // alert("Form Submitted");
          this.setState(isRegister=false);

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
      <div class="container">
        <div id="form_login_register">
          <div class="container">
          <div class="row  justify-content-center mt-5 pb-4"> 
            <div class="col-sm-8 col-md-4 col-lg-4 ">
            <div class="card">
              <div class="card-header">
                <center>
                  <h4>Register</h4>
                </center>
              </div> 
              <div class="card-body">
                
                    <form method='post' action="#" name="userRegistration" onSubmit={this.submitUserForm}>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"  name="username" value={this.state.fields.username} onChange={this.ChangeFields} required/> 
                        <div className='error' color='red'>{this.state.errors.username}</div>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                        <input type="email" name="email" value={this.state.fields.email} onChange={this.ChangeFields} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <div className='error'>{this.state.errors.email}</div>
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
                        <input type="number" name="phono" value={this.state.fields.phono} onChange={this.ChangeFields} placeholder="Enter the Phono" required/>
                        <div className='error'>{this.state.errors.phono}</div>
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
                        <input type="password" name="pswd" value={this.state.fields.pswd} onChange={this.ChangeFields}  placeholder="Enter the password" required/>
                        <div className='error'>{this.state.errors.pswd}</div>
                      </div>
                
                      <div align="center"><input type="submit" value="submit"/></div>
                      <hr></hr>
                      <div class="container signin">
                        <p>Already have an account? <Link to="/login" className="btn btn-link">Login</Link>.</p>
                      </div>
                      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    </form>
                  </div>
              </div>
                
              </div>
            </div>
          
          </div>
        </div>
</div>
    )
  }
}
