import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { SignupPage } from './Pages/SignupPage'
import { Loginpage } from './Pages/Loginpage'
import { Homepage } from './Pages/Homepage'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Loginpage />} />
          <Route path='/register' element = {<SignupPage />} />
          <Route path='/dashboard' element = {<Homepage />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App