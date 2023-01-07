import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap'
import Tarjetas from '../componentes/Tarjetas';


let nombre = 'nacho';
nombre = 'nachocice';

const Api = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(res => setCharacters(res.results))
    },[])

    const handleImprimir = () => {
        console.log('buenas, soy la funcion');
        console.log(characters);
    };
   
   
    return (
        <div className="section m-5">
                <hr></hr>
            <h2>
            hola api -  {nombre}
            </h2>
                <hr></hr>
            <div className='text-center m-4'>
            <Button onClick={handleImprimir} variant="w-50 m-2 bg-danger">
                Imprimir en consola los Datos
            </Button>
            </div>
            <div>
                <Row>
                { characters.map((c)=>(
                    <Col key={c.id}>
                         <Tarjetas characters={c} />
                    </Col>
                ))}
                </Row>
            </div>

        </div>
    )
}

export default Api ;