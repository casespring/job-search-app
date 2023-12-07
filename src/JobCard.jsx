import { useState } from 'react';
import "./JobCard.css"

function JobCard({ jobs, onDelete, onJobSave }) {

  const [addFavorite, setAddFavorite] = useState(jobs.favorite);
  const [jobTitle, setJobTitle] = useState(jobs.jobTitle);
  const [company, setCompany] = useState(jobs.company);
  const [workLocation, setWorkLocation] = useState(jobs.workLocation);
  const [currentStatus, setCurrentStatus] = useState(jobs.status);
  const [notes, setNotes] = useState(jobs.notes);
  const [editMode, setEditmode] = useState(false);
  const [fullNotes, setFullNotes] = useState(false);
  

  function handleJobTitle(e) {
    setJobTitle(e.target.value)
  };

  function handleCompanyChange(e) {
   setCompany(e.target.value)
  };

  function handleWorklocation(e) {
    setWorkLocation(e.target.value)
  };

  function handleStatusSelect(e) {
    setCurrentStatus(e.target.value);
  };

  function handleFavoritedClick() {
    setAddFavorite(!addFavorite);
  };

  function handleNotesChange(e) {
    setNotes(e.target.value);
  };

function handleEditMode() {
    setEditmode(!editMode)
};

function toggleFullNotes() {
    setFullNotes(!fullNotes)
}


function handleSaveChanges() {
  setEditmode(!editMode);

  const updatedJob = {
    ...jobs,
    status: currentStatus,
    notes: notes,
    favorite: addFavorite,
    workLocation: workLocation,
    company: company,
    jobTitle: jobTitle,
  };

  console.log(updatedJob);

  fetch(`http://localhost:3000/jobs/${jobs.id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(updatedJob),
  })
    .then((r) => r.json())
    .then((data) => {
      setJobTitle(data.jobTitle);
      setCompany(data.company);
      setCurrentStatus(data.status);
      setAddFavorite(data.favorite);
      setNotes(data.notes);
      setWorkLocation(data.workLocation);
      onJobSave(prev => !prev);
    })
}


function handleDelete() {
  onDelete(jobs.id)
  fetch(`http://localhost:3000/jobs/${jobs.id}`, {
    method: "DELETE",
  })
};

  return (
    <div className="display-cards" >
      <div>
        <div className="cardContainer">
          <div>
              <h3>{editMode ? 
                  <textarea rows={1} value={jobTitle} onChange={handleJobTitle} />: jobTitle}</h3>
              <p><strong>Company:</strong> {editMode ?
                  <textarea rows={1} value={company} onChange={handleCompanyChange} /> : company}</p>
              <p><strong>Work Location:</strong> {editMode ?
                <select value={workLocation} onChange={handleWorklocation}>
                    <option value="In Person 🏢">In Person 🏢</option>
                    <option value="Hybrid 🖥">Hybrid 🖥</option>
                    <option value="Remote 🏠">Remote 🏠</option>
                  </select> : workLocation}
              </p>
              <p><strong>Date Applied:</strong> {jobs.dateApplied}</p>
              <p><strong>Status:</strong> {editMode ?
                <select value={currentStatus} onChange={handleStatusSelect}>
                  <option value="Applied 💼">Applied 💼</option>
                  <option value="Interview scheduled 🗓">Interview scheduled 🗓</option>
                  <option value="Interview complete ✅">Interview complete ✅</option>
                  <option value="Rejected ❌">Rejected ❌</option>
                </select> : currentStatus}
              </p>
              <div>
              <strong>Notes:</strong>{" "}
              {editMode ? (
                <textarea rows={2} value={notes} onChange={handleNotesChange} />
              ) : fullNotes ? (
                <>
                  {notes} <button className='job-table-button' onClick={toggleFullNotes}>Hide</button>
                </>
              ) : (
                <button className='job-table-button' onClick={toggleFullNotes}>Show</button>
              )}
              </div>
              <br className='favorite-div'/>
                <button className='button-class' onClick={handleFavoritedClick}>{addFavorite ? "⭐" : "☆"}</button>
                <br />
              <div className='button-div'>{
                editMode ? (
                  <button className='job-table-button' onClick={handleSaveChanges}>Save</button>
                ) : (
                  <button  className='button-class' onClick={handleEditMode} id="edit-button">Edit</button>
                )
              } 
                {editMode ? <button  className='button-delete' onClick={handleDelete} >Delete 🗑️</button>: null }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;