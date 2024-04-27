// Importa React, useState, y los componentes necesarios de react-bootstrap
import React, { useState } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';

const TaskInputForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // Evita añadir tareas vacías
    addTask(task);
    setTask('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Enter a task</InputGroup.Text>
        <FormControl
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
        />
        <Button type="submit" variant="primary">ADD</Button>
      </InputGroup>
    </Form>
  );
};

export default TaskInputForm;
