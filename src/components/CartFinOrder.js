import React from "react";

function CartFinOrder(props) {
    const { id } = props;
    return <div  className={"row"}>
                <div className={"col-md-3"}></div>
                <div className={"col-md-6 text-center mx-auto p-5"}>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Felicitaciones!</h4>
                        console.log('id')
                        <p>Su orden ha sido generada con el ID: <b>{ id }</b></p>
                    </div>
                </div>
            <div className={"col-md-3"}></div>
            </div>;
}

export default CartFinOrder;