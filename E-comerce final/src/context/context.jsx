import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

const HomeContext = createContext(null)


const defaultCart = ()=>{
  let cart = {};

  for(let i=1;i<PRODUCTS.length+1;i++){
    cart[i]=0;
}
return cart;
}


  export const HomeContextProvider = (props) => {

  
  const [cartgames ,setCartGames] = useState(defaultCart())

  const getTotal =()=>{
    let total = 0;

    for(const item in cartgames){
       if(cartgames[item]>0){
        let info = PRODUCTS.find((products) => products.id === Number(item))
        total += cartgames[item] * info.price
       }
    }
    return total;
  }

  const addItems = (itemId)=>{
    setCartGames((prev)=>({...prev , [itemId]:prev[itemId]+1}))
  }
  const removeItems = (itemId)=>{
    setCartGames((prev)=>({...prev , [itemId]:prev[itemId]-1}))
  }

  const valueContext = {cartgames,addItems,removeItems,getTotal}
  return (
    <HomeContext.Provider value={valueContext}>{props.children}</HomeContext.Provider>
  )
}
 

 export default HomeContext



