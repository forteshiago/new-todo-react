import React, { useState } from "react";

function List({testeUm}){

   const [tasks, setTasks] = useState([{newTask:"Estudar React", owner:"Luigi", simpleId:"testeUm1010"}]);
   console.log(testeUm);

   return (
      <>
      <div>
         <h1>{testeUm.task}</h1>
      </div>
      <ul>
         { tasks.map((eachTask) => (
            <li key={eachTask.simpleId}>
               <b>{ eachTask.owner }: </b>{ eachTask.newTask }
            </li>            
         ))}
      </ul>
      </>
   );
 };

 export default List;

 //let criaLi = document.createElement('li');
 //criaLi.setAttribute('class', 'nomeNaLista');