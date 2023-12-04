import { useState, useEffect } from "react"
import JobCard from "./JobCard";
import JobTable from "./JobTable"

function JobListContainer() {
    const [jobs, setJobs] = useState([]);
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
        .then(r => r.json())
        .then(jobsData => {
            // console.log(jobsData)
            setJobs(jobsData)
        })
    }, []);
    

    const displayJobCards = jobs.map(job => {
          return  <JobCard key={job.id} jobs={job} />
    })
    
    const displayJobTable = jobs.map(job => {
       return <JobTable key={job.id} jobs={job} />
    })

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Display card":"Display table"}</button>    
            {displayJobCards}
        </div>
    );
};

export default JobListContainer