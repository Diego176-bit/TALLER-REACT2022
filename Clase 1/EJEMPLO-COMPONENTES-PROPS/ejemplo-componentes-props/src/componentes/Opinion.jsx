import React from 'react'
import '../hojas-de-estilos/Opinion.css'
 export function Opinion({imagen, nombre, opinion }){
    return(
        <div className = 'contenedor-opinion'>
            <div className = 'contenedor-imagen'>
                <img 
                    className='imagen-opinion'
                    src = {imagen}
                    alt = 'Foto Michael'
                />
            </div>
            <div className='contenedor-texto'>
                <span className='nombre-usuario'>{nombre}</span>
                <p className='opinion-usuario'>{opinion}</p>
            </div>
        </div>
    )
}



