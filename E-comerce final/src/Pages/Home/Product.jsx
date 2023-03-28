import React, { useContext } from 'react'

import homeContext from "../../context/context"

const Product = (props) => {

  const {addItems , cartgames  } = useContext(homeContext)
    const {id,productName,price,productImage,description ,Reviews} = props.data

    const cartAmount = cartgames[id]
  return (
    <div className='products'>
        <img src={productImage} alt=''/>
        <div className='description'>
          <p><b>{productName}</b></p>
          <p>₹{price}</p>
          <h3><u> About</u></h3>
          <p>{description}</p>
          <h3><u>Reviews</u></h3>
          <p>{Reviews}</p>
          <button className='cartButton' onClick={()=>addItems(id)}>
            Add to Cart
            {
              cartAmount>0 && <> ({cartAmount}) </>
            }
            </button>
        </div>
    </div>
  )
}

export default Product