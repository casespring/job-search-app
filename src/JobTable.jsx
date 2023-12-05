import React from 'react';
import JobTableRow from './JobTableRow';

function JobTable({ jobs, editMode }) {
  const displayRows = jobs.map((job) => (
    <JobTableRow editMode={editMode} job={job} key={job.id} />
  ));

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Work Location</th>
            <th scope="col">Status</th>
            <th scope="col">Date Applied</th>
          </tr>
        </thead>
        <tbody>{displayRows}</tbody>
      </table>
    </div>
  );
}

export default JobTable;
