import '../assets/CartIcon.css';
import React, {useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import {useCartContext} from "../contexts/cartContext";

function CartIcon() {
    const { size } = useCartContext();
    const [actSize, setActSize] = useState(0);
    useEffect(()=>{
        setActSize(size);
    }, [size])
    return (
        <NavLink to={"/cart"} className="ml-auto"><i className="fas fa-shopping-cart"><span
            className="badge badge-dark m-1">{actSize}</span></i></NavLink>
    );
}

export default CartIcon;