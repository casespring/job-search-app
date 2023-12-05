import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function JobTableRow({job}) {
    const [selectedJob, setSelectedJob] = useState(null);
    const [editMode, setEditMode] = useState(true)
    const [notes, setNotes] = useState(job.notes)
  
    function handleRowClick(job){
      setSelectedJob(selectedJob === job ? null : job);
    };
  
    function handleEditMode() {
        setEditMode(!editMode)
    }

    function handleNotesChange(e) {
        setNotes(e.target.value)
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: "PATCH",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({ notes: e.target.value })
        })
        .then(r => r.json())
        .then(data => setNotes(data.notes))
    }

    function handleSaveClick() {
            fetch(`http://localhost:3000/jobs/${job.id}`, {
                method: "PATCH",
                headers: { "content-type": "Application/json" },
                body: JSON.stringify({ notes })
            })
            .then(r => r.json())
            .then(data => {
                setNotes(data.notes);
                setEditMode(!editMode);  // Move this line inside the then block
            });
    }
    
    

    return (
    <React.Fragment>
     <tr onClick={() => handleRowClick(job)}
      className={selectedJob === job ? 'table-primary' : ''}
      style={{ cursor: 'pointer' }}>
        <th scope="row"></th>
        <td>{job.jobTitle}</td>
        <td>{job.company}</td>
        <td>{job.workLocation}</td>
        <td>{job.status}</td>
        <td>{job.dateApplied}</td>
      </tr>
      {selectedJob === job && (
        <tr className="table-primary">
          <td colSpan="6">{
            editMode ? <p><strong><Button onClick={handleEditMode} size="sm">Edit ✏️</Button> Notes: </strong>{job.notes}</p> :
            <React.Fragment>
            <Button onClick={handleEditMode} size="sm">Cancel</Button>
            <Button onClick={handleSaveClick} size="sm">Save ✏️</Button>
            <Form.Control
                as="textarea"
                rows={2} 
                value={notes}
                onChange={handleNotesChange}
            />
            </React.Fragment>
          }
        
          </td>
        </tr>
      )}
    </React.Fragment>
    )
}

export default JobTableRow
