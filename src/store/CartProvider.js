import react,{useState} from "react";
import CartContext from "./CartContext"


const CartProvider = (props) =>{

    const [items , setItems] = useState([]);

    const addItemHandler = (item) =>{
        setItems([...items , item])
            // cartContext.items.push(item);
            console.log(cartContext + "inside cart context");

    }

    const removeItem = (id) =>{

    }

    const cartContext = {
        items: items,
        totalamount: 0,
        addItem: addItemHandler ,
        removeItem: removeItem
    }

   return <CartContext.Provider value = {cartContext}>
       {props.children}
   </CartContext.Provider>
}
export default CartProvider