import React from "react";
import '../Estilos/Tarjetas.css'
function Tarjetas ({texto,clicBoton,isCorrect}){



return(

    <div className="tarjeta"
    onClick={() => (clicBoton((isCorrect ? "Correcto" : "Incorrecto")))}>

      {texto}
        

    </div>


);



} 

export default Tarjetas;    
