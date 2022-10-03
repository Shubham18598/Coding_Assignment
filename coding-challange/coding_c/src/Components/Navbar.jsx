import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {isAuth}=useContext(AuthContext);
    return (

        <div style={{ width: "100%", backgroundColor: "blue", display: "flex" ,justifyContent:"space-between"}}>

            <div style={{ display: "flex" }}>
                <div style={{ paddingTop: "12px", paddingLeft: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z" /></svg></div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                   <Link to="/"> <h2 style={{textDecoration:"none",color:"white"}}>Food's Restaurant</h2></Link>
                </div>
            </div>
            
            {
                isAuth?(<div style={{paddingTop:"20px",paddingRight:"20px"}}>
                    <Link to="./ordersummary"><img height="40px" src="https://t4.ftcdn.net/jpg/03/18/62/29/360_F_318622912_IgyaJDXVei9YTsw2BWuJzQLxY6Mr6kDE.jpg" alt="" /></Link>
                </div>):(<div style={{ display: "flex" }}>
                <Link to="./signup"><h3 style={{paddingRight:"10px",color:"white"}}>SignUp</h3></Link>
                <Link to="/login"><h3 style={{paddingRight:"10px",color:"white"}}>Login</h3></Link>
            </div>)
            }
            

        </div>

    )
}

export default Navbar