import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobTable from "./JobTable";
import JobCardSearch from "./JobCardSearch";
import "./JobListContainer.css";

function JobListContainer() {
  const [jobs, setJobs] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [refreshJobs, setRefreshJobs] = useState(false);
  

  useEffect(() => {
    fetch("https://jobquest-e7ho.onrender.com/jobs")
      .then(r => r.json())
      .then(jobsData => {
        setJobs(jobsData);
      });
  }, [toggle, refreshJobs]);

  function handleToggle() {
    setToggle(!toggle)
  }

  function settingSearchTerm(search) {
    setSearchTerm(search);
  }

  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.status.toLowerCase().includes(searchTerm.toLowerCase());

    if (showFavorites) {
      return job.favorite && matchesSearchTerm;
    }

    return matchesSearchTerm;
  });

  function handleDeleteCallback(deletedJobId) {
    setJobs(jobs => jobs.filter(job => job.id !== deletedJobId));
  }

  const displayJobCards = filteredJobs.map(job => (
    <JobCard key={job.id} jobs={job} onJobSave={setRefreshJobs} onDelete={handleDeleteCallback} />
  ));

  return (
    <div>
        <JobCardSearch onSearchTerm={settingSearchTerm} jobs={jobs} />
        <div className="display-button-div">
          <button className="toggle-button" onClick={handleToggle}>
            {toggle ? "View as table" : "View as cards"}
          </button>
          <button
          className="toggle-button"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "Show all jobs" : "Show ⭐ Only"}
        </button>
        </div>
        <div className="list-container">
          {toggle ? displayJobCards : <JobTable jobs={filteredJobs} onJobSave={setRefreshJobs} handleDeleteCallback={handleDeleteCallback} />}
        </div>
      </div>
  );
}

export default JobListContainer;
