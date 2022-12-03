import React,{useContext,useState} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';


const Cart = (props) =>{
    const [quantity , setQuantity] = useState(1)

    const cartctx = useContext(CartContext)
    // let updateItem = 0
    const existingItems = [...cartctx.items];

    let amt = 0;

    cartctx.items.forEach(item =>{
        amt += Number((item.price)*(item.quantity));
    })
   
    const addmealqnty = (item) =>{
       
    //   console.log('item add', item)
    //   console.log(item.quantity)
      const itemIdx = existingItems.findIndex((i) => i.id === item.id);
      console.log('item id',existingItems[itemIdx].quantity)
      const updateitem = existingItems[itemIdx].quantity++;
      setQuantity(updateitem);
      console.log('updated',updateitem)


    }
   
    const removemealqnty = (item) =>{

        const itemIdx = existingItems.findIndex((i)=>i.id===item.id);
        console.log(itemIdx , 'itemidx')

        if(item.quantity < 0){
            return;
        }

        if(item.quantity > 0){
            const updateitem = existingItems[itemIdx].quantity--;
            setQuantity(updateitem);
        }

       
        if(existingItems[itemIdx].quantity === 0){
            cartctx.removeItem(item);
        }
      }

    let totalAmount = 0
    const cartItem =( <ul className={classes['cart-items']}>{
        
   cartctx.items.map((item)=>(
   
    <li className={classes.upperlist} key={item.id} id = {item.id}>
      
          <div>
            <h2>{item.name}</h2>
          </div>

        <div className={classes.itemlistcontainer}>
         <div>
            <span>
                {`$${item.price}`}
            </span>
            <span> {`x${item.quantity}`}</span>
         </div>

         <div>
           <button className={classes.addbtn} onClick={() => addmealqnty(item)} >+</button> &nbsp;
           <button className={classes.removebtn} onClick={() => removemealqnty(item)} >-</button>
         </div>
       </div>
       <hr></hr>


        {/* Name: {item.name} || Price: {item.price} || Quantity: {item.quantity} 
        <button>+</button>
        <button>-</button> */}
        </li>
    
    ))}
    </ul>
    );

    //Adding total amount of items
    cartctx.items.map((item)=>{
        totalAmount = totalAmount + item.price
        console.log(totalAmount)
    })


    return (
    <Modal>
        {cartItem}

        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{amt.toFixed(2)}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onCloseCart}>close</button>
            <button className='{classes.button'>Order</button>
        </div>
    </Modal>
    )
}

export default Cart;