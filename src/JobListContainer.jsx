import { useState, useEffect } from "react"
import JobCard from "./JobCard";
import JobTable from "./JobTable"
import JobCardSearch from "./JobCardSearch";
import "./JobListContainer.css"

function JobListContainer() {
    const [jobs, setJobs] = useState([]);
    const [toggle, setToggle] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
        .then(r => r.json())
        .then(jobsData => {
            setJobs(jobsData)
        })
    }, [toggle]);

    function settingSearchTerm(search) {
        setSearchTerm(search)
    }

    const searchJobs = jobs.filter(job => {
        return job.company.toLowerCase().includes(searchTerm.toLowerCase()) || job.status.toLowerCase().includes(searchTerm.toLowerCase())
      })

    function handleDeleteCallback(deletedJobId) {
        setJobs(jobs => jobs.filter(job => job.id !== deletedJobId));
      }


    const displayJobCards = searchJobs.map(job => <JobCard key={job.id} jobs={job} onDelete={handleDeleteCallback}/>)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Display card":"Display table"}</button>
                <div>
                     <JobCardSearch onSearchTerm={settingSearchTerm} jobs={jobs}/> 
                    <div className="list-container">
                    {toggle ? displayJobCards : <JobTable jobs={searchJobs} />}
                </div>
            </div>
        </div>
    );
};

export default JobListContainer