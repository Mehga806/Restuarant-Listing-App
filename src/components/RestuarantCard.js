import React from 'react'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestuarantCard({item}) {
  return (
<Link to={`/restuarant/${item.id}`} style={{textDecoration:'none',color:'success'}}>
  <Card style={{height:'500px'}} className='my-3 mx-3' >
        <Card.Img style={{height:'350px'}} className='p-3'  variant="top" src={item.photograph} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <p>Cuisine: {item.cuisine_type}</p>
          </Card.Text>
          <Card.Text>
            <p>{item.neighborhood}</p>
          </Card.Text>
       
        </Card.Body>

      </Card>
</Link>
      )
}

export default RestuarantCard