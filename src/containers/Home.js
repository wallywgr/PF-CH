import '../assets/Home.css';
import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import ItemListSkeleton from "../components/ItemListSkeleton";
import { getFirestore } from "../firebase";
import HomeBanner from "../components/HomeBanner";
import TopHomeBanner from "../components/TopHomeBanner";

function Home({greeting}) {
    const [itemList, setItemList] = useState([]);
    const [loadState, setLoadState] = useState(true);
    const [errorState, setErrorState] = useState(false);

    useEffect( () =>{
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                setErrorState(true)
            }
            setItemList(querySnapshot.docs.map(doc =>{
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                }));
        }).catch(() => {
            setErrorState(true)
        }).finally(() => {
            setLoadState(false)
        })
    }, []);
    return (
        <div className={"col-lg-12 home"}>
            <TopHomeBanner/>
            <div className={"col-md-9 mx-auto p-5"}>
                <p className={"lead text-center mt-3"}>{ greeting }</p>
                {loadState ? <ItemListSkeleton /> : <ItemList items={itemList}/>}
                {errorState ? <p className={"lead text-center"}>No se pudo conectar al servidor.</p> : ""}
                <HomeBanner/>
            </div>
        </div>
    );
}

export default Home;