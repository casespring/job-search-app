import React, { useState } from 'react';

function JobTable({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleRowClick = (job) => {
    // Toggle the selectedJob state when a row is clicked
    setSelectedJob(selectedJob === job ? null : job);
  };

  let jobTable = jobs.map((job, index) => (
    <React.Fragment key={index}>
      <tr onClick={() => handleRowClick(job)}
      className={selectedJob === job ? 'table-primary' : ''}
      style={{ cursor: 'pointer' }}>
        <th scope="row">{index + 1}</th>
        <td>{job.jobTitle}</td>
        <td>{job.company}</td>
        <td>{job.workLocation}</td>
        <td>{job.status}</td>
      </tr>
      {selectedJob === job && (
        <tr className="table-primary">
          <td colSpan="5">
          <p><a href={job.jobDescription} target="_blank" rel="noopener noreferrer"><strong>Job Description</strong></a></p>
            <p><strong>Date Applied: </strong>{job.dateApplied}</p>
            <p><strong>Notes: </strong>{job.notes}</p>
          </td>
        </tr>
      )}
    </React.Fragment>
  ));

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Work Location</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobTable}
        </tbody>
      </table>
    </div>
  );
}

export default JobTable;