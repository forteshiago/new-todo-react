import React, {useState} from "react";

function List({}){
    const [task, setTask] = useState("");
    const [owner, setOwner] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleAddScrap() {
        const newTask = { task, owner, simpleId: `${Date.now()}`};
        
        setTasks([...tasks, newTask]);
        setOwner("");
        setTask("");
        console.log(newTask);
    }

    function handleDelete (idTask) {
        setTasks(tasks.filter((eachTask) => eachTask.simpleId !== idTask))
    }



    return (
        <>
            <input id="newTask" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Digite uma nova tarefa" type="text" />
            <br />
            <input id="newOwner" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder="Digite seu nome" type="text" />
            <br />
            <button type="button" onClick={handleAddScrap} >
                Gravar
            </button>

            <br />
            
            <div className="previewTask">
                <h3>{task}</h3>
                <h3>{owner}</h3>
            </div>

            <br />

            <ul>
                {tasks.map((eachTask) => (
                    <li key={eachTask.simpleId}>
                        <b>{eachTask.owner} : </b>
                        {eachTask.task}
                        <button type="button" onClick={() => handleDelete(eachTask.simpleId)} > Deletar </button>
                    </li>
                ))}
            </ul>

        </>
    )
};

export default List;