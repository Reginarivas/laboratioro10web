import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="App container mt-5">
      <h1>Mini Task Dashboard</h1>
      <TaskInputForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
