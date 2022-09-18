import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addProducts } from '../../actions/action'
import { useDispatch, } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const { id } = useParams()


  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data))
  }, [])

  const addProductToCart = (product) => {
    const prod = { ...product, qunatity: 1 }
    dispatch(addProducts(prod))
  }


  const { title, description, thumbnail, price, images, rating, stock } = product

  const buyNow = () => {
    if (stock < 50) {
      alert("Hurry! only a few items left")
      const prod = { ...product, qunatity: 1 }
      dispatch(addProducts(prod))
    }
    else {
      const prod = { ...product, qunatity: 1 }
      dispatch(addProducts(prod))
    }
  }

  return (
    <>

      <div style={{ display: "flex", boxShadow: "1px 1px 1px 1px #ccc", padding: "10px", columnGap: "20px", width: "800px", justifyContent: "center", alignItems: "center", margin: "auto", marginTop: "30px" }}>
        <div>
          <img alt={title} style={{ width: "200px" }} src={thumbnail} />

        </div>
        <div>
          <div>
            <h2>{title}</h2>
            <b>Description</b>
            <p>{description}</p>
            <p><b>Rs : </b>{price}</p>
            <p>{rating}⭐</p>
            <p><b>Available Stock : </b>{stock}</p>
          </div>


          <div style={{ marginBottom: "4px" }}>

            {
              images && images.map((item) => <img style={{ height: "70px", width: "70px", columnGap: "4px" }} src={item} />)
            }
          </div>
          <div>

            <button style={{ border: "none", backgroundColor: "green", color: "#fff", padding: "6px", borderRadius: "4px" }} onClick={() => addProductToCart(product)}>ADD TO CART</button>
            <Link to='/cart'><button style={{ border: "none", backgroundColor: "green", color: "#fff", padding: "6px", borderRadius: "4px", marginLeft: "4px" }} onClick={buyNow}>Buy Now</button></Link>
          </div>
        </div>

      </div>

    </>

  )
}

export default ProductDetails
