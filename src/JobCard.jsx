import { useState } from 'react';

function JobCard({ jobs, editMode }) {
  const [addFavorite, setAddFavorite] = useState(jobs.favorite);
  const [currentStatus, setCurrentStatus] = useState(jobs.status);
  const [notes, setNotes] = useState(jobs.notes);

  console.log(jobs);

  function handleStatusSelect(selected) {
    setCurrentStatus(selected);
    // Replace the fetch call with your actual API endpoint
    console.log(`Status updated: ${selected}`);
  }

  function handleFavoritedClick() {
    setAddFavorite(!addFavorite);
    // Replace the fetch call with your actual API endpoint
    console.log(`Favorite status updated: ${!addFavorite}`);
  }

  function handleNotesChange(e) {
    setNotes(e.target.value);
    // Replace the fetch call with your actual API endpoint
    console.log(`Notes updated: ${e.target.value}`);
  }

  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', padding: '20px' }}>
      <div>
        <div style={{ width: '18rem', border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
          <div>
            <h5>{jobs.jobTitle}</h5>
            <div><strong>Company:</strong> {jobs.company}</div>
            <div><strong>Work Location:</strong> {jobs.workLocation}</div>
            <div><strong>Date Applied:</strong> {jobs.dateApplied}</div>
            <div><strong>Status:</strong> {editMode ?
              <select value={currentStatus} onChange={(e) => handleStatusSelect(e.target.value)}>
                <option value="Applied 💼">Applied 💼</option>
                <option value="Interview scheduled 🗓">Interview scheduled 🗓</option>
                <option value="Interview complete ✅">Interview complete ✅</option>
                <option value="Rejected ❌">Rejected ❌</option>
              </select> : jobs.status}
            </div>
            <div>
              <strong>Notes:</strong> {editMode ?
                <textarea
                  rows={2}
                  value={notes}
                  onChange={handleNotesChange}
                /> : jobs.notes}
            </div>
            <div><a href={jobs.jobDescription}>Link to job description</a></div>
            <br />
            <button onClick={handleFavoritedClick}>{addFavorite ? "⭐" : "☆"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;