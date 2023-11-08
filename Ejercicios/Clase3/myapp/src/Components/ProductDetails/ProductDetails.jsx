import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductDetails = ({producto}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.img}
            alt="Product"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">            
          <h2>{producto.name}</h2>           
          <p>{producto.description}</p>
          <p>Precio: {producto.price}</p>
          <p>SKU: {producto.sku}</p>
          <p>Cantidad disponible: {producto.stock}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}