import React, { Component } from 'react'
import Recovery from "../assets/recovery.png"
import { MdEmail } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";
import { Link } from 'react-router-dom';




export default class ForgetPass extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Email:''
        }
    }

    handleEmailChange = e =>{
        this.setState({
            Email: e.target.value
        })
    }

    handleSubmit = e => {
        e.PreventDefualt()
    }


  render() {
    return (
        <div className='forgetpassword-div'>
            <div className="logo-div">
                <h3>Novel Nest Book Store &copy;</h3>
            </div>

            <div className="recovery-form">
                <div className="form-img">
                    <img src= {Recovery} alt="exclamation mark image" />
                </div>
                <h1>Forgot Password </h1>
                <p>Enter your email and we will send you a link to reset your Password  </p>

                <form onSubmit={this.handleSubmit}>
                    <div className="recovery-input">
                        <div className="input">
                            <MdEmail />
                            <input type="email" id='email' value={this.state.Email} onChange={this.handleEmailChange}  placeholder='Enter Email'/>
                        </div>
                    </div>
                </form>

                <Link to={'/login'}>
                    <button type='submit' className='sub-btn'>
                      Submit
                    </button>
                </Link>

                <div className="back">
                    <Link to={'/login'}>
                        <GoChevronLeft  className='icn'/>
                         Back to Login
                    </Link>
                </div>
            </div>
        </div>
    )
  }
}
