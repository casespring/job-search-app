import React, { useState, useEffect } from 'react';
import './NewJobForm.css';

function NewJobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [workLocation, setWorkLocation] = useState("Choose location");
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

  function handleWorkLocation(e) {
    setWorkLocation(e.target.value);
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
      workLocation,
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
        setShowSuccessAlert(true);
        setJobTitle("");
        setCompany("");
        setWorkLocation("Choose location");
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
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              type="text"
              placeholder="Enter job title"
              value={jobTitle}
              onChange={handleTitle}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              placeholder="Enter company"
              value={company}
              onChange={handleCompany}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="workLocation">Work Location</label>
            <select
              id="workLocation"
              value={workLocation}
              onChange={handleWorkLocation}
              required
            >
              <option disabled>Choose location</option>
              <option>In Person 🏢</option>
              <option>Hybrid 🖥</option>
              <option>Remote 🏠</option>
            </select>
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor="jobDescription">Job Description</label>
            <input
              id="jobDescription"
              type="text"
              placeholder="Enter job description"
              value={jobDescription}
              onChange={handleJobDescription}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="dateApplied">Date Applied</label>
            <input
              id="dateApplied"
              type="date"
              value={dateApplied}
              onChange={handleDate}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={handleStatus}
              required
            >
              <option disabled>Choose status</option>
              <option>Applied 💼</option>
              <option>Interview scheduled 🗓</option>
              <option>Interview complete ✅</option>
              <option>Rejected ❌</option>
            </select>
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Add any notes"
            value={notes}
            onChange={handleNotes}
          />
        </div>

        <div className='form-group'>
          <label>
            <input
              type="checkbox"
              checked={favorite}
              onChange={handleFavorite}
            />
            Mark as favorite
          </label>
        </div>

        <button type="submit" className='btn-primary'>
          Submit
        </button>

        {showSuccessAlert && (
          <div className='success-alert'>
            <p>Your job has been added!</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default NewJobForm;
