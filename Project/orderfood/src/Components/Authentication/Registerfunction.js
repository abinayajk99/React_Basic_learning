import React , { useState } from "react";
import {Link} from 'react-router-dom'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
  
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    function handleFormSubmit(e) {
        e.preventDefault();
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
  return (
    <div className="container">
        <div id="form_login_register">
          <div className="container">
          <div className="row  justify-content-center mt-5 pb-4"> 
            <div className="col-sm-8 col-md-4 col-lg-4 ">
            <div className="card">
              <div className="card-header">
                <center>
                  <h4>Register</h4>
                </center>
              </div> 
              <div className="card-body">
                
                    <form method='post' action="#" name="userRegistration" onSubmit={handleFormSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"  name="username" value={name} onChange={(event) => setName(event.target.value)} required/> 
                        <div className='error' color='red'></div>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                        <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <div className='error'></div>
                      </div>

                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                        <input type="number" name="phono" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Enter the Phono" required/>
                        <div className='error'></div>
                      </div>

                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                        <input type="password" name="pswd" value={password} onChange={(event) => setPassword(event.target.value)}  placeholder="Enter the password" required/>
                        <div className='error'></div>
                      </div>
                
                      <div align="center"><input type="submit" value="submit"/></div>
                      <hr></hr>
                      <div className="container signin">
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

export default Register