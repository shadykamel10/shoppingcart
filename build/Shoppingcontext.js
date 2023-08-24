import React, { createContext, useState} from 'react'
import { products } from './product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
    return cart;
}
 export const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };

const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
  };
const remove = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
};
const contextValue = {cartItems,addToCart,remove,updateCartItemCount};

return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>}