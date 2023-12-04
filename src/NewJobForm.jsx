import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './NewJobForm.css';

function NewJobForm() {
  return (
    <div className='form-container'>
      <Form>
        <Form.Group controlId="formGridJobTitle" className='form-group'>
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" />
        </Form.Group>

        <Form.Group controlId="formGridCompany" className='form-group'>
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Enter company" />
        </Form.Group>

        <Form.Group controlId="formGridDateApplied" className='form-group'>
          <Form.Label>Date Applied</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formGridStatus" className='form-group'>
          <Form.Label>Status</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Applied 💼</option>
            <option>Interview scheduled 🗓</option>
            <option>Interview complete ✅</option>
            <option>Rejected ❌</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formGridCheckbox" className='form-group'>
          <Form.Check type="checkbox" label="Mark as favorite" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewJobForm;
