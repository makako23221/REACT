import logo from './logo.svg';
import './App.css';
import React from 'react';
import Busqueda from './Busqueda/Busqueda';
import ListaContactos  from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import {DirectorioContext, DirectorioProvider} from './context/directorioProvider';

//   let contactos=[
//   {
//    nombre:"Matteo",
//    telefono:"123456789",
//     correo:"matt@gmail.com"
//   },
//   {
//    nombre:"Roberto",
//     telefono:"156789390",
//     correo:"roberto@gmail.com"
//   },
//   {
//    nombre:"Regina",
//    telefono:"999204387",
//    correo:"regina@gmail.com"
//  }
// ]

function App(){
return(
  <DirectorioProvider>
    <DirectorioContext.Consumer>
      {
        ({
          contactosFiltrados,
          borrarContacto,
          contadorContactos,
          modal,
          setModal
        })=>(
          <React.Fragment>
    
    <h1 className='texto'>DIRECTORIO({contadorContactos})</h1>
    <Busqueda/>
    <button onClick={()=>{setModal(true)}}>AgregaContacto</button>
    <ListaContactos>
      {
        contactosFiltrados.map((contacto)=>{
          return(
            <Contacto 
            nombre={contacto.nombre}
            correo={contacto.correo}
            telefono={contacto.telefono}
            borrarContacto={()=>{borrarContacto(contacto.nombre)}}/>
          )
        })

        
      }
      
          </ListaContactos>
          {modal && <AgregaContacto/>}
         </React.Fragment>
        )
      }
    </DirectorioContext.Consumer>
  </DirectorioProvider>
);
    }

export default App;
