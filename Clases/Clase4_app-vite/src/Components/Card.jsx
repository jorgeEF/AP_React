import React from "react";
import "./Card.css"

export const Card = ({img,title,price,condition,free_shipping, id}) => {

    return(
        <div className="container-card">
            <img src={img} alt="" />
            <div className="product-details">
                <h2>{title}</h2>
                <p><span>Precio: {price}</span></p>
                <p><span>Condición: {condition}</span></p>                
                <p><span>{free_shipping && <p className="free-shipping">Free Shipping</p>}</span></p>
            </div>
            
        </div>
    )
}