import logo from '../logo.svg';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';


const About = () => {

const [personas, setPersonas] = useState([]);

    //api de mi database
   // const URL = 'http://localhost:3001/datos'; //varible local
    const URL = 'https://trabajofinalback-production.up.railway.app/datos';

    //creamos la funcion para usar el useEffect
const getPersonas = async () => { 
    try {
        const { data } = await axios.get(URL);
        setPersonas(data.personas)
       // console.log(data.personas);
    } catch (error) {
        console.error(error);
    }
}

useEffect(() =>{
  getPersonas()
}, []);

const URLd = 'http://localhost:3001/delete';

//inicializamos variables vacias para el useState
const [outputs, setOutputs] = useState({
  nombre: "",
  apellido: "",
  dni: ""
  })
 //funcion para setear las variables 
const handleChange = (e) => {
  setOutputs({
      ...outputs,
      [e.target.nombre]: e.target.value
  })
}   
//funcion del post
const handleClick = async () => {

await axios.delete(URLd, outputs)
 setOutputs({
    nombre:personas.nombre,
    apellido:personas.apellido,
    dni:personas.dni
  })
  console.log(outputs);
} 



return(
        <div className='section m-5'>
        <hr></hr>
    <h2>
          hola asi somos 
    </h2>
        <hr></hr>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th># ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI (encriptado)</th>
        </tr>
      </thead>
      <tbody>
        {personas.map(personas =>( 
        <tr>

          <td>{personas._id}</td>
          <td>{personas.nombre} </td>
          <td>{personas.apellido}</td>
          <td>{personas.dni}</td>
    <div className="text-center w-100" >
        <Button    type="submit"  variant="danger"  
          onClick={handleClick}  value={outputs[personas]}  onChange={handleChange}
         >
        Eliminar
      </Button>
    </div>    
        </tr>)
        )}
      </tbody>
      
    </Table>

       
   
   
    <img src={logo} alt="logo" />
    </div>
    
    )
}



export default About;