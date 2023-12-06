import {useState, useEffect} from 'react';
import JobTableRow from './JobTableRow';
import "./JobTable.css";

function JobTable() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/jobs`)
      .then(r => r.json())
      .then(data => setJobs(data));
  }, []);

  const displayJobs = jobs.map(job => (
    <JobTableRow job={job} key={job.id} />
  ))

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Work Location</th>
            <th scope="col">Status</th>
            <th scope="col">Date Applied</th>
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
