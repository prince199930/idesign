import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards({ items }) {

  const { title, id, images, description, brand, price, rating, discountPercentage } = items
  return (
    <>
      <div className="card">
        <Link to={`/products/${id}`}>
          <div className="card__image">
            <img alt="title" src={images[0]} />
          </div>
        </Link>
        <div className="card__copy">
          <h3>{title}</h3>
          <h2>27 October, Noon.</h2>
          <p className="desc">
            {description}
          </p>
          <p >
            <b>Brand : </b>
            {brand}
          </p>
          <p >
            <b>Price : </b>
            {price}
          </p>
          <p >
            <b>Rating : </b>
            {rating}⭐
          </p>
          <p >
            <b>Discount :</b>
            {discountPercentage}
          </p>
        </div>
      </div>
    </>
  )
}

export default Cards






