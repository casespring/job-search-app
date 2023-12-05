import React, { useState } from 'react';
import './JobCard.css';

function JobCard({ jobs }) {
  const [addFavorite, setAddFavorite] = useState(jobs.favorite);
  const [currentStatus, setCurrentStatus] = useState(jobs.status);
  const [notes, setNotes] = useState(jobs.notes);

  console.log(jobs);

  function handleStatusSelect(selected) {
    setCurrentStatus(selected);
    updateJobData({ status: selected });
  }

  function handleFavoritedClick() {
    setAddFavorite(!addFavorite);
    updateJobData({ favorite: !addFavorite });
  }

  function handleNotesChange(e) {
    setNotes(e.target.value);
    updateJobData({ notes: e.target.value });
  }

  function updateJobData(data) {
    fetch(`http://localhost:3000/jobs/${jobs.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'Application/json' },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((updatedData) => {
        setNotes(updatedData.notes);
        // Add additional state updates as needed
      });
  }

  return (
    <div className="job-card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{jobs.jobTitle}</h5>
          <p className="card-text">
            <strong>Company:</strong> {jobs.company}
          </p>
          <p className="card-text">
            <strong>Work Location:</strong> {jobs.workLocation}
          </p>
          <p className="card-text">
            <strong>Date Applied:</strong> {jobs.dateApplied}
          </p>
          <p className="card-text">
            <strong>Status:</strong>{' '}
            <select
              value={currentStatus}
              onChange={(e) => handleStatusSelect(e.target.value)}
            >
              <option value="Applied 💼">Applied 💼</option>
              <option value="Interview scheduled 🗓">Interview scheduled 🗓</option>
              <option value="Interview complete ✅">Interview complete ✅</option>
              <option value="Rejected ❌">Rejected ❌</option>
            </select>
          </p>
          <p className="card-text">
            <strong>Notes:</strong>
          </p>
          <textarea
            rows={2}
            value={notes}
            onChange={handleNotesChange}
          />
          <a href={jobs.jobDescription} className="card-link">
            Link to job description
          </a>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleFavoritedClick}
          >
            {addFavorite ? 'Remove from favorite' : 'Add to favorite'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
