import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {cartItems, subtotal, shipping, tax,total} = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  function increment(options) {
    dispatch({type:"increment",payload:options})
    dispatch({type:"calcPrice",payload:0})
  }
  function decrement(options) {
    dispatch({type:"decrement",payload:options})
    dispatch({type:"calcPrice",payload:0})
  }
  
  function deleteProduct(id) {
    dispatch({type:"deleteProduct",payload:id})
    dispatch({type:"calcPrice",payload:0})
  }
 
  return (
    <div className="cart">
      <main>
      {cartItems.length > 0? (
        cartItems.map((i) => (
          <CartItem
            name={i.name}
            id={i.id}
            price={i.price}
            imgSrc={i.imgSrc}
            qty={i.quantity}
            increment={increment}
            decrement={decrement}
            deleteProduct={deleteProduct}
          />
        ))
      ): <h1>No Items Yet</h1>}
      </main>
      <aside>
        <h2>Subtotal: ${subtotal}
        
        </h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2 id="total">Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  id,
  increment,
  decrement,
  deleteProduct
}) => {
  return (
    <div className="cart-item">
    <div className="img-price">

      <img src={imgSrc} alt="" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
    </div>
      <div className="cartqtyUpdater">
        <button onClick={ ()=>decrement({qty,id})}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment({qty,id})}>+</button>
      </div>
      <div className="del-icon">

      <AiFillDelete onClick={()=>deleteProduct(id)} />
      </div>
    </div>
  );
};

export default Cart;
