import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './NewJobForm.css';

function NewJobForm() {

  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [dateApplied, setDateApplied] = useState("")
  const [status, setStatus] = useState("Applied 💼")
  const [favorite, setFavorite] = useState(false)

  function handleTitle(e) {
    setJobTitle(e.target.value);
  }

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handleJobDescription(e) {
    setJobDescription(e.target.value);
  }

  function handleDate(e) {
    setDateApplied(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleFavorite(e) {
    setFavorite(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newJob = {
      jobTitle,
      company,
      dateApplied,
      status,
      jobDescription,
      favorite
    }
    fetch('http://localhost:3000/jobs', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className='form-container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGridJobTitle" className='form-group'>
          <Form.Label>Job Title</Form.Label>
          <Form.Control onChange={handleTitle} type="text" placeholder="Enter job title" value={jobTitle} />
        </Form.Group>

        <Form.Group controlId="formGridCompany" className='form-group'>
          <Form.Label>Company</Form.Label>
          <Form.Control onChange={handleCompany} type="text" placeholder="Enter company" value={company} />
        </Form.Group>

        <Form.Group controlId="formGridCompany" className='form-group'>
          <Form.Label>Job Description</Form.Label>
          <Form.Control onChange={handleJobDescription} type="text" placeholder="Enter link" value={jobDescription} />
        </Form.Group>

        <Form.Group controlId="formGridDateApplied" className='form-group'>
          <Form.Label>Date Applied</Form.Label>
          <Form.Control onChange={handleDate} type="date" value={dateApplied} />
        </Form.Group>

        <Form.Group controlId="formGridStatus" className='form-group'>
          <Form.Label>Status</Form.Label>
          <Form.Select onChange={handleStatus} value={status} >
            <option>Applied 💼</option>
            <option>Interview scheduled 🗓</option>
            <option>Interview complete ✅</option>
            <option>Rejected ❌</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formGridCheckbox" className='form-group'>
          <Form.Check onChange={handleFavorite} type="checkbox" label="Mark as favorite" checked={favorite} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewJobForm;
