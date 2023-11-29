/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./Products.css"

export default function Products({allProductProps, deleteList, index}) {
    const {pname, quantity, colour, price, description} = allProductProps

  return (
    <>
     <tr className="itemAll">
        <td className="items">{pname}</td>
        <td>{quantity}</td>
        <td>{colour}</td>
        <td>{price}</td>
        <td>{description}</td>
        <td><button onClick={()=>deleteList(index)}>Delete</button></td>
     </tr> 
    </>
  )
}
