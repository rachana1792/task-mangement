import React from 'react';
import * as Form from '@radix-ui/react-form';
import './style.css';

const TaskForm = () => (
  <Form.Root className="FormRoot">
    <Form.Field className="FormField" name="title">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Title</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter task title
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="text" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="description">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Description</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a description
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10 }}>
        Add Task
      </button>
    </Form.Submit>
  </Form.Root>
);

export default TaskForm;