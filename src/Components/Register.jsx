import React, { Component } from 'react'
import Logo from '../assets/logo.png'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default class Register extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Email:'',
           UserName: '',
           Password: '',
           ConfirmPassword:''
        }
    }

    handleEmailChange = e =>{
        this.setState({
            Email: e.target.value
        })
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
    
    handleConfirmPasswordChange = e =>{
      this.setState({
        ConfirmPassword: e.target.value
      })
    }

    handleSubmit = e => {
        e.PreventDefualt()
    }
   

  render() {
    return (
    <div className="login-div">
        <div className='img-div'>
            <div className="des-div">
                <h1>Explore,Buy and read all kinds of books</h1>
             </div>
            <div className='notify-div'>
                <p>Already have an acount ?</p>
                <a href="/"><button>Sign-in</button></a>
             </div>
        </div>

        <div className="form-div">
            <div className='logo'>
                <img className='logo-img' src={Logo} alt="logo" />
                <h4>Create New Account !</h4>
            </div>

            <form onSubmit={this.handleSubmit}>
                <div className="forms">
                    <div className="input-div">
                     <label htmlFor="email">Email</label>
                        <div className="input">
                            <MdEmail />
                            <input type="email" id='email' value={this.state.Email} onChange={this.handleEmailChange} placeholder='Enter Email'/>
                        </div>
                    </div>

                    <div className="input-div">
                        <label htmlFor="username">Username</label>
                        <div className="input">
                            <FaUser/>
                            <input type="text" id='username' value={this.state.UserName} onChange={this.handleUserNameailChange} placeholder='Enter Username'/>
                        </div>
                    </div>

                    <div className="input-div">
                        <label htmlFor="password">Create Password</label>
                         <div className="input">
                            <FaUserShield />
                            <input type="password" id='password' value={this.state.Password} onChange={this.handlePasswordChange} placeholder='Enter Password'/>
                        </div>
                    </div>

                    <div className="input-div">
                         <label htmlFor="password">Confirm Password</label>
                        <div className="input">
                             <FaUserShield />
                            <input type="password" id='password' placeholder='Confirm Password'/>
                        </div>
                    </div>
                    <Link to={'/'}>
                        <button type='submit' className='btn'>
                            Sign-up
                            <FaRegArrowAltCircleRight />
                        </button>
                    </Link>
                        
                    

                </div>
            </form>
        </div>
        


    </div>
    )
  }
}


