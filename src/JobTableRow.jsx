import { useState } from 'react';
import "./JobTable.css";

function JobTableRow({ job }) {
  const [editMode, setEditMode] = useState(false)
  const [newStatus, setNewStatus] = useState(job.status)
  const [newNotes, setNewNotes] = useState(job.notes)
  const [newFavorite, setNewFavorite] = useState(job.favorite)
  const [newLocation, setNewLocation] = useState(job.workLocation)
  const [newCompany, setNewCompany] = useState(job.company)
  const [newJobTitle, setNewJobTitle] = useState(job.jobTitle)
  const [tdSelected, setTdSelected] = useState(false);
  const formattedDate = new Date(job.dateApplied).toLocaleDateString('en-US');


  function handleEditMode() {
    setEditMode(!editMode)
  } 

  function handleStatusChange(e) {
    setNewStatus(e.target.value);
  }

  function handleNoteChange(e) {
    setNewNotes(e.target.value)
  }

  function handleNoteDisplay() {
    setTdSelected(!tdSelected)
  }

  function handleNewFavorite() {
    setNewFavorite(!newFavorite)
  }

  function handleLocationChange(e) {
    setNewLocation(e.target.value)
  }

  function handleCompanyChange(e) {
    setNewCompany(e.target.value)
  }

  function handleJobTitleChange(e) {
    setNewJobTitle(e.target.value)
  }

  function handleSaveChanges() {
    setEditMode(false); 
    setNewStatus(newStatus);
    setNewNotes(newNotes);
    setNewFavorite(newFavorite);
    setNewLocation(newLocation)
    setNewCompany(newCompany)
    setNewJobTitle(newJobTitle)

    const updatedJob = {
      ...job,
      status: newStatus,
      notes: newNotes,
      favorite: newFavorite,
      workLocation: newLocation,
      company: newCompany,
      jobTitle: newJobTitle
    };
  
    fetch(`http://localhost:3000/jobs/${job.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedJob)
    })
      .then(response => response.json())
      .then(data => {
        setNewStatus(data.status);
        setNewNotes(data.notes);
        setNewFavorite(data.favorite);
        setNewLocation(data.workLocation)
        setNewCompany(data.company)
        setNewJobTitle(data.jobTitle)
      })
  }

  return (
    <tr>
      <td>{editMode ? (
          <textarea 
          rows={1}
          value={newJobTitle}
          onChange={handleJobTitleChange}
          ></textarea>
          ) : (
          newJobTitle
          )}
      </td>
      <td>{editMode ? (
          <textarea 
          rows={1}
          value={newCompany}
          onChange={handleCompanyChange}
          ></textarea>
          ) : (
          newCompany
          )}
      </td>
      <td>
        {editMode ? (
          <select onChange={handleLocationChange} value={newLocation}>
              <option>In Person 🏢</option>
              <option>Hybrid 🖥</option>
              <option>Remote 🏠</option>
          </select>
        ) : (
          newLocation
          )}
      </td>
      <td>
        {editMode ? (
          <select onChange={handleStatusChange} value={newStatus}>
            <option>Applied 💼</option>
            <option>Interview scheduled 🗓</option>
            <option>Interview complete ✅</option>
            <option>Rejected ❌</option>
          </select>
        ) : (
          newStatus
          )}
      </td>
      <td>{formattedDate}</td>
      <td onClick={handleNoteDisplay} className={`${tdSelected ? 'td-selected' : ''} notes-hover`}>
        {editMode ? (
          <textarea
            rows={1}
            value={newNotes}
            onChange={handleNoteChange}
          ></textarea>
        ) : (
          <div>
            {newNotes}
          </div>
        )}
      </td>
      <td>
          {editMode ? (
          <button className='job-table-button'  onClick={handleNewFavorite}>{newFavorite ? "⭐" : "☆"}</button>
          ) : (
          newFavorite ? "⭐" : "☆"
          )}
      </td>
      <td>{editMode ? (
          <button className='job-table-button' onClick={handleSaveChanges}>Save</button>
        ) : (
          <button className='job-table-button'  onClick={handleEditMode}>Edit</button>
        )}
      </td>
    </tr>
  );
}

export default JobTableRow;
