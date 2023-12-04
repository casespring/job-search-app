import { useState } from 'react';
import { ListGroup, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function JobCard({ jobs }) {
    const [favorite, setFavorite] = useState(jobs.favorite)
    const [currentStatus, setCurrentStatus] = useState(jobs.status);

    console.log(jobs)

    function handleSelect(selected) {
        setCurrentStatus(selected)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{jobs.jobTitle}</Card.Title>
        <ListGroup.Item>Company: {jobs.company}</ListGroup.Item>
        <ListGroup.Item>Date Applied: {jobs.dateApplied}</ListGroup.Item>
        <ListGroup.Item>Status: {
            <DropdownButton id="dropdown-button" title={currentStatus} onSelect={handleSelect}>
                <Dropdown.Item >Applied 💼</Dropdown.Item>
                <Dropdown.Item >Interview scheduled 🗓</Dropdown.Item>
                <Dropdown.Item >Interview complete ✅</Dropdown.Item>
                <Dropdown.Item >Rejected ❌</Dropdown.Item>
            </DropdownButton>}  
        </ListGroup.Item>
        <Card.Text>
          Notes: {jobs.notes}
        </Card.Text>
        <Card.Link href={jobs.jobDescription}>Link to job description</Card.Link>
        <br/>
        <Button variant="primary" >{favorite ? "Remove from favorite" : "Add to favorite"}</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;