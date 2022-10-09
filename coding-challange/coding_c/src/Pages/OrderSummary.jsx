import React from 'react'
import "./OrderSummary.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"
import { useContext } from "react";
import Navbar2 from '../Components/Navbar2'

const OrderSummary = () => {
    const { cart } = useContext(CartContext);
    const { handleRemove } = useContext(CartContext)


    const [cartitem, setcartitem] = useState([])

    useEffect(() => {

        getData()
    }, [])

    function handledelete(id) {
        console.log("deleted")
        fetch(`https://okfsxb.sse.codesandbox.io/cart/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) => {


            })
        })
        setcartitem([...cartitem])
    }


    async function getData() {
        const data = await fetch("https://okfsxb.sse.codesandbox.io/cart").then(d => d.json());
        setcartitem(data);
        //  console.log(data);
    }

    const handleInc=(id)=>{
        setcartitem(cartitem=> cartitem.map((item)=>
            id===item.id ? {...item , quantity:item.quantity + 1}:item
        ))
    }

    const handleDec=(id)=>{
        setcartitem(cartitem=> cartitem.map((item)=>
        id===item.id ? {...item , quantity:item.quantity - 1}:item
    ))
    }
  

    return (
        <div>
            <Navbar2/>
            <Link to="/menu"><b> &#x2190; Back</b></Link>
            <div className="cart_atharva">
                <h2 className="carthead_at">Order Summary</h2>
                <div className="cartmaincontainer_at">
                    <div className="showcartproducts_at">
                        <div className="showcartproductshead_at cartheadhead_at" >
                            <div className="itemdiv_at item_item_at"><b>Item</b></div>
                            <div className="pricequantitydiv_at">
                                <span><b>Price</b></span>
                                <span><b>Quantity</b></span>
                                <span><b>SubTotal</b></span>
                            </div>
                        </div>
                        <div>
                            {cartitem.map((e) => {
                                return (
                                    <div key={e.id} className='cartbox_full'>
                                        <div className='cartbox'>
                                            <img src={e.image}></img>
                                            <p>{e.name}</p>
                                            <div className='priceflex'>
                                                <div>{e.price}</div>
                                                <div>
                                                <div>
                                            <button className='qu' onClick={()=>handleInc(e.id)}>+</button>
                                            <button className='qu'>{e.quantity}</button>
                                            <button disabled={e.quantity===1} className='qu' onClick={()=>handleDec(e.id)}>-</button>
                                        </div>
                                                </div>
                                                <div>{e.price * e.quantity}</div>
                                            </div>

                                        </div>
                                        <br></br>
                                        <hr></hr>
                                        <button onClick={() => {
                                            //  handledelete(e.id)


                                            handleRemove(e.price);
                                            console.log(e.price)
                                            fetch(`https://okfsxb.sse.codesandbox.io/cart/${e.id}`, {
                                                method: "DELETE"
                                            })
                                            getData();


                                        }

                                        }>REMOVE ITEM</button>
                                        <hr></hr>
                                        <br></br>

                                    </div>
                                )
                            })}

                        </div>
                    </div>


                    <div className="cartdetails_at">
                        <div>
                            <h3>Summary</h3>
                        </div>
                        <span>Subtotal:</span>
                           <span >₹{cart}</span>


                        <div>
                            <Link to="./checkout"><button>Proceed To Checkout</button></Link>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default OrderSummary