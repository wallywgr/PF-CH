import React, { useState } from 'react';
import '../assets/ItemCount.css';
import BuyBtn from "./BuyBtn";

function ItemCount(props){
    // Declaro props
    const { initial, min, max, onAdd, home } = props;

    // Declaro contador
    const [itemNumber, setItemNumber] = useState(initial);

    return(
        <div className="col text-center m-2">
            <p>
                <button className="btn btn-dark ml-auto" onClick={() => setItemNumber(itemNumber + 1)} disabled={itemNumber === max}>+</button>
                <b value={itemNumber} className="m-4">{itemNumber}</b>
                <button className="btn btn-dark mr-auto" onClick={() => setItemNumber(itemNumber - 1)} disabled={itemNumber === min}>-</button>
            </p>
            <BuyBtn onAdd={onAdd} count={itemNumber} home={home}/>
        </div>
    )
}

export default ItemCount;
