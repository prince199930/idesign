import React from 'react'

function OrderItem({ item }) {
  return (
    <div>
      {item.items.map((ob, i) => 
      <div key={i}>
         <img alt={ob.title} style={{width:"100px"}} src={ob.thumbnail}/>
        <p><b>Product Name : </b>{ob.title}</p>
        <p><b>Quantity :</b> {ob.qunatity}</p>
      </div>
      )}
    </div>
    
  )
}

export default OrderItem