import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const GoToMenu = () => {
    const navigate=useNavigate()
    const handleGo=()=>{
        navigate("./menu")
    }
    return (
        <>
            <div style={{ margin: "auto" ,paddingTop:"20%"}}>
                    <div>
                        <p style={{fontSize:"300%"}}>Welcome to Food's <br /> Kitchen</p>
                    </div>
                    
                    <button onClick={handleGo} style={{padding:"5px",backgroundColor:"blue",border:"none",color:"white"}}><b>GO TO MENU</b></button>
            </div>
        </>
    )
}

export default GoToMenu