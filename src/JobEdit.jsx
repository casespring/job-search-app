// function JobEdit() {
//     function handleStatusSelect(selected) {
//         setCurrentStatus(selected)
//         fetch(`http://localhost:3000/jobs/${jobs.id}`, {
//             method: "PATCH",
//             headers: { "content-type": "Application/json" },
//             body: JSON.stringify({status: selected})
//         }).then(r => r.json())
//           .then(data => console.log(data))
//     };
        
//     function handleFavoritedClick() {
//         setAddFavorite(!addFavorite)
//         fetch(`http://localhost:3000/jobs/${jobs.id}`, {
//             method: "PATCH",
//             headers: { "content-type": "Application/json" },
//             body: JSON.stringify({ favorite: !addFavorite })
//         }).then(r => r.json())
//           .then(data => console.log(data))
//     };
  
//     function handleNotesChange(e) {
//         setNotes(e.target.value)
//         fetch(`http://localhost:3000/jobs/${jobs.id}`, {
//             method: "PATCH",
//             headers: { "content-type": "Application/json" },
//             body: JSON.stringify({ notes: e.target.value })
//         }).then(r => r.json())
//           .then(data => console.log(data))
//     };

//     <ListGroup.Item><strong>Status:</strong> {
//         <DropdownButton id="dropdown-button" title={currentStatus} onSelect={handleStatusSelect}>
//             <Dropdown.Item eventKey="Applied 💼">Applied 💼</Dropdown.Item>
//             <Dropdown.Item eventKey="Interview scheduled 🗓">Interview scheduled 🗓</Dropdown.Item>
//             <Dropdown.Item eventKey="Interview complete ✅">Interview complete ✅</Dropdown.Item>
//             <Dropdown.Item eventKey="Rejected ❌">Rejected ❌</Dropdown.Item>
//         </DropdownButton>}  
//     </ListGroup.Item>

// <Form.Control
// as="textarea"
// rows={2} 
// value={notes}
// onChange={handleNotesChange}
// />



//     return (
//         <div></div>
//     )
// }

// export default JobEdit;