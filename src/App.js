import React, { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { addTask, getTasks } from "./firebase";
import TasksList from "./TasksList";
function App() {
  const [tasks, setTasks] = useState([]);
  const [addTaskloading, setAddTaskLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getTasks().then((tasks) => {
      setTasks(tasks);
      setLoading(false);
    });
  }, []);
  const myAddTask = (task) => {
    setAddTaskLoading(true);
    addTask(task).then((doc) => {
      getTasks().then((tasks) => {
        setTasks(tasks);

        setAddTaskLoading(false);
        alert("Ticket ajouté avec succes");
      });
    });
  };
  console.log({ tasks });
  return (
    <div className="App">
      {addTaskloading ? (
        <div className="alert alert-info" role="alert">
          Création du ticket
        </div>
      ) : (
        <AddTaskForm addTask={myAddTask} />
      )}
      {loading ? (
        <div className="alert alert-info" role="alert">
          Loading...
        </div>
      ) : (
        <TasksList tasks={tasks} />
      )}
    </div>
  );
}

export default App;
