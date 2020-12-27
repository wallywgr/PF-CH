import React from "react";
import Skeleton from 'react-loading-skeleton';


function ItemListSkeleton() {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
                <div className="card">
                    <Skeleton width={"100%"} height={200}/>
                    <div className="card-body">
                        <h5 className="card-title"><Skeleton/></h5>
                        <p className="card-text"><Skeleton count={3}/></p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <Skeleton width={"100%"} height={200}/>
                    <div className="card-body">
                        <h5 className="card-title"><Skeleton/></h5>
                        <p className="card-text"><Skeleton count={3}/></p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <Skeleton width={"100%"} height={200}/>
                    <div className="card-body">
                        <h5 className="card-title"><Skeleton/></h5>
                        <p className="card-text"><Skeleton count={3}/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemListSkeleton;