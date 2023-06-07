import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import shoes from './containers/goat-shoes';
import 'tachyons';
import reducer from './components/reducer';
import { StateProvider } from "./components/StateProvider";

const initialState = {
    shoes: shoes,
    searchfield: '',
    shoppingcart_count:0,
    email:"Guest",
    cart:[]
    }

    var shoes_data=[]

const populateShoesData=()=>
    {
      shoes_data=[]
      for (let i=0;i<shoes.length;i++){
        shoes_data.push({'id':shoes[i]["id"],'name':shoes[i]["name"],
        'pic':shoes[i]["grid_picture_url"],'price':shoes[i]["retail_price_cents"],
      'addtoCartClicked':false})
      }
    }

const updateEmail=(mail)=>{
     initialState.email=mail.split("@")[0];
   }

const root = createRoot(document.getElementById('root'));
populateShoesData();
initialState.shoes=shoes_data;
const export_initiaState=JSON.parse(JSON.stringify(initialState));
root.render(
<StateProvider initialState={initialState} reducer={reducer} >
<App updateEmail={updateEmail}/>
</StateProvider>
);

export default export_initiaState;