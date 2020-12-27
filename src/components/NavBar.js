import React, {useEffect, useState} from 'react';
import '../assets/NavBar.css';
import CartIcon from "./CartIcon";
import logo from "../media/img/logo1.png"
import { NavLink } from 'react-router-dom';
import {getFirestore} from "../firebase";

function CatList(props){
    const { cat } = props;
    return <>
        <NavLink className="dropdown-item" to={"/categories/" + cat.key }>{ cat.title }</NavLink>
    </>
}

function NavBar() {
    const [cats, setCats] = useState([]);

    useEffect( () =>{
        const db = getFirestore();
        const itemCollection = db.collection("categories");
        itemCollection.get().then((querySnapshot) => {
            setCats(querySnapshot.docs.map(doc =>{
                const data = doc.data();
                const id = doc.id;
                return { id, ...data };
            }));
        })
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to={"/"}><img className="logo" src={logo} alt={"Tu-Autito.com"}/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div>
                    <h2>Tu-autito.com</h2>
                </div>
                <ul className="navbar-nav menu">
                    <li className="nav-item"><NavLink className="nav-link" to={"/"}>Inicio</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/about-us"}>Nosotros</NavLink></li>
                
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to={"/items/"} role="button"
                           aria-haspopup="true" aria-expanded="false">Autos</NavLink>
                        <div className="dropdown-menu">
                            {cats.map(c => <CatList key={c.id} cat={c}/>)}
                        </div>
                    </li>
                    
                    <li className="nav-item"><NavLink className="nav-link" to={"/contact"}>Contacto</NavLink></li>
                </ul>
                <CartIcon/>
            </div>
        </nav>
    );
}

export default NavBar;
