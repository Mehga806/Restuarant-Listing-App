import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function RestuarantReview({data}) { 
     const [open, setOpen] = useState(false);


    console.log(data);
  return (
  <>
  <p className='py-2 mx-4'><h5>Client Reviews...!!!</h5></p>
       {data.map((client) => (
        <Card  className="border m-4" style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>
            <h4>{client.name}</h4>
            </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {client.date}
            </Card.Subtitle>
        <Card.Text>
          Rating : {client.rating}  
          <img
          alt="no image"
          src="https://th.bing.com/th/id/R.3d3d17fe51e1e6897c245cc3809e27ed?rik=2zLbxSX9Xz6RVw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2f3D-Gold-Star-PNG-Free-Download.png&ehk=t0P7qxdNJI97njwgq8SonGv4DhEtZmCtrbJZbbeyr%2bQ%3d&risl=&pid=ImgRaw&r=0"
          width="60"
          height="30"
          className="d-inline-block align-top"
        />{' '}
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
        <div className='my-3' id="example-collapse-text ">
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