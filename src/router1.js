import React from "react";
import { BrowserRouter as Router,NavLink,Routes,Route } from "react-router-dom";
import './navlink.css'
import './products.css';
import Product from "./product";
import Home from "./home";
import Member from "./member";

export default function Router1() {
    return(
        <Router>
            <nav className="nav">
                <NavLink to='/'
                className={({isActive})=> isActive ? 'active_menu' : 'menu'} 
                style={({isActive}) => {
                    return{fontWeight: isActive ? 'bold' : ''};
                }}>Home</NavLink> -&nbsp;
                <NavLink to='/products'
                className={({isActive})=> isActive ? 'active_menu' : 'menu'}>Products</NavLink> -&nbsp;
                <NavLink to='/member'
                className={({isActive})=> isActive ? 'active_menu' : 'menu'}>Member</NavLink> -&nbsp;
                <NavLink to='/contact'
                className={({isActive})=> isActive ? 'active_menu' : 'menu'}>Contact Us</NavLink>
            </nav>
            <Routes style={{margin:'20px'}}>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Product/>}/>
                <Route path='/member' element={<Member/>}/>
                <Route path='/contact' element={<h1 style={{textAlign:"center"}}>Contact Us Page</h1>}/>
                <Route path='*/' element={ <h1 style={{textAlign:"center"}}>404 Not Found</h1> }/>
            </Routes>
        </Router>
    );
}