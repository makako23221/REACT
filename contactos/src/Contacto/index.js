import React from "react";
import './Contacto.css';

function Contacto(props) {
    function borrar(){
        props.borrarContacto();
    }
    return(
        <div className="botonB">
            <p className="nombre"> {props.nombre}</p>
            <p className="correo"> {props.correo}</p>
            <p className="telefono"> {props.telefono}</p>
           <button className="borrar" onClick={borrar}>Borrar</button>
        </div>
    )
}

export default Contacto;