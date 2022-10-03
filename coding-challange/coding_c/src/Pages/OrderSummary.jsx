import React from 'react'
import "./OrderSummary.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"
import { useContext } from "react";

const OrderSummary = () => {
    const { cart } = useContext(CartContext);
    const { handleRemove } = useContext(CartContext)


    const [cartitem, setcartitem] = useState([])

    useEffect(() => {

        getData()
    }, [])

    function handledelete(id) {
        console.log("deleted")
        fetch(`http://localhost:3004/cart/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) => {


            })
        })
        setcartitem([...cartitem])
    }


    async function getData() {
        const data = await fetch("http://localhost:3004/cart").then(d => d.json());
        setcartitem(data);
        //  console.log(data);
    }
    return (
        <div>
            <div className="cart_atharva">
                <h2 className="carthead_at">SHOPPING</h2>
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
                                                <div>{1}</div>
                                                <div>{e.price}</div>
                                            </div>

                                        </div>
                                        <br></br>
                                        <hr></hr>
                                        <button onClick={() => {
                                            //  handledelete(e.id)


                                            handleRemove(e.price);
                                            console.log(e.price)
                                            fetch(`http://localhost:3004/cart/${e.id}`, {
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