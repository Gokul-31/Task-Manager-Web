import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // cant do task.push since its immutable, one way data
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}>
          {" "}
        </Task>
      ))}
    </>
  );
};

export default Tasks;
