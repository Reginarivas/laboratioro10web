import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import TaskInputForm from './TaskInputForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App container mt-5">
      <h1>Mini Task Dashboard</h1>
      <TaskInputForm addTask={addTask} />
      <div>
        {tasks.length > 0 && (
          <div>
            <p>{tasks.length} pending tasks</p>
            <Button variant="danger" onClick={deleteAllTasks}>Delete all</Button>
          </div>
        )}
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
          {task}
          <Button variant="danger" size="sm" onClick={() => deleteTask(task)}>Delete</Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default App;
