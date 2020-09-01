import React, { useState } from "react";

function List({testeUm}){

    //console.log({testeUm});

    const [tasks] = useState([
       {newTask:"Estudar React", owner:"Luigi", simpleId:"testeUm1010"}
    ]);

   if({testeUm} == "false") {
    return (
        <div id="recebe">
            <ul>
            { tasks.map((eachTask) => (
                <li key={eachTask.simpleId}>
                    <b>{ eachTask.owner }: </b>{ eachTask.newTask }
                </li>            
            ))}
            </ul>
    
            <div>
                <h1>{testeUm}</h1>
            </div>
        </div>
     )

    } else {
    
       console.log(testeUm);
       return(
        <div id="naorecebe">
            <h1>{testeUm}</h1>
        </div>
        )
    }
   
   
};

export default List;

 //let criaLi = document.createElement('li');
 //criaLi.setAttribute('class', 'nomeNaLista');