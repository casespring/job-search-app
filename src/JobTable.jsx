  import { useState } from 'react';
  import JobTableRow from './JobTableRow';
  import './JobTable.css';
  
  function JobTable({ jobs, handleDeleteCallback, onJobSave }) {
    const [sortBy, setSortBy] = useState(null);

    const handleSortByDate = () => {
      setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
    };

    const sortedJobs = [...jobs].sort((a, b) => {
      const dateA = new Date(a.dateApplied);
      const dateB = new Date(b.dateApplied);
  
      if (sortBy === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    
    const displayJobs = sortedJobs.map((job) => (
      <JobTableRow handleDeleteCallback={handleDeleteCallback} onJobSave={onJobSave} job={job} key={job.id} />
    ));

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Work Location</th>
            <th scope="col">Status</th>
            <th scope="col" onClick={handleSortByDate} style={{ cursor: 'pointer' }}>
              Date Applied
            </th>
            <th scope="col">Notes</th>
            <th scope="col">Favorite</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{displayJobs}</tbody>
      </table>
    </div>
  );
}

export default JobTable;
