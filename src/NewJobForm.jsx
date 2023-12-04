import { useState, useEffect } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import './NewJobForm.css';

function NewJobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("Choose location");
  const [jobDescription, setJobDescription] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [status, setStatus] = useState("Choose status");
  const [notes, setNotes] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    let timeout;
    if (showSuccessAlert) {
      timeout = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [showSuccessAlert]);

  function handleTitle(e) {
    setJobTitle(e.target.value);
  }

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
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

  function handleNotes(e) {
    setNotes(e.target.value);
  }

  function handleFavorite(e) {
    setFavorite(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newJob = {
      jobTitle,
      company,
      location,
      jobDescription,
      dateApplied,
      status,
      notes,
      favorite
    };
    fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowSuccessAlert(true);
        setJobTitle("");
        setCompany("");
        setLocation("Choose location");
        setJobDescription("");
        setDateApplied("");
        setStatus("Choose status");
        setNotes("");
        setFavorite(false);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  }

  return (
    <div className='form-container'>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formGridJobTitle" className='form-group'>
              <Form.Label>Job Title</Form.Label>
              <Form.Control onChange={handleTitle} type="text" placeholder="Enter job title" value={jobTitle} required />
            </Form.Group>

            <Form.Group controlId="formGridCompany" className='form-group'>
              <Form.Label>Company</Form.Label>
              <Form.Control onChange={handleCompany} type="text" placeholder="Enter company" value={company} required />
            </Form.Group>

            <Form.Group controlId="formGridLocation" className='form-group'>
              <Form.Label>Work Location</Form.Label>
              <Form.Select onChange={handleLocation} value={location} required>
                <option disabled>Choose location</option>
                <option>In Person 🏢</option>
                <option>Hybrid 🖥</option>
                <option>Remote 🏠</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formGridCompany" className='form-group'>
              <Form.Label>Job Description</Form.Label>
              <Form.Control onChange={handleJobDescription} type="text" placeholder="Enter link" value={jobDescription} required />
            </Form.Group>

            <Form.Group controlId="formGridDateApplied" className='form-group'>
              <Form.Label>Date Applied</Form.Label>
              <Form.Control onChange={handleDate} type="date" value={dateApplied} required />
            </Form.Group>

            <Form.Group controlId="formGridStatus" className='form-group'>
              <Form.Label>Status</Form.Label>
              <Form.Select onChange={handleStatus} value={status} required>
                <option disabled>Choose status</option>
                <option>Applied 💼</option>
                <option>Interview scheduled 🗓</option>
                <option>Interview complete ✅</option>
                <option>Rejected ❌</option>
              </Form.Select>
            </Form.Group>
            </Col>

            <Form.Group controlId="formGridNotes" className='form-group'>
              <Form.Label>Notes</Form.Label>
              <Form.Control onChange={handleNotes} as="textarea" rows={4} placeholder="Add any notes" value={notes} />
            </Form.Group>

            <Form.Group controlId="formGridCheckbox" className='form-group'>
              <Form.Check onChange={handleFavorite} type="checkbox" label="Mark as favorite" checked={favorite} />
            </Form.Group>
        
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        {showSuccessAlert && (
          <Alert variant='success' className='success-alert' onClose={() => setShowSuccessAlert(false)} dismissible>
            <p className='alert-p'>Your job has been added!</p>
          </Alert>
        )}
      </Form>
    </div>
  );
}

export default NewJobForm;

