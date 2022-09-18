import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../orderItem/OrderItem'
import { FcApproval } from "react-icons/fc";

function Payment() {
    const order = useSelector(state => state.order)

    return (
        <>
            <h2>Order Details</h2>
            <h2 style={{marginLeft:"280px",display:order.length<=0?"none":"" }}>Order Placed Successfully <FcApproval/></h2>
            <div style={{ flexDirection:"column", width: "480px",marginLeft:"auto", marginRight:"auto", padding:"10px", boxShadow:"2px 2px 2px 2px #ccc", borderRadius:"8px", display:order.length<=0?"none":"flex"  }}>
                
                {order.map((item) => <>
                    <div  style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <div>
                            <p><b>Total Amount: </b>{item.totalValue}</p>
                            <p><b>Delivery Date: </b> {item.today}</p>
                        </div>
                        <div>
                            <OrderItem key={item.items.id} item={item} />
                        </div>
                       
                    </div>
                    <hr style={{height:"1px", width:'450px', color:"#ccc"}}></hr>
                </>)}
            </div>
        </>
    )
}

export default Payment