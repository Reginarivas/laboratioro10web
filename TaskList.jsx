import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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

export default TaskList;
