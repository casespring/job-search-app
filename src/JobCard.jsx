import { useState } from 'react';
import { ListGroup, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function JobCard({ jobs }) {
    const [favorite, setFavorite] = useState(jobs.favorite)

    console.log(jobs)

    function handleSelect(e) {
        console.log(e.target.value)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{jobs.jobTitle}</Card.Title>
        <ListGroup.Item>Company: {jobs.company}</ListGroup.Item>
        <ListGroup.Item>Date Applied: {jobs.dateApplied}</ListGroup.Item>
        <ListGroup.Item>Status: {
            <DropdownButton id="dropdown-button" title={jobs.status} onSelect={handleSelect}>
                <Dropdown.Item >No response yet</Dropdown.Item>
                <Dropdown.Item >Follow-up</Dropdown.Item>
                <Dropdown.Item >Interview scheduled</Dropdown.Item>
                <Dropdown.Item >Declined</Dropdown.Item>
                <Dropdown.Item >Accepted</Dropdown.Item>
            </DropdownButton>}  
        </ListGroup.Item>
        <Card.Text>
          Notes: ----
        </Card.Text>
        <Card.Link href={jobs.jobDescription}>Link to job description</Card.Link>
        <br/>
        <Button variant="primary" >{favorite ? "Remove from favorite" : "Add to favorite"}</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;