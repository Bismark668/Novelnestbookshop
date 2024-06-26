import React, { Component } from 'react'
import { FaUser } from "react-icons/fa";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state ={
      UserName:'',
      Password:''
    }
  }

  handleUserNameailChange = e => {
    this.setState({
       UserName: e.target.value
    })
  }
  handlePasswordChange = e =>{
     this.setState({
       Password: e.target.value
    })
  }
  handleSubmit = e => {
    e.PreventDefualt()
  }

  
  
  render() {
    return (
      <div className='login-div'>
        <div className="img-div">
          <div className="des-div">
            <h1>Explore,Buy and read all kinds of books</h1> 
          </div>

          <div className="notify-div">
           <p>Don't have an acount ?</p>
            <a href="/register"><button>Sign-Up</button></a>
          </div>

        </div>
        <div className="form-div">
          <div className="lgo">
            <img className='logo-img' src={Logo} alt="logo" />
            <h4>Welcome !</h4>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="forms">
              <div className="input-div">
                <label htmlFor="Username">Username</label>
                <div className="input">
                  <FaUser/>
                  <input type="text" id='Username' value={this.state.UserName} onChange={this.handleUserNameailChange} placeholder='Enter Username'/>
                </div>
              </div>

              <div className="input-div">
                <label htmlFor="Password">Password</label>
                <div className="input">
                 <FaUnlockKeyhole />
                  <input type="password" id='password' value={this.state.Password} onChange={this.handlePasswordChange} placeholder='Enter password'/>
                </div>
              </div>

              <Link to={'/dashboard'}>
                <button className='btn'>
                  Sign-in
                  <FaRegArrowAltCircleRight />
                </button>
              </Link>

              <p>Forgot your password ? <a href="/forgotPassword">Click Here</a></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
