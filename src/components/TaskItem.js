import React from "react";

export default function TaskItem({task, onDelete}) {
  return (
    <li>
        <b>{task.owner} : </b>
        {task.task}
        <button type="button" onClick={onDelete} > Deletar </button>
    </li>
  )
} 