import React,{useContext} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'
import CartContext from '../../../store/CartContext';

const MealItemForm = (props) =>{

  const cartcntxt = useContext(CartContext);
    console.log('reintialized cartcntx',cartcntxt)
    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById('amount_' +props.id).value;
        // console.log(quantity, '----quantity')
        cartcntxt.addItem({...props.item, quantity: quantity})
        // console.log('after addItemToCart', cartcntxt);
    }
    return(
        <form className={classes.form}>
            <Input label='Quantity' input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }} />
            <button onClick={addItemToCart}>+Add</button>
        </form>
    )
};
export default MealItemForm;