  import { useState, useEffect } from 'react';
  import JobTableRow from './JobTableRow';
  import './JobTable.css';
  
  function JobTable() {
    const [jobs, setJobs] = useState([]);
    const [sortStatusOrder, setSortStatusOrder] = useState(null);
    const [sortStatusDirection, setSortStatusDirection] = useState('asc');
  
    useEffect(() => {
      fetch(`http://localhost:3000/jobs`)
        .then((r) => r.json())
        .then((data) => setJobs(data));
    }, []);
  
    const handleDeleteCallback = (deletedJobId) => {
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== deletedJobId));
    };
  
    const handleStatusHeaderClick = () => {
      setSortStatusDirection(
        sortStatusOrder === 'status' && sortStatusDirection === 'asc' ? 'desc' : 'asc'
      );
      setSortStatusOrder('status');
    };
  
    const statusOrder = ['Applied 💼', 'Interview scheduled 🗓', 'Interview complete ✅', 'Rejected ❌'];
  
    const sortedJobs = [...jobs];
    if (sortStatusOrder === 'status') {
      sortedJobs.sort((a, b) => {
        const order = sortStatusDirection === 'asc' ? 1 : -1;
        return order * (statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
      });
    }
  
    const displayJobs = sortedJobs.map((job) => (
      <JobTableRow onDelete={handleDeleteCallback} job={job} key={job.id} />
    ));

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Work Location</th>
            <th scope="col" onClick={handleStatusHeaderClick}>Status</th>
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
