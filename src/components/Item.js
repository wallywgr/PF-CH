import React from 'react';
import '../assets/Item.css';
import ItemCount from "./ItemCount";
import {NavLink} from "react-router-dom";

function Item(props){
    const { item } = props;
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <NavLink to={"/item/" + item.id} className="card-link">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                </NavLink>
                <div className="card-body">
                        <h5 className="card-title"><NavLink to={"/item/" + item.id} item={item} className="card-link">{item.title}</NavLink></h5>
                        <b>${item.price}</b>
                        <p className="card-text">{item.descs}</p>

                    <ItemCount initial={1} min={1} max={10} onAdd={item} home={1}/>
                </div>
            </div>
        </div>
    );
}

export default Item;
