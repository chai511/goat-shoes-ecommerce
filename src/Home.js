import React from "react";
import ProductList from "./components/ProductList";
import Scroll  from "./components/Scroll";
import Header from "./Header";
import { useStateValue } from "./components/StateProvider";

function Home({email,searchChange,buttonClick,cartAction,checkout}) {
    const [currentstate,dispatch] = useStateValue();
    const filteredshoes = currentstate.shoes.filter(shoe =>{
      return shoe.name.toLowerCase().includes(currentstate.searchfield.toLowerCase());
    });
    return !currentstate.shoes.length ?
      <h1>Loading...</h1> :
     (
        <React.Fragment>
        <Header email={email} searchChange={searchChange} buttonClick={buttonClick} shoppingcart_count={currentstate.shoppingcart_count}></Header>
        <Scroll>
        <ProductList shoes={filteredshoes} cartAction={cartAction} checkout={checkout}/>
        </Scroll>
        </React.Fragment>
    )
}

export default Home;
