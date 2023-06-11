import React, { useEffect } from 'react';
import './App.css';
import Home from '../Home';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../components/Login';
import Header from '../Header';
import Checkout from '../components/Checkout';
import { useStateValue } from "../components/StateProvider";
import PaymentGateWay from '../components/PaymentGateWay';
import Orders from '../components/Orders';

  function App({updateEmail}){
    const [initialState,dispatch]=useStateValue();

    useEffect(()=>{},[initialState]);

   const onSearchChange = (event) => {
      //initialState.searchfield= event.target.value;
      let searchfield=event.target.value
      dispatch({
        type: "ON_SEARCH_CHANGE",
        item: {
          searchfield
        }
    });
    }

    const onCheckout = (action)=>{
      dispatch({
        type: action
    });
    }
  
    const onButtonClick = () => {
      this.onSearchChange();
    }

    const cartIncrementDecrement=(name,action)=>{
      for (let i=0;i<initialState.cart.length;i++){
        if (initialState.cart[i].name===name){
        //this.setState(Object.assign(this.initialState.shoes[i],{addtoCartClicked:true}))
        initialState.cart[i].count=action==="CART_ITEM_INCREMENT"?initialState.cart[i].count+1:
        initialState.cart[i].count>0?initialState.cart[i].count-1:0;
        initialState.shoppingcart_count= action==='CART_ITEM_INCREMENT'? 
        initialState.shoppingcart_count+1:
        initialState.cart[i].count>0?initialState.shoppingcart_count-1:initialState.shoppingcart_count;
        dispatch({
          type: action,
          item: {'index':i,'cartitem':initialState.cart[i]}
      });
        break;    
      }} 
    }
  
    const cartAction=(name, action)=>{
      for (let i=0;i<initialState.shoes.length;i++){
        if (initialState.shoes[i]["name"]===name){
        //this.setState(Object.assign(this.initialState.shoes[i],{addtoCartClicked:true}))
        initialState.shoes[i].addtoCartClicked=action==='ADD_TO_CART'?true:false;
        initialState.shoppingcart_count= action==='ADD_TO_CART'? initialState.shoppingcart_count+1:initialState.shoppingcart_count-1;
        dispatch({
          type: action,
          item: {
            ...initialState.shoes[i]
          }
      });
        break;    
      }}
    }
  
   return(
      <div className="App">
      <Router>
        <Routes>        
        <Route path="/login"  element={<Login updateEmail={updateEmail} checkout={onCheckout} />}>
        </Route>
        <Route path="/checkout" element={<><Header email={initialState.email} searchChange={onSearchChange} buttonClick={onButtonClick} checkout={onCheckout}/>
        <Checkout cart={initialState.cart} cartAction={cartAction} checkout={onCheckout} cartIncrementDecrement={cartIncrementDecrement}/></>}>
        </Route>
        <Route path="/paymentgateway" element={<PaymentGateWay/>}>
        </Route>
        <Route path="/" element={ <Home email={initialState.email} searchChange={onSearchChange} buttonClick={onButtonClick}
        shoppingcart_count={initialState.shoppingcart_count} cartAction={cartAction} checkout={onCheckout} ></Home>}>    
        </Route>
        <Route path="/orders" element={ <Orders/>}>    
        </Route>
      </Routes>

    </Router>
    
    </div>)
   }


export default App;