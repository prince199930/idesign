import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/action'
import Cards from '../cards/Cards'



function Home() {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const [filteredData, setFilteredData] = useState(product)


  const AllData = () => {
    axios("https://dummyjson.com/products?limit=100").then((res) => dispatch(getProducts(res.data.products)))
  }

  useEffect(() => {
    AllData()
  }, [])
  const filterList = (catItem) => {
    axios(`https://dummyjson.com/products/category/${catItem}`).then((res) => setFilteredData(res.data.products))

  }
  const [name, setName] = useState('')
  useEffect(() => {

    setFilteredData([...product])

  }, [product])
  const onSearch = (e) => {
    setName(e.target.value)
    console.log(e.target.value)
    setFilteredData(product.filter((items) => items.brand.toLowerCase().includes(e.target.value.toLowerCase())))
  }



  const calcutingLease = (value) => {
    switch (value) {
      case 'notSort':
        return setFilteredData(product);
        break;
      case "price":
        var newCaclculation = filteredData.sort((a, b) => {
          return a.price - b.price
        })
        console.log(newCaclculation)
        setFilteredData([...newCaclculation])
        break;
      case "rating":
        var newCaclculation = filteredData.sort((a, b) => {
          return a.rating - b.rating
        })
        console.log(newCaclculation)
        setFilteredData([...newCaclculation])
        break;
      case "discountPercentage":
        var newCaclculation = filteredData.sort((a, b) => {
          return a.discountPercentage - b.discountPercentage
        })
        console.log(newCaclculation)
        setFilteredData([...newCaclculation])
        break;
      case "m":
        setFilteredData({ ...newCaclculation });
        break;


    }

  }

  return (
    <>
      <div>

        <div>

          <select style={{ marginLeft: "350px", marginRight: "auto", marginBottom: "10px", border: "none", padding: "4px", borderRadius: "8px", boxShadow: "2px 2px 2px #ccc", outline: "none" }} className='leaseopt' onChange={(e) => calcutingLease(e.target.value)}>
            <option value="notSort">notSort</option>
            <option value="rating">rating</option>
            <option value="discountPercentage">discountPercentage</option>
            <option value="price">price</option>
          </select>
          <input type="text" value={name} onChange={onSearch} placeholder='Search By Brand' style={{ marginLeft: "350px", marginRight: "auto", marginBottom: "10px", border: "none", padding: "4px", borderRadius: "8px", boxShadow: "2px 2px 2px #ccc", outline: "none" }} />

          <div style={{ display: "flex", justifyContent: "space-evenly", rowGap: "5px", columnGap: "10px" }}>
            <div>
              <b>Search By category</b>
            </div>
            <div style={{ display: "flex", rowGap: "4px", columnGap: "10px", flexWrap: "wrap" }}>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList('smartphones')}><b>smartphones</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList('laptops')}><b>laptops</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`fragrances`)}><b>fragrances</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`skincare`)}><b>skincare</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`groceries`)}><b>groceries</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`home-decoration`)}><b>home-decoration</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`furniture`)}><b>furniture</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`tops`)}><b>tops</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`womens-dresses`)}><b>womens-dresses</b></button>
              <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={AllData}><b>All</b></button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", columnGap: "5%", flexWrap: "wrap", marginLeft: "20px" }}>
            {
              filteredData?.map((items) => <Cards key={items.id} items={items} />)
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Home