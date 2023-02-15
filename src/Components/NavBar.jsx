import React from 'react'
import "./CSS/NavBar.css"
import { FaShoppingCart } from "react-icons/fa";
import  Json_data from "../Constants/data.json"
import {  useSelector } from "react-redux";

const NavBar = () => {
  const cartItem = useSelector((state) => state.cart);
  return (
    <>
    <div className="navbar">

        <div className="logo">
            <h2> E-Commerce</h2>
        </div>
        <div className="cart">
            <FaShoppingCart></FaShoppingCart>
            <p style={{margin:0}}>{cartItem.length}</p>
        </div>

    </div>
    </>
  )
}

export default NavBar