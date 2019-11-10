import React from 'react';
import './Persona.css';
const persona = (props) =>{
    return (
    <div className="Persona">
        <p onClick={props.click}>La persona se llama {props.nombre} y tiene {props.nivel} niveles de experiencia</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.nombre}/>
    </div>
    )
};



export default persona;