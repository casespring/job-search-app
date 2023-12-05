import { useState, useEffect } from "react"
import JobCard from "./JobCard";
import JobTable from "./JobTable"

function JobListContainer() {

    const [jobs, setJobs] = useState([]);
    const [toggle, setToggle] = useState(true)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
        .then(r => r.json())
        .then(jobsData => {
            setJobs(jobsData)
        })
    }, []);

    function handleEditMode() {
        setEditMode(!editMode)
    }


    const displayJobCards = jobs.map(job => <JobCard editMode={editMode} key={job.id} jobs={job} />)


    return (
        <div>
            <button onClick={handleEditMode}>{editMode ? "Exit Edit Mode" : "Edit Mode" }</button>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Display card":"Display table"}</button>    
            {toggle ? displayJobCards : <JobTable editMode={editMode} jobs={jobs} />}
        </div>
    );
};

export default JobListContainer