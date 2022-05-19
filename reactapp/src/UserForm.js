import React, { Component } from 'react'
import axios from'axios'

export default class UserForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fields:{},
         errors:{}
      }
      this.ChangeFields = this.ChangeFields.bind(this);
      this.submitUserForm = this.submitUserForm.bind(this);
    }

    ChangeFields(event)
    {
        let fields = this.state.fields; //2/ for mobile number event this.state.field will have username property
        fields[event.target.name] = event.target.value; // 1. field[username:'value what we are entering"] 3. now fields['usernmae:'value what are entering','mobile':"user entered mobile number"]
        this.setState({
          fields
        },()=>{
          console.log(this.state.fields)
        })
    }
    submitUserForm(event)
    {
      event.preventDefault();
      if (this.validateForm()){  // once the form is valide and submiting the value to the database clear the state fields.
        axios.post("http://localhost:9000/posts",this.state.fields).then((data) => {
          let fields = {};
        fields['userName'] = " ";
        fields['mobile'] = '';
        this.setState({
          fields:fields
        })
        
        alert("Form Submitted");
        }).catch((error)=>{
          alert("Data saved faile");
        })
        
      }
    }

    validateForm(){
      let field =  this.state.fields;
      let error = {};
      let formIsValid = true;


      if (!field['userName']){
        formIsValid = false;
        error['userName'] = "Kindly enter userName";
      }


      if (typeof(field['userName'] != "undefined"))
      {
        if(!field['userName'].match(/^[a-zA-z]*$/))
        {
          formIsValid = false;
          error['userName'] = "Kindly enter userName field with charcters";
        }
      
      }


      if (!field['mobile']){
        formIsValid = false;
        error['mobile'] = "Kindly enter Mobilenumber";
      }


      if (typeof(field['mobile'] != "undefined"))
      {
        if(!field['mobile'].match(/^[0-9]{10}$/))
        {
          formIsValid = false;
          error['mobile'] = "Kindly enter userName field with charcters";
        }
      
      }
      this.setState({
        errors:error
      })
      return formIsValid
    }
  render() {
    return (
      <div>
        <h4>userform</h4>
        <form method='post' action="#" name="userRegistration" onSubmit={this.submitUserForm}> 
        {/* (e)=>this.submitUserForm(e) */}
        <div>
          <label>id :</label>&nbsp; &nbsp;
          <input type="text" name="id" value={this.state.fields.id} onChange={this.ChangeFields}/><br/><br/> 
          {/* (e)=>this.ChangeFields(e) */}
          </div>
          <div>
          <label>UserName :</label>&nbsp; &nbsp;
          <input type="text" name="userName" value={this.state.fields.userName} onChange={this.ChangeFields}/><br/><br/> 
          {/* (e)=>this.ChangeFields(e) */}
          </div>
          <div className='error'>{this.state.errors.userName}</div>
          <label>MobileNo :</label>&nbsp;&nbsp; 
          <input type="text" name="mobile" value={this.state.fields.mobile} onChange={this.ChangeFields}/> 
          {/* (e)=>this.ChangeFields(e) */}
          <input type="submit" value="proceed"></input>
          <div className='error'>{this.state.errors.mobile}</div>
        </form>
      </div>
    )
  }
}
