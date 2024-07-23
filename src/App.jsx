import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { SignupPage } from './Pages/SignupPage'
import { Loginpage } from './Pages/Loginpage'
import { Homepage } from './Pages/Homepage'
import { ForgetPassPage } from './Pages/ForgetPassPage'
import { LandinPage } from './Pages/LandinPage'
import { BookPage } from './Pages/BookPage'

function App() {
  return (
    <>     
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<LandinPage />}/>
          <Route path='/login' element = {<Loginpage />} />
          <Route path='/register' element = {<SignupPage />} />
          <Route path='/dashboard' element = {<Homepage />} />
          <Route path='/book/:id' element ={<BookPage />}/>
          <Route path='/forgotPassword' element = {<ForgetPassPage />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App