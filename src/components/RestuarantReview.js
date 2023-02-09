import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function RestuarantReview({data}) { 
     const [open, setOpen] = useState(false);


    console.log(data);
  return (
  <>
  <p className='py-2'><h5>Client Reviews</h5></p>
       {data.map((client) => (
        <Card  className="border m-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
            <h4>{client.name}</h4>
            </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {client.date}
            </Card.Subtitle>
        <Card.Text>
          Rating : {client.rating}
        </Card.Text>
        <Card.Text>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {client.comments}
        </div>
      </Collapse>

        </Card.Text>
        
      </Card.Body>
    </Card>
       ))
}
  </>
  )
       
}

export default RestuarantReview