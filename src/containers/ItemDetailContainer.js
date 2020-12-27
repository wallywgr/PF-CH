import '../assets/ItemDetCont.css';
import React, {useEffect, useState} from "react";
import ItemDetail from "../components/ItemDetail";
import ItemDetSkeleton from "../components/ItemDetSkeleton";
import { useParams } from "react-router-dom";
import {getFirestore} from "../firebase";

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loadState, setLoadState] = useState(true);
    const [errorState, setErrorState] = useState(false);

    useEffect( () =>{
        const db = getFirestore();
        const item = db.collection("items").doc(id);
        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    setErrorState(true);
                }
                setItem({ id: id, ...doc.data() });
                setLoadState(false);
            })
            .catch(setErrorState(true))
            .finally();
    }, []);

    return (
        <div className={"col-lg-12 home"}>
            <div className={"col-md-9 mx-auto p-5"}>
                {loadState ? <ItemDetSkeleton /> : <ItemDetail item={item}/>}
            </div>
        </div>
    );
}

export default ItemDetailContainer;