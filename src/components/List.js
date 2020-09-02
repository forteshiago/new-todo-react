import React, { useState } from "react";
import { render } from "react-dom";

function List({vai, fullTask}){

    const [tasks] = useState([
       {task:"Estudar React", owner:"Luigi", simpleId:"testeUm1010"}
    ]);

    function renderAllTasks() {
        return(
        <div id="lista">
            <ul>
            { tasks.map((eachTask) => (
                <li key={eachTask.simpleId}>
                    <b>{ eachTask.owner }: </b>{ eachTask.task }
                </li>            
            ))}
            </ul>
        </div>
        )
    }

    if(vai == false) {
    return (
        renderAllTasks()
    )

    } else {
        return(
            <>
            <h2>{fullTask.task}</h2>
            <h2>{fullTask.owner}</h2>
            <h2>{fullTask.simpleId}</h2>    
            </>        
        )
    }
   
   
};

export default List;