import React from "react";
import banner from "../media/img/top-home-banner_a.jpg";

function TopHomeBanner(){
    return(
        <div className={"col-lg-12 banner"}>
            <img className={"img-fluid w-100"} src={banner} alt={"Medios de pago"} />
        </div>
    )
}

export default TopHomeBanner;