import { useState, useEffect } from "react"
import JobCard from "./JobCard";
import JobTable from "./JobTable"

function JobListContainer() {
    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Display card":"Display table"}</button>    
            {toggle ? <JobCard /> : <JobTable />}
        </div>
    );
};

export default JobListContainer