import React,{useContext} from 'react';
import homeContext from '../../context/context';
import  {PRODUCTS}  from '../../products';
import CartItem from "./Cart-Item"
import "./Cart.css"
import {useNavigate} from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const { cartgames ,getTotal } = useContext(homeContext)
  const totalAmount = getTotal();
  const navigate = useNavigate();
  
  const onToken =(token)=>{
    console.log(token)
  }

  return (
    <div className='cart'>
      <div>Your Cart Items</div>
      <div className='cartgames'>
        {
          PRODUCTS.map((product)=>{
            if(cartgames[product.id]!==0){
              return <CartItem data={product}/>;
            }
          })
        }
      </div>
      <div className='leave'>
        <p>SubTotal :- ₹ {totalAmount}</p>
        <button className='shopping' onClick={()=>navigate("/")} >Continue Shopping</button>
        <StripeCheckout
        
        token={onToken}
        stripeKey="pk_test_51MfRKkSC1BKUwoU1R9K5nNg65ruQb4aXtEQYTCNJ9i89Oud81lwp8oRwvY32yDnhEq0ibNIywOZEYl7jas7l4YIt00kr26y2ui"
      />
      </div>
    </div>
  )
}

export default Cart