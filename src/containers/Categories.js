import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import ItemListSkeleton from "../components/ItemListSkeleton";
import { getFirestore } from "../firebase";
import {NavLink, useParams} from "react-router-dom";

function Categories() {
    const { categoryKey } = useParams();
    const [itemList, setItemList] = useState([]);
    const [loadState, setLoadState] = useState(true);
    const [errorState, setErrorState] = useState(false);
    const [categoryId, setCategoryId] = useState(undefined);

    useEffect( () => {
        const getCollection = (itemCollection) => {
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    setErrorState(true)
                }
                setItemList(querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return {id, ...data};
                }));
            }).catch(() => {
                setErrorState(true)
            }).finally(() => {
                setLoadState(false)
            })
        }

        const getCatIdByKey = (key) => {
            const db = getFirestore();
            const catCollection = db.collection("categories");
            catCollection.where("key", "==", key)
                .get()
                .then((cat) => {
                    setCategoryId(cat.docs[0].id);
                }).catch(() => { setErrorState(true) })
        }

        const getAll = () => {
            const db = getFirestore();
            const itemCollection = db.collection("items");
            getCollection(itemCollection);
        }

        const getByCatId = (catId) => {
            catId = parseInt(catId);
            const db = getFirestore();
            const itemCollection = db.collection("items").where("categoryId", "==", catId);
            getCollection(itemCollection);
        }

        try {
            getCatIdByKey(categoryKey);
        }catch{
            setCategoryId(-1);
        }
        if(categoryId === undefined || categoryId === null || categoryId === -1){
            getAll();
        }else{
            getByCatId(categoryId);
        }
    },[categoryId, categoryKey]);
    return (
        <div className={"col-lg-12 home"}>
            <div className={"col-md-9 mx-auto p-5"}>
                {errorState ? <p className={"lead text-center"}>No hay productos que coincidan con tu búsqueda. Ir al <NavLink to={"/"}>Inicio</NavLink></p> : loadState ? <ItemListSkeleton /> : <ItemList items={itemList}/>}
            </div>
        </div>
    );
}

export default Categories;