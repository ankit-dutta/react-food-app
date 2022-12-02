import react,{useState} from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";


function App() {

  const [cartVisible , setCartVisible] = useState(false);

  const showCartHandler =()=>{
    setCartVisible(true)
  }

  const hideCartHandler =() =>{
    setCartVisible(false)
  }

  return (
    <>
  { cartVisible && <Cart onCloseCart = {hideCartHandler}/>}
      <Header onshowCart = {showCartHandler} />

      <main>
          <Meals />
      </main>
      
    </>
  );
}

export default App;
