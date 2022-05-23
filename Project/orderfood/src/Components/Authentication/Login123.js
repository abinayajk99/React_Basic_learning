import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory();
  return (
    <>
      <div className='Container'>
        <div className='row justify-content-center mt-5 pb-4'>
          <div className="col-md-4">
            <div className="card">
              <div className ="card-header">
                <center>
                  <h4>Login</h4>
                </center>
              </div>
              <div className='card-body'>
                <form action='' method=''>
                  <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                  <input type="email" className="form-control" placeholder="Enter username"  name="email" onChange={this.handleChange} value={this.state.email}/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password"  name="password"  onChange={this.handleChange} value={this.state.password} />
                  </div>
                  <div align="center" ><button type="button" className="btn btn-primary" onClick={this.getLogin}>Login</button></div>
                  <Link to="/register" className="btn btn-link">Register</Link>
                </form>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>  
      </div>
      </>
  )
}

export default Login