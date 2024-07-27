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
        <div className='w-full h-[100vh]  overflow-hidden flex flex-col items-center gap-10'>
            <div className="relative w-full h-[30%] flex p-10 bg-green-600">
                <h3 className='text-white font-extrabold text-2xl uppercase'>Novel Nest Book Store &copy;</h3>
            </div>

            <div className=" md:w-[50%] h-auto py-10 px-4 absolute  flex flex-col items-center justify-center border border-black top-[20%] gap-5 bg-slate-200 ">
                <div className="form-img">
                    <img className='w-[70px]' src= {Recovery} alt="exclamation mark image" />
                </div>
                <h1 className='text-red-500 text-center font-extrabold text-xl'>Forgot Password ?</h1>
                <p className='text-center'>Enter your email and we will send you a link to reset your Password  </p>

                <form onSubmit={this.handleSubmit}>
                    <div className="bg-none outline-none border-none min-w-[250px] flex items-center justify-start w-[320px]">
                        <div className="min-w-[250px] flex items-center justify-start px-4 bg-white py-3 w-[320px] gap-2">
                            <MdEmail />
                            <input className='w-[90%] p-2 border-none outline-none bg-none' type="email" id='email' value={this.state.Email} onChange={this.handleEmailChange}  placeholder='Enter Email'/>
                        </div>
                    </div>
                </form>

                <Link  to={'/login'}>
                    <button type='submit' className='text-white bg-green-500 border-none cursor-pointer rounded-xl font-medium text-lg px-6 py-3 w-[250px]'>
                      Submit
                    </button>
                </Link>

                <div className="back w-[150px]">
                    <Link className='flex items-center gap-2 justify-center font-semibold' to={'/login'}>
                        <GoChevronLeft  className='icn'/>
                         Back to Login
                    </Link>
                </div>
            </div>
        </div>
    )
  }
}
