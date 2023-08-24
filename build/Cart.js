import React from 'react'
import { products } from './product'
import Banana from './cart-items'
import { useContext } from 'react'
import { ShopContext } from './Shoppingcontext'
const Cart = (props) => {
    const {  cartItems} = useContext(ShopContext);
  return (
    <div>
        {products.map((product)=> {if(cartItems[product.id] !== 0) {
            return <Banana data={product}/> 
        }
        })}
    </div>
)};

export default Cart;
