import React, { useState } from "react";

function List({vai, fullTask}){

    let [tasks, setTasks] = useState([
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

    function addNewTask() {
        const task = { task:`${fullTask.task}`, owner:`${fullTask.owner}`, simpleId:`${fullTask.simpleId}` };
  
        setTasks([...tasks, task]);
    }

// ----------------------------------------------------------------------------------

    if(vai == false) {
        return (
            renderAllTasks()
        )

    } else {

        //addNewTask();

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