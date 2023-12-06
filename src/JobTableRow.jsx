import { useState } from 'react';
import "./JobTable.css";

function JobTableRow({ job }) {
  const [editMode, setEditMode] = useState(false)
  const [newStatus, setNewStatus] = useState(job.status)
  const [newNotes, setNewNotes] = useState(job.notes)
  const [newFavorite, setNewFavorite] = useState(job.favorite)

  function handleEditMode() {
    setEditMode(!editMode)
  } 

  function handleStatusChange(e) {
    setNewStatus(e.target.value);
  }

  function handleNoteChange(e) {
    setNewNotes(e.target.value)
  }

  function handleNewFavorite() {
    setNewFavorite(!newFavorite)
  }

  function handleSaveChanges() {
    setEditMode(false); // Exit edit mode immediately
    setNewStatus(newStatus);
    setNewNotes(newNotes);
    setNewFavorite(newFavorite);
  
    // Make the patch request
    const updatedJob = {
      ...job,
      status: newStatus,
      notes: newNotes,
      favorite: newFavorite
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
      })
  }
  


  

  return (
    <tr>
      <td>{job.jobTitle}</td>
      <td>{job.company}</td>
      <td>{job.workLocation}</td>
      <td>
        {editMode ? (
          <select onChange={handleStatusChange} value={newStatus}>
            <option>Applied 💼</option>
            <option>Interview scheduled 🗓</option>
            <option>Interview complete ✅</option>
            <option>Rejected ❌</option>
          </select>
        ) : (newStatus)}
      </td>
      <td>{job.dateApplied}</td>
      <td>{editMode ? 
          <textarea 
          rows={2}
          value={newNotes}
          onChange={handleNoteChange}
          ></textarea>
          :
          (newNotes)
          }</td>
      <td><button onClick={handleNewFavorite}>{(newFavorite) ? "⭐" : "☆"}</button></td>
      <td>{editMode ? (
          <button onClick={handleSaveChanges}>Save</button>
        ) : (
          <button onClick={handleEditMode}>Edit</button>
        )}</td>
    </tr>
  );
}

export default JobTableRow;
