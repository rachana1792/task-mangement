import React from 'react';
import * as Form from '@radix-ui/react-form';
import './style.css';

const FormDemo = () => (
  <div>  <h1 className='head'>Task Manager</h1>
  
  <div className="homeRoot">
  <Form.Root className="FormRoot">
    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="password">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Password</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a password
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input type='password' className="Input" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10 }}>
       Login
      </button>
    </Form.Submit>
  </Form.Root>
  </div>
  </div>
  
);

export default FormDemo;
