import React,{useContext,useState} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';


const Cart = (props) =>{
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(); 

  const cartcntx = useContext(CartContext);
  const existingItems = [...cartcntx.items]


  const cartItemDecrementHandler = (item) => {
  //   cartcntx.removeItem(id);
  //  setCartItem(cartItem => 
  //     cartItem.map((item) => id === item.id ? {...item, quantity:item.quantity - 1}:item
  //     )
  //   );

  const itemIdx = existingItems.findIndex((i) => i.id === item.id)

  if(item.quantity < 0){
    return;
}
     if(item.quantity > 0){
      const updatedList = existingItems[itemIdx].quantity--;
      setQuantity(updatedList);
     }

     if(existingItems[itemIdx].quantity === 0){
      cartcntx.removeItem(item.id);
     }

  };

  const cartItemIncrementHandler = (item) => {
    // setQuantity(qty);
    // cartcntx.addItem(cartItems => 
    //     cartItems.map((items) => id === items.id ? { quantity:items.quantity + 1}:items
    //     )
    // );  

      const itemIdx = existingItems.findIndex((i) => i.id === item.id)
      const updatedList = existingItems[itemIdx].quantity++;
      setQuantity(updatedList)


    // setCartItem(cartItems => 
    //   cartItems.map((items) => id === items.id ? {...items, quantity:items.quantity + 1}:items
    //   )
    // );
  };
    // let totalAmount = 0
    const cartItems = (
      <ul className={classes["cart-items"]}>
        {cartcntx.items.map((item) => (
          <li className={classes["cart-item"]}>
            <div>
              <h2>{item.name}</h2>
              <div className={classes.summary}>
                <span className={classes.price}>₹{item.price}</span>
                <span className={classes.quantity}>x {item.quantity}</span>
              </div>
            </div>
            <div className={classes.actions}>
              <button onClick={() => cartItemDecrementHandler(item)}>-</button>
              <button onClick={() => cartItemIncrementHandler(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    );
  
    let amt = 0;
    cartcntx.items.forEach((item)=>{
      amt += Number((item.price)*(item.quantity))
    })
  
   
  
    return (
      <Modal onClose={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>₹{amt.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onCloseCart}>
            Close
          </button>
          <button className={classes.button} onClick={props.onClose}>
            Order
          </button>
        </div>
      </Modal>
    );
  };
  
  export default Cart;