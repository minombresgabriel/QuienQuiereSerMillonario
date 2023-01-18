import './App.css';
import Niveles from './Componentes/Niveles';
import Tarjetas from './Componentes/Tarjetas';
import React, { useState } from 'react';
import { faker } from "@faker-js/faker";
import PantallaFinal from './Componentes/PantallaFinal';



var i = 0;

const UsersList = () => {

  const [users, setUsers] = useState([]);

  const handleAddUser = () => {

    i += 1;

    setUsers([users]);

  };

  const handleReset = () => {


    i = 0;

    setUsers([users]);

  };

  const Reinicio = () =>{


    i = 0;

    setUsers([users]);

  };

  const numbers = [

    <Niveles
      pregunta="¿Quien es el mejor amigo del Hombre?"
      op1={"Perro"}
      op2={"Gato"}
      op3={"Cacatua"}
      op4={"Cocodrilo"}
      ver1={true}
      ver2={false}
      ver3={false}
      ver4={false}
      daleboton={handleAddUser}
      resetboton={handleReset}
    />,
    <Niveles
      pregunta="¿Cuando murio Simon Bolivar?"
      op1={"1578"}
      op2={"1789"}
      op3={"1830"}
      op4={"2010"}
      ver1={false}
      ver2={false}
      ver3={true}
      ver4={false}
      daleboton={handleAddUser}
      resetboton={handleReset}

    />,
    <Niveles
      pregunta="¿Cuanto es 2+2?"
      op1={"10"}
      op2={"6"}
      op3={"8"}
      op4={"4"}
      ver1={false}
      ver2={false}
      ver3={false}
      ver4={true}
      daleboton={handleAddUser}
      resetboton={handleReset}


    />,




  ];



if (i<numbers.length) {
  return (

    
    <>

    <h2 className='nivel'>Nivel: {i+1}</h2>
      {numbers[i]}


    </>



  );
}else{

  return(

    <PantallaFinal
    resetboton={handleReset}

    
    />
 
  )



}


}

export default function App() {



  return (

    <div className='App'>



      <UsersList></UsersList>

    </div>


  );

}


