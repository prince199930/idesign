
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../../actions/action'
import { incQuan, decQuan } from '../../actions/action'
import { addOrders } from '../../actions/action'
import './Cart.css'
import { BsFillArchiveFill } from "react-icons/bs";
const Cart = () => {

  const cart = useSelector(state => state.cart)



  const dispatch = useDispatch()
  const clearAll = () => {
    dispatch(clearCart())
  }
  const IncQuan = (key) => {
    dispatch(incQuan(key))
  }

  const DecQuant = (key) => {
    if (cart[key].qunatity < 1) {
      return
    }
    dispatch(decQuan(key))
  }
  const Total = cart.length && cart.reduce((acc, item) => acc + item.price * item.qunatity, 0)

  useEffect(() => {
    if (Total === 0) {
      dispatch(clearCart())
    }
  }, [Total])

  const tom = new Date()
  tom.setDate(tom.getDate() + 1)

  const submit = () => {
    const myOrder = {
      today: tom.toDateString(),
      items: cart,
      totalValue: Total
    }

    dispatch(addOrders(myOrder))
    dispatch(clearCart())


  }


  return (
    <div>

      <h2>My Cart</h2>

      <h3>Total Amount  {Total.toFixed(2)}</h3>

      {
        cart &&
        cart.map((data, i) => {

          return (<div key={data.id} style={{
            display: "flex",
            width: "800px",
            margin: "auto",
            padding: "15px",
            boxShadow: "2px 1px 1px 1px #ccc",
            columnGap: "18px",
          }}>
            <div>
              <img alt={data.title} style={{ width: "100px" }} src={data.thumbnail} />
            </div>
            <div>
              <div>
                <b>{data.title}</b>
                <p className='desc'>{data.description}</p>
                <p>Rs: {data.price}</p>

              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', textAlign: 'center', columnGap: "8px", }}>
                <button style={{ backgroundColor: "#fff", border: "none", borderRadius: "15px", height: "30px", width: "30px", boxShadow: "2px 2px 2px #ccc" }} onClick={() => DecQuant(i)}>➖</button>
                <p>{data.qunatity}</p>
                <button style={{ backgroundColor: "#fff", border: "none", borderRadius: "15px", height: "30px", width: "30px", boxShadow: "2px 2px 2px #ccc" }} onClick={() => IncQuan(i)}>➕</button>

                <BsFillArchiveFill onClick={clearAll} />

              </div>
            </div>

          </div>)
        })
      }
      <Link to="/payment">
        <button style={{ display: cart.length === 0 ? "none" : "", border: "none", marginLeft: "420px", marginTop: "10px", boxShadow: "2px 2px 2px #ccc", padding: "10px", borderRadius: "4px", backgroundColor: "green", color: "#fff" }} onClick={submit}>Payment
        </button>
      </Link>
    </div>

  )
}

export default Cart
