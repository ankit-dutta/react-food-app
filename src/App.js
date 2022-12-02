import react,{useState} from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartVisible , setCartVisible] = useState(false);

  const showCartHandler =()=>{
    setCartVisible(true)
  }

  const hideCartHandler =() =>{
    setCartVisible(false)
  }

  return (
    <CartProvider >
  { cartVisible && <Cart onCloseCart = {hideCartHandler}/>}
      <Header onshowCart = {showCartHandler} />

      <main>
          <Meals />
      </main>
      
    </CartProvider>
  );
}

export default App;
