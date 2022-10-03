import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoodItems from '../Pages/FoodItems'
import GoToMenu from '../Pages/GoToMenu'
import Login from '../Pages/Login'
import OrderSummary from '../Pages/OrderSummary'
import SignUp from '../Pages/SignUp'
import ThankYou from '../Pages/ThankYou'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    

    <Routes>
        <Route path='/' element={<GoToMenu/>}/>
        <Route path='/menu' element={<PrivateRoute><FoodItems/></PrivateRoute>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ordersummary' element={<PrivateRoute><OrderSummary/></PrivateRoute>}/>
        <Route path='/ordersummary/checkout' element={<PrivateRoute><ThankYou/></PrivateRoute>}/>

    </Routes>
    
    
  )
}

export default AllRoutes