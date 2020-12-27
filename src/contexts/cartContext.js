import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {
    const [items, setItems] = useState([]);

    function addItem(newItem){
        if(checkItem(newItem) === false){
            const newItems = [...items, newItem];
            setItems(newItems);
            console.log(newItems);
            console.log('Item added: ' + newItem.title);
        }else{
            const newList = [...items];
            newList.map(item => {
                if(item.id === newItem.id){
                    item.total += newItem.total;
                    return true;
                }
                return false;
            })
            setItems(newList);
            console.log('Item updated: ' + newItem.title);
        }
    }

    function checkItem(item){
        const some = i => i.id === item.id;
        if(items.some(some)){
            return true;
        }
        return false;
    }

    function removeItem(item){
        if(item.total === 1){
            const newItems = items.filter(i => i.id !== item.id);
            setItems(newItems);
            console.log('Item removed');
        }else{
            const newList = [...items];
            newList.map(i => {
                if(i.id === item.id){
                    i.total -= 1;
                    return true;
                }
                return false;
            })
            setItems(newList);
            console.log('Item removed');
        }
    }

    function clearItems(){
        setItems([]);
    }

    function getSize(){
        let a = 0;
        items.map(i => (a += i.total))
        return a;
    }

    return <CartContext.Provider value={{items, addItem, removeItem, size: getSize(), clearItems}}>
        {children}
    </CartContext.Provider>
}