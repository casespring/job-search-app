  import { useState } from 'react';
  import JobTableRow from './JobTableRow';
  import './JobTable.css';
  
  function JobTable({ jobs, handleDeleteCallback, onJobSave }) {
    const [sortFavoriteOrder, setSortFavoriteOrder] = useState(null)
    const [sortFavoriteDirection, setSortFavoriteDirection] = useState('asc')

  
    function handleFavoriteHeaderClick() {
      setSortFavoriteDirection(
          sortFavoriteOrder === 'favorite' && sortFavoriteDirection === 'asc' ? 'desc' : 'asc'
        )
      setSortFavoriteOrder('favorite')
      console.log(sortFavoriteOrder);
      console.log(sortFavoriteDirection);
    }

    const favoriteOrder = [true, false]
  
    const sortedJobs = [...jobs];
    
    if (sortFavoriteOrder === 'favorite') {
      sortedJobs.sort((a, b) => {
        const order = sortFavoriteDirection === 'asc' ? 1 : -1;
        return order * (favoriteOrder.indexOf(a.favorite) - favoriteOrder.indexOf(b.favorite));
      });
    } 
    
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
            <th scope="col">Date Applied</th>
            <th scope="col">Notes</th>
            <th scope="col" onClick={handleFavoriteHeaderClick}>Favorite</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{displayJobs}</tbody>
      </table>
    </div>
  );
}

export default JobTable;
