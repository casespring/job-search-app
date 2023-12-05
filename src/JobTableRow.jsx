import React, { useState } from 'react';

function JobTableRow({ job, editMode }) {
  const [selectedJob, setSelectedJob] = useState(null);

  function handleRowClick() {
    setSelectedJob(selectedJob === job ? null : job);
  }

  return (
    <>
      <tr
        onClick={handleRowClick}
        className={selectedJob === job ? 'table-primary' : ''}
        style={{ cursor: 'pointer' }}
      >
        <th scope="row"></th>
        <td>{job.id}</td>
        <td>{job.jobTitle}</td>
        <td>{job.company}</td>
        <td>{job.workLocation}</td>
        <td>
          {editMode ? (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {job.status}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" type="button">
                  Applied 💼
                </button>
                <button className="dropdown-item" type="button">
                  Interview scheduled 🗓
                </button>
                <button className="dropdown-item" type="button">
                  Interview complete ✅
                </button>
                <button className="dropdown-item" type="button">
                  Rejected ❌
                </button>
              </div>
            </div>
          ) : (
            job.status
          )}
        </td>
        <td>{job.dateApplied}</td>
      </tr>
      {selectedJob === job && (
        <tr className="table-primary">
          <td colSpan="7">
            {editMode ? (
              <textarea
                className="form-control"
                rows="2"
                value={job.notes}
              />
            ) : (
              <p>
                <strong>Notes:</strong> {job.notes}
              </p>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

export default JobTableRow;

