import React from "react";
import './Busqueda.css';
import {DirectorioContext} from "../context/directorioProvider";

function Busqueda(props) {

    const {TextoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);

    function onBusquedaChange(event){
        setTextoBusqueda(event.target.value);
    }
    return(
        <React.Fragment>
            <input className="motomami" onChange={onBusquedaChange} value={TextoBusqueda} ></input>
        </React.Fragment>
    );
}

export default Busqueda;