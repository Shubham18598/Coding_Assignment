import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar2 from '../Components/Navbar2';
import { CartContext } from '../context/CartContext';

const getData = async (page) => {
    try {
        let res = await fetch(
            `http://localhost:3004/data`
        );

        let data = await res.json();
        return data;
        //   console.log(data)


    } catch (err) {
        console.log(err)
    }
}

const FoodItems = () => {

    // const [count,setCount]=useState(0)
    const {handleChange}=useContext(CartContext)
    const [post, setPost] = useState([])
    useEffect(() => {
        fetchAndUpdateData()

    }, [])


    const fetchAndUpdateData = async () => {
        try {
            const data = await getData();
            setPost(data);
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <Navbar2 />
            <div style={{ display: "grid", height: "900px", width: "80%", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", margin: "auto", paddingTop: "30px" }} >
                {post.map((el) => (
                    <div key={el.id} style={{ width: "70%", border: "1px solid gray" }} >
                        <img src={el.image} width="100%" height="50%" alt="" />
                        <div>
                            <h3>{el.name}</h3>
                            <p>Price:{el.price}</p>
                            {/* {
                            count>=1?(<div>
                                <p>Total:{count}</p>
                                <p>Cost(INR):{count * el.price}</p>
                            </div>):(" ")
                        } */}
                        </div>

                        {/* <div >
                        <button onClick={()=>setCount(count+1)} style={{marginRight:"5px",height:"25px",width:"35px",backgroundColor:"blue" ,border:"none"}}>+</button>
                        <button onClick={()=>setCount(count-1)} style={{height:"25px",width:"35px",backgroundColor:"gray" ,border:"none"}}>-</button>
                    </div> */}
                        <div><button style={{backgroundColor:"rgb(63,81,181)"}} onClick={() => {
                            console.log("clicked")
                            alert("Product added to cart")

                            const data = el;
                            fetch("http://localhost:3004/cart", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(data)
                            })
                            handleChange(el.price)
//console.log(el.price)

                        }}>Add</button></div>
                    </div>
                ))

                }
            </div>

        </>
    )
}

export default FoodItems