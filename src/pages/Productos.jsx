import logo from '../logo.svg';
import React from 'react';
import products from '../data';


const Productos = () => {
    return(
        <div className="section m-5">
        <hr></hr>
    <h2>
         Hola soy los productos
    </h2>
        <hr></hr>
        <div className='products'>
                {products.map((product) =>{
                    return (
                    <article key={product.id}>
                        <h5>{product.name}</h5>
                        <img src={product.image} alt={product.name} />
                    </article>
                    );
                })}
            </div>

   
   
    <img src={logo} alt="logo" />
    </div>
    )
}

export default Productos;