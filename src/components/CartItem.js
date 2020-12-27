import React from "react";
import {NavLink} from "react-router-dom";

function CartItem(props) {
    const { item, del } = props;
    const price = parseFloat(item.price * item.total).toFixed(2);
    return <>
        <li className="list-group-item d-flex justify-content-between align-items-center"><NavLink to={"/item/" + item.id}>
            {item.title}</NavLink> <b className={"ml-auto p-2"}>${price}</b>
            <span className="badge badge-primary badge-pill p-2">{item.total}</span><button className="btn btn-danger p-2 m-1" onClick={() => del(item)}>X</button>
        </li>
    </>
}

export default CartItem;