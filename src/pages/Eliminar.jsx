/* import logo from '../logo.svg';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Eliminar= () => {

    const [ setPersonas] = useState();
  //  const URL = 'http://localhost:3001/delete';
 
    const eliminarPersonas = async () => { 
    try {
       
       const { nombre } = await axios.delete(URL)
       setPersonas(nombre.personas)
       console.log(nombre.personas);
       // eliminarPersonas(borrar)
       
    } catch (error) {
        console.error(error);
    }

}

useEffect(() =>{
    eliminarPersonas();
  });




    return(
        <div className='section m-5'>
        <hr></hr>
    <h2>
         Usuario eliminado!
    </h2>
        <hr></hr>
        <img src={logo} alt="logo" />
    </div>
    
    )
}



export default Eliminar;

 */
