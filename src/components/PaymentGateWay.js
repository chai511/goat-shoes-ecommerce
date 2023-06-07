import React from 'react';
import Header from '../Header';
import { useStateValue } from './StateProvider';

export default function PaymentGateWay(){
    const [currentstate,dispatch]=useStateValue();
    return(
        <>
        <Header email={currentstate.email}/>
        <br/>
        <br/>
        <h2 style={{"text-align":"center"}}>Implement your Payament Gateway here!</h2>
        </>
    )
}
