import React from 'react';
import '../assets/ItemList.css';
import Item from "./Item";

function ItemList(props){
    const { items } = props;

    return (
        <div className="row row-cols-1 row-cols-md-3">
            {items.map(item =>
                <Item key={item.id} item={item}/>
            )}
        </div>
    );
}

export default ItemList;