import React from 'react'
import {Product} from "./apple"
import {products} from './product'
import './App';
const Shop = () => {
  return (
    <div classname="card">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
  )
};
export default Shop
