import { useState, useEffect } from 'react';
import "./JobCard.css"

function JobCard({ jobs }) {
  const [addFavorite, setAddFavorite] = useState(jobs.favorite);
  const [currentStatus, setCurrentStatus] = useState(jobs.status);
  const [notes, setNotes] = useState(jobs.notes);
  const [editMode, setEditmode] = useState(false)

  function handleStatusSelect(selected) {
    setCurrentStatus(selected)
    fetch(`http://localhost:3000/jobs/${jobs.id}`, {
        method: "PATCH",
        headers: { "content-type": "Application/json" },
        body: JSON.stringify({status: selected})
    }).then(r => r.json())
      .then(data => console.log(data))
};

  function handleFavoritedClick() {
    setAddFavorite(!addFavorite)
    fetch(`http://localhost:3000/jobs/${jobs.id}`, {
        method: "PATCH",
        headers: { "content-type": "Application/json" },
        body: JSON.stringify({ favorite: !addFavorite })
    }).then(r => r.json())
      .then(data => console.log(data))
};

function handleNotesChange(e) {
  setNotes(e.target.value)
  fetch(`http://localhost:3000/jobs/${jobs.id}`, {
      method: "PATCH",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify({ notes: e.target.value })
  }).then(r => r.json())
    .then(data => setNotes(data.notes))
};

function handleEditMode() {
  setEditmode(!editMode)
}

function handleSubmit(e) {
  e.preventDefault();
  const updatedCard = {
    status: currentStatus,
    notes: notes,
  }
  console.log(updatedCard)
}

  return (
    <div className="display-cards" >
      <div>
        <div className="cardContainer">
          <div>
            <form onSubmit={handleSubmit}>
              <h2>{jobs.jobTitle}</h2>
              <p><strong>Company:</strong> {jobs.company}</p>
              <p><strong>Work Location:</strong> {jobs.workLocation}</p>
              <p><strong>Date Applied:</strong> {jobs.dateApplied}</p>
              <p><strong>Status:</strong> {editMode ?
                <select value={currentStatus} onChange={(e) => handleStatusSelect(e.target.value)}>
                  <option value="Applied 💼">Applied 💼</option>
                  <option value="Interview scheduled 🗓">Interview scheduled 🗓</option>
                  <option value="Interview complete ✅">Interview complete ✅</option>
                  <option value="Rejected ❌">Rejected ❌</option>
                </select> : currentStatus}
              </p>
              <div>
                <strong>Notes:</strong> {editMode ?
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={handleNotesChange}
                  /> : notes}
              </div>
              <p><a href={jobs.jobDescription}>Link to job description</a></p>
              <br />
              <button className="job-card-button" onClick={handleFavoritedClick}>{addFavorite ? "⭐" : "☆"}</button>
              <br />
              <button className="job-card-button" onClick={handleEditMode} id="edit-button">Edit Mode</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;