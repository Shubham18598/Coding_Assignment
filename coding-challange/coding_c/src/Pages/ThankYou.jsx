import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const ThankYou = () => {
    return (
        <div>
            <Navbar/>
            <center >
                <div style={{paddingBottom:"20px",width:"70%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <div >
                        <center><h1>Checkout</h1></center>
                    </div>
                    
                        <p style={{paddingRight:"70%"}}>Thank you for your order.</p>
                    
                </div>
            </center>
        </div>
    )
}

export default ThankYou