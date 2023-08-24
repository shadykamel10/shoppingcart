import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import {ShopContext} from "./Shoppingcontext.js";
import './App.css'

export const Product = (props) => {
  const { id, Name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id]
  return (
    <>
    <Card style={{display:'inline-block',margin:"10px",textAlign:"center",marginLeft:"50px",marginTop:"100px" }}>
      <Card.Img variant="top" src={image} style={{width:"100%", height:"100px"}} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
        $ {price}
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(id)}>Add to card 
        {cartItemsAmount > 0 &&  <>({cartItemsAmount})</>}</Button>
      </Card.Body>
    </Card>
    </>

  );
};

export default Product;
