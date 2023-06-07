import React from 'react'
import './Header.css'
import SearchBox from './components/SearchBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";



function Header({email,searchChange,buttonClick,checkout}) {
  const [currentstate,reducer] = useStateValue();
  console.log('in header',currentstate)
  return (
    <div className='header'>
        <Link to="/" style={{ textDecoration:"none" }}> 
        <div className="header_logo">
        <img src={require("./assets/shoes_goat.png")} alt="Goat Shoes" height="50" width="100"></img>
        <h2 className="header_logoTitle">Goat Sneakers</h2>
        </div>
        </Link>
    
        <div className="header_search"> 
        <SearchBox name="search" searchChange={searchChange}/>
        <button className='header__searchIcon' onClick={buttonClick}>
          <i className="fa fa-search"></i></button>
        </div>
    

        <div className="header_nav">
        <Link to="/login" style={{ textDecoration:"none" }}> 
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello {currentstate.email}</span>
            <span className="nav_itemLineTwo">{currentstate.email==="Guest"?"Sign in":"Sign Out"}</span>
          </div>
        </Link > 
        <Link to="/orders" style={{ textDecoration:"none" }}> 
          <div className="nav_item">
            <span className="nav_ItemOne">Your</span>
            <span className="nav_ItemTwo">Orders</span>
          </div>
        </Link>
        <Link to="/checkout" style={{ textDecoration: "none" }}> 
          <div className="nav_itemBasket">
          <ShoppingCartIcon fontSize='large'/>
          <span className="nav_basketCount" fontSize="large" ><strong>{currentstate.shoppingcart_count}</strong></span>
          </div>
        </Link> 
        </div>
    </div>
  )
}

export default Header