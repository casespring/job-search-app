import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './NewJobForm.css';


function NewJobForm() {

  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [dateApplied, setDateApplied] = useState("mm/dd/yyyy")
  const [status, setStatus] = useState("")

  function handleName(e) {
    console.log(e.target.value);
  }

  function handleCompany(e) {
    console.log(e.target.value);
  }

  function handleDate(e) {
    console.log(e.target.value);
  }

  function handleStatus(e) {
    console.log(e.target.value);
  }

  return (
    <div className='form-container'>
      <Form>
        <Form.Group controlId="formGridJobTitle" className='form-group'>
          <Form.Label>Job Title</Form.Label>
          <Form.Control onChange={handleName} type="text" placeholder="Enter job title" />
        </Form.Group>

        <Form.Group controlId="formGridCompany" className='form-group'>
          <Form.Label>Company</Form.Label>
          <Form.Control onChange={handleCompany} type="text" placeholder="Enter company" />
        </Form.Group>

        <Form.Group controlId="formGridDateApplied" className='form-group'>
          <Form.Label>Date Applied</Form.Label>
          <Form.Control onChange={handleDate} type="date" />
        </Form.Group>

        <Form.Group controlId="formGridStatus" className='form-group'>
          <Form.Label>Status</Form.Label>
          <Form.Select onChange={handleStatus} defaultValue="Choose...">
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
