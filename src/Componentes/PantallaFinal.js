import React from 'react';
import '../Estilos/PantallaFinal.css'

function PantallaFinal({resetboton}){

  const accion = () =>{

    resetboton();

  }


    return(

    <div className='contenedor'>
        
        <div className='cuadro'>

            <h4>FELICIDADES HAS TERMINADO</h4>
            <div className='botonreset' onClick={accion}>
               <p>RESET JUEGO</p>   
            </div>


        </div>
        
    </div>


    )




}

export default PantallaFinal;