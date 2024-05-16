import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { SignupPage } from './Pages/SignupPage'
import { Loginpage } from './Pages/Loginpage'
import { Homepage } from './Pages/Homepage'
import { ForgetPassPage } from './Pages/ForgetPassPage'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Loginpage />} />
          <Route path='/register' element = {<SignupPage />} />
          <Route path='/dashboard' element = {<Homepage />} />
          <Route path='/forgotPassword' element = {<ForgetPassPage />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App