import React,{useContext} from 'react';
import homeContext from "../../context/context";

 const CartItem = (props) => {
  
  const { cartgames ,addItems ,removeItems  } = useContext(homeContext)
    const {id,productName,price,productImage} = props.data
  return (
    <div className='cartItem'>
        <img src={productImage} alt=""/>
        <div className='descript'>
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
            <div className='countincdec'>
            <button onClick={()=>removeItems(id)}>-</button>
             
              <input value={cartgames[id]}/>
              <button onClick={()=>addItems(id)}>+</button>
             
            </div>
        </div>
    </div>
  )
}


export default CartItem
