import React from "react";

import List from "./List";


function Container(){

    function SendNewTask() {

        let task = document.getElementById("newTask").value;
        let owner = document.getElementById("newOwner").value;

        const fullTask = { task, owner, simpleId: `${Date.now()}`};
        console.log(fullTask);

        return (<List testeUm={fullTask}/>)
    }
/*
    function HandleChange(e) {
        console.log(e.target.value);
        return e.target.value
    }
*/

    return (
        <div id="container">  
            <input id="newTask" placeholder="Digite uma nova tarefa" type="text" />
            <br />
            <input id="newOwner" placeholder="Digite o nome do criador" type="text" />
            <br />
            <button type="button" onClick={SendNewTask}>
                Criar!
            </button>
            <br />
            
            <div className="previewTask">
                <h3>Teste Mensagem</h3>
                <h3>Teste Dono</h3>
            </div>
            
            <List />

        </div>
    )
}

export default Container;