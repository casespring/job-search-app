import { useState } from "react";
import "./JobCardSearch.css"

function JobCardSearch({ onSearchTerm }) {
    const [typeValue, setTypeValue] = useState("")

    const handleChange = (e) => {
        setTypeValue(e.target.value)
        onSearchTerm(e.target.value)
        console.log(typeValue)
    }

    return (
        <div className="searchbar" >
            <input
            type="text"
            id="search"
            placeholder="search... 🔍"
            value={typeValue}
            onChange={handleChange}
            />
        </div>
    );
 }


export default JobCardSearch;