import { useState, useEffect } from "react"
import JobCard from "./JobCard";
import JobTable from "./JobTable"
import "./JobListContainer.css"

function JobListContainer() {
    const [jobs, setJobs] = useState([]);
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
        .then(r => r.json())
        .then(jobsData => {
            setJobs(jobsData)
        })
    }, [toggle]);

    function handleDeleteCallback(deletedJobId) {
        setJobs(jobs => jobs.filter(job => job.id !== deletedJobId));
      }


    const displayJobCards = jobs.map(job => <JobCard key={job.id} jobs={job} onDelete={handleDeleteCallback}/>)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Display card":"Display table"}</button>    
                <div className="list-container">
                {toggle ? displayJobCards : <JobTable jobs={jobs} />}
            </div>
        </div>
    );
};

export default JobListContainer