import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';


const Cart = (props) =>{

    const cartctx = useContext(CartContext)
    let sum = 0
    const cartItem =( <ul className={classes['cart-items']}>{
   cartctx.items.map((item)=>(
    <li className={classes.upperlist}>Name: {item.name} || Price: {item.price} || Quantity: {item.quantity}</li>
    
    ))}
    </ul>
    );

    //Adding total amount of items
    cartctx.items.map((item)=>{
        sum = sum + item.price
        console.log(sum)
    })


    return (
    <Modal>
        {cartItem}

        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{sum.toFixed(2)}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onCloseCart}>close</button>
            <button className='{classes.button'>Order</button>
        </div>
    </Modal>
    )
}

export default Cart;