import React from 'react';

function ContactDetail() {
    return (
        <div className={"row"}>
            <div className={"row p-5"}>
                <div className={"col-lg-12 p-3"}>
                    <h2>Contactenos</h2>
                </div>
                <div className={"col-lg-6"}>
                    <iframe title={"Google maps"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.1688348948264!2d-58.27002338505002!3d-37.85633977974464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959aaf3ab2d2885f%3A0x2084aa256d8a8f17!2sAv.%20Centenario%201251%2C%20Balcarce%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1588033122948!5m2!1ses!2sar"
                        width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""
                        aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className={"col-lg-6"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu accumsan nisl. Nulla non orci eros. Mauris magna ipsum, fringilla non molestie eu, dapibus commodo massa. Vivamus dapibus cursus maximus. Nam dapibus sem vel bibendum consequat. Etiam porttitor hendrerit ex, at auctor nisi dictum non. Donec fringilla pulvinar eros, vitae rutrum est lobortis id. Vivamus fermentum, leo ac condimentum ullamcorper, lectus nisl accumsan metus, in hendrerit tellus magna sit amet quam.</p>
                    <p>Nuestras vías de contacto son:</p>
                   <ul>
                       <li>Teléfono: 2266 999999</li>
                       <li>Email: <a href={"mailto:contacto@tu-autito.com"}>contacto@tu-autito.com</a></li>
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;
