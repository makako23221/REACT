import React from "react";
import './ListaContactos.css';

function ListContactos(props) {
    return(
        <div className="titulo">
            <h2 className="contactos">Mis contactos</h2>
            {props.children}
        </div>
    )
}

export default ListContactos;