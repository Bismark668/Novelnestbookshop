import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home/Home.jsx'
import Product from '../home/library/Product.jsx'

function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/Login' element={<Login />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/Product' element={<Product />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter