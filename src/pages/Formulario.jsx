//import logo from '../logo.svg';
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



const Formulario = () => {

   //const URL = 'http://localhost:3001/crear'; //variable local
    const URL = 'https://trabajofinalback-production.up.railway.app/crear';
//inicializamos variables vacias para el useState
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
//funcion para setear las variables 
const handleChange = (e) => {
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
}    
//funcion del post
const handleClick = async () => {

 await axios.post(URL, inputs)
    setInputs({
        nombre: "",
        apellido: "",
        dni: ""
    })
}


    return(
        <div className="section m-5">
            <hr></hr>
        <h2>
              hola formu
        </h2>
            <hr></hr>

    <Form>
        {Object.keys(inputs).map((key, index) => ( 
            <Form.Group className="mb-3" key={index}>
            <Form.Label id="form">
                {key}
            </Form.Label>
            <Form.Control 
            name={key}
            value={inputs[key]}
            onChange={handleChange}
            required />
          </Form.Group>
       ))}
  
    
    <div className="text-center w-100">
        <Button variant="primary" type="submit" onClick={handleClick}>
        Enviar Datos
      </Button>
    </div>
      
    </Form>    
    </div>
       
  /*       <img src={logo} alt="logo" /> */
      
    )
}

export default Formulario;