/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css"
import React, { useState } from 'react'
import Products from './component/productsList/Products'


export default function App() {

  const [allProduct, setAllProduct] = useState([])
  // console.log(allProduct)

  const [pname, setPname] = useState("")
  const [quantity, setQuantity] = useState("")
  const [colour, setColour] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  

  const productName = (e)=>{
    setPname(e.target.value)
  }
  const productQuantity = (e)=>{
    setQuantity(e.target.value)
  }
  const productColour = (e)=>{
    setColour(e.target.value)
  }
  const productPrice = (e)=>{
    setPrice(e.target.value)
  }
  const productDescription = (e)=>{
    setDescription(e.target.value)
  }
  // console.log(pname, quantity, colour, price, description)

  const submitHandeler = (e)=>{
    e.preventDefault()

    const productPush = {
        pname,
        quantity,
        colour,
        price,
        description
    }
    setAllProduct([...allProduct, productPush])
    inputClear()
  }
   // console.log(allProduct)
   
   const inputClear = ()=>{
    setPname("")
    setQuantity("")
    setColour("")
    setPrice("")
    setDescription("")
   }
   const deleteList =(index)=>{
    const remove = allProduct.filter((a, i)=> i !==index )
    setAllProduct(remove)
    
   }
  
  

  return (
    <div className="allSystem">
      <form className="products" onSubmit={submitHandeler}>
        <h5>Product Name:</h5>
        <input onChange={productName} value={pname} type="text" placeholder='Product Name' required/><br />
        <h5>Product Quantity:</h5>
        <input onChange={productQuantity} value={quantity} type="text" placeholder='Product Quantity' required />
        <h5>Product Colour:</h5>
        <select onChange={productColour} value={colour} name="" id="" required>
          <option value="">Choise Colore</option>
          <option value="ret">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <h5>Product Price:</h5>
        <input onChange={productPrice} value={price} type="number" placeholder='Product Price' required/>
        <br/>
        <h5>Write Your Describtion</h5>
        <textarea onChange={productDescription} value={description} cols="39" rows="5" required/>
        <br/>
        <button type='submit'>Order Confirm</button>
        </form>

        <table className="table">
          <thead className="newItem">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Colour</th>
              <th>Price</th>
              <th>description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {
             allProduct.map((submitHandeler, index)=>(
               <Products key={index} index={index} allProductProps={submitHandeler} deleteList={deleteList}/>
             ))
           }

          </tbody>
        </table>
        
    </div>
  )
}
