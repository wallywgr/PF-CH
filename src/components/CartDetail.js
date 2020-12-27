import React, {useState, useEffect } from "react";
import {useCartContext} from "../contexts/cartContext";
import {NavLink} from "react-router-dom";
import { getFirestore } from "../firebase";
import CartFinOrder from "./CartFinOrder";
import CartItem from "./CartItem";

function CartDetail() {
    const { items, size, removeItem, clearItems } = useCartContext();
    const [actSize, setActSize] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ emailVer, setEmailVer ] = useState("");
    const [ emailErr, setEmailErr ] = useState(false);
    const [ phone, setPhone ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const [ orderId, setOrderId ] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const emailError = handleEmail();
        if(emailError) {
            const db = getFirestore();
            const orders = db.collection("orders");
            const order = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: email,
                },
                items: items,
                date: new Date(),
                total: totalPrice,
            }
            orders.add(order).then(function (docRef) {
                order.items.map(i => {
                    const itemsList = db.collection("items").doc(i.id);
                    console.log('itemList');
                    itemsList.update({
                        stock: (i.stock - i.total)
                    })
                    return true;
                })
                console.log(docRef.id)
                setOrderId(docRef.id)
                setLoading(false)
                clearItems();
            }).catch(err => {
                console.log(err);
            });
        }
    }

    function handleEmail(){
        if(email !== emailVer){
            setEmailErr(true)
            return false;
        }else{
            setEmailErr(false);
            return true;
        }
    }



    useEffect(()=>{
        setActSize(size);
        let prePrice = 0;
        items.map(i => (prePrice += i.price * i.total));
        setTotalPrice(parseFloat(prePrice).toFixed(2));
    },[size,items])

    return (
        <div>
            {!loading ? <CartFinOrder id={orderId}/>
            : <div className={"row"}>
                <div className={"col-lg-6 p-5"}>
                    <h2>Cart List <span className="badge badge-primary badge-pill">{actSize}</span></h2>
                    <ul className="list-group-flush">
                        {items.length > 0 ? items.map(i => <CartItem key={i.id} item={i} del={removeItem}/>) :
                            <p className={"lead p-5"}>Carro vacío. Ir al <NavLink to={"/"}>Inicio</NavLink></p>}
                        <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                            <NavLink to={"#"}><b>Total</b></NavLink> <b className={"ml-auto p-2 pr-5"}>${totalPrice}</b>
                        </li>
                    </ul>
                </div>
                <div className={"col-lg-6 p-5"}>
                    <h2>Datos Personales:</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col p-3">
                                <input required={true} onChange={(e) => setName(e.target.value)} type="text"
                                       className="form-control" id="name" placeholder="Nombre"/>
                            </div>
                            <div className="col-6 p-3">
                                <input required={true} type="number" onChange={(e) => setPhone(e.target.value)}
                                       className="form-control" id="phone" placeholder="Telefono"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 p-3">
                                <input required={true} onKeyUpCapture={() => handleEmail()}
                                       onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"
                                       id="email" placeholder="Email"/>
                            </div>
                            <div className="col-6 p-3">
                                <input required={true} onKeyUpCapture={() => handleEmail()}
                                       onChange={(e) => setEmailVer(e.target.value)} type="email"
                                       className="form-control" id="email2" placeholder="Confirme Email"/>
                            </div>
                        </div>
                        <div className="text-right pt-4">
                            {emailErr ?
                                <div>
                                    <p>Los emails no coinciden!</p>
                                    <button disabled="{true}" type="submit"
                                            className="btn btn-success mt-auto">Comprar
                                    </button>
                                </div>
                                :
                                <button type="submit" className="btn btn-success mt-auto">Comprar</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
            }
        </div>
    );
}

export default CartDetail;