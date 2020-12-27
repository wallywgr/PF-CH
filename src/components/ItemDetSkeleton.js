import '../assets/ItemDetail.css';
import React from "react";
import Skeleton from "react-loading-skeleton";

function ItemDetSkeleton() {
    return (
        <div className="wrapper row">
            <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                    <Skeleton width={"100%"} height={400}/>
                </div>
            </div>
            <div className="details col-md-6">
                <h3 className="product-title"><Skeleton/></h3>
                <p className="product-description"><Skeleton count={3}/></p>
                <h4 className="price"><Skeleton/></h4>
                <div className="col text-center">
                    <p><Skeleton/></p>
                    <div className="col text-center"><Skeleton/> </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetSkeleton;