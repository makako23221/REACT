import React from "react";
import './AgregaContacto.css';
import {DirectorioContext} from '../context/directorioProvider'
import Contacto from "../Contacto/";

function AgregaContacto() {

    const {setModal, guardaContacto}= React.useContext(DirectorioContext);
    const [Contact,setContact]=React.useState({
    nombre:'',
    correo:'',
    telefono:''
})



     function onchangeNombre(event){
        let contactoTemporal=Contact;
        contactoTemporal.nombre=event.target.value;
        setContact(contactoTemporal);

    }

     function onchangeTelefono(event){
        let contactoTemporal=Contact;
        contactoTemporal.telefono=event.target.value;
        setContact(contactoTemporal);

    }   


     function onchangeCorreo(event){
        let contactoTemporal=Contact;
        contactoTemporal.correo=event.target.value;
        setContact(contactoTemporal);
 
    }

     function modalGuardar(event){
        event.preventDefault();
        guardaContacto(Contact);
        setModal(false);
    }   

function modalCancelar(){
    setModal(false);
}

    return(
        <React.Fragment>
        <div className="todo">    
        <div className="principal">
            <form>
                <h2>Nombre</h2>
                <input typeof="text" placeholder="Nombre" onChange={onchangeNombre}></input>
                <h2>telefono</h2>
                <input typeof="text" placeholder="Telefono" onChange={onchangeTelefono}></input>
                <h2>Correo</h2>
                <input typeof="text" placeholder="Correo" onChange={onchangeCorreo}></input>
                <button typeof="submit" onClick={modalGuardar} className="aceptar">aceptar</button>
                <button onClick={modalCancelar} className="cerrar">cerrar</button>
            </form>
        </div>
        </div>
        </React.Fragment>
    )
}

export default AgregaContacto;