import React from "react";

function List({vai, fullTask}){

    let tasks = [
        {task:"Estudar React", owner:"Luigi", simpleId:"testeUm1010"},
        {task:"Refazer os exercícios", owner:"Mario", simpleId:"testeUm1012"}
    ];

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

// ----------------------------------------------------------------------------------

    if(vai == false) {
        return (
            renderAllTasks()
        )

    } else {

        let task = { task:`${fullTask.task}`, owner:`${fullTask.owner}`, simpleId:`${fullTask.simpleId}` };
        
        tasks.push(task);

        return(
            renderAllTasks()
        )
    }
};

export default List;