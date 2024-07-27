import  { Component } from 'react'
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
      <div className='w-full md:h-[80%] h-[100vh] md:w-[80%]  grid grid-cols-1 md:grid-cols-2 gap-4 bg-green-300'>
        <div className="img-div w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-5">
          <div className="overflow-hidden absolute bottom-20">
            <h1 className='text-2xl font-extrabold text-green-300 '>Explore,Buy and read all kinds of books</h1> 
          </div>


           <Link to={'/register'}>
              <button className='text-white bg-green-500 border-none outline-none cursor-pointer p-2 text-xl rounded-md'>Sign-Up</button>
           </Link>
          </div>
        </div>
        <div className="form-div w-full h-full items-center justify-start flex flex-col ">
          <div className="w-full flex items-center flex-col gap-2">
            <img className='w-[150px] h-[150px] ' src={Logo} alt="logo" />
            <h4 className='text-xl '>Welcome !</h4>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="forms flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-start gap-1">
                <label className='text-black block py-1 text-xl' htmlFor="Username">Username</label>
                <div className="flex gap-2 p-2 bg-white">
                  <FaUser/>

                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <label className='text-black block py-1 text-xl' htmlFor="Password">Password</label>
                <div className="flex gap-2 p-2 bg-white">
                 <FaUnlockKeyhole />

                </div>
              </div> <br />

              <Link className='w-[70%]' to={'/dashboard'}>
                <button className=' self-center text-white flex items-center justify-evenly w-[80%] m-auto bg-green-500 outline-none rounded-lg cursor-pointer text-xl px-3 py-2'>
                  Sign-in
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
