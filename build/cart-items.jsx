import React, {useContext} from 'react'
import { ShopContext } from './Shoppingcontext'
import {Card,Button} from "react-bootstrap"
const Banana = (props) => {
    const {id ,Name,price,  image } = props.data;
    const {  cartItems,addToCart,remove,updateCartItemCount,  } = useContext(ShopContext);
  return (
    
      <Card style={{display:'inline-block',margin:"10px",textAlign:"center",marginLeft:"50px",marginTop:"100px" }}>
      <Card.Img variant="top" src={image} style={{width:"100%", height:"100px"}}/>
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <div>
        <Button onClick={() => remove(id)}>-</Button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
        <Button onClick={() => addToCart(id)}>+</Button>
     </div>
      </Card.Body>
    </Card>
    
  )
}

export default Banana
