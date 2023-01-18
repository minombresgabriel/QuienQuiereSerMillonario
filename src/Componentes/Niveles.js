import React from 'react';
import Tarjetas from './Tarjetas';
import Pantalla from './Pantalla';
import '../Estilos/Tarjetas.css'

function Niveles({pregunta, op1,op2,op3,op4,ver1,ver2,ver3,ver4,daleboton,resetboton}){
  

    const clicBoton = val =>{

        if (val == "Correcto"){

            daleboton();
            

          }else{

            resetboton();

          }   
    
      }

    return(
        <div className="container">

        <div className='contenedor-interno'>
  
          <div className='pantalla'>
            <Pantalla titulo={pregunta}/>
          </div>
  
          <div className='opciones'>
            <Tarjetas isCorrect={ver1} clicBoton={clicBoton} texto={op1} />
            <Tarjetas isCorrect={ver2} clicBoton={clicBoton} texto={op2}/>
            <Tarjetas isCorrect={ver3} clicBoton={clicBoton} texto={op3}/>
            <Tarjetas isCorrect={ver4} clicBoton={clicBoton}  texto={op4}/>
  
          </div>
  
        </div>
  
      </div>


    );



}

export default Niveles;