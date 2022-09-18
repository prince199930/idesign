import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TopBar() {
    const cart = useSelector(state => state.cart)
    return (
        <div style={{ height: "40px", boxShadow: "2px 2px 2px #ccc", marginBottom:"8px"}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", textAlign: "center", alignItems: "center" }}>
                <Link to="/" style={{ textDecoration: 'none' }}><h2 style={{ marginTop: "2px", marginLeft: "4px", color: "black" }}>IDesign Market</h2></Link>
                <div style={{ display: "flex", marginTop: "20px", flexDirection: "row" }}>
                    <p style={{ marginLeft: "700px", marginTop: "-2px" }}>{cart.length > 0 ? cart.length : ""}</p><Link to='/cart'><MdShoppingCart style={{ marginTop: "-24px", marginRight: "15px", color: "black" }} /></Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar