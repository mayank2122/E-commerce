import React from 'react';
// import products from "../product"
import {PRODUCTS} from '../../products';
import Product from './Product';
import "../../css/home.css"


const Home = () => {
  return (
    <div className='header'>
      <div className='shopTitle'><u>E Commerce Games Store</u></div>
      <div className='product'>
       {
        PRODUCTS.map((Prod)=>(
          <Product data={Prod}/>
        ))
       } 
      </div>
    </div>

  )
}

export default Home