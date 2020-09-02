import React, { useState } from "react";

import List from "./List";
import { render } from "react-dom";


function Container(){

    const [exList, setExList] = useState("");

    function sendNewTask() {

        let task = document.getElementById("newTask").value;
        let owner = document.getElementById("newOwner").value;

        const fullTask = { task, owner, simpleId: `${Date.now()}`};
        console.log(fullTask);

        let confirm = true
        console.log(confirm);
        render(<List vai={confirm} fullTask={fullTask}/>, document.getElementById("lista"));
    }

    return (
        <div id="container">  
            <input id="newTask" placeholder="Digite uma nova tarefa" type="text" />
            <br />
            <input id="newOwner" placeholder="Digite o nome do criador" type="text" />
            <br />
            <button type="button" onClick={sendNewTask}>
                Criar!
            </button>
            <br />
            
            <div className="previewTask">
                <h3>Teste Mensagem</h3>
                <h3>Teste Dono</h3>
            </div>
            
            <List vai={false}/>

        </div>
    )
}

export default Container;