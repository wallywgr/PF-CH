import React from "react";
import CartAddItem from "./CartAddItem";

function BuyItem(props){
    const { count, onAdd, home } = props;
    return (
        <div className="col text-center">
            <CartAddItem count={count} item={onAdd} home={home} />
        </div>
    );
}

export default BuyItem;