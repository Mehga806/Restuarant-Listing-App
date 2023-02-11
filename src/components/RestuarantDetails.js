import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestuarantOP from './RestuarantOP';
import RestuarantReview from './RestuarantReview';
import { useSelector } from 'react-redux';

function RestuarantDetails() {
    //1.get restuarant id from url
    const urlParams= useParams()
    console.log(urlParams.id);

     //2.create a state for holding restaurantlist
  //const [restuarantList,setRestuarantList]= useState([])

  //3.api call
  // const fetchData = async()=>{
  //   await fetch('/restaurants.json')
  //   .then((data)=>data.json()
  //   .then(res=>setRestuarantList(res.restaurants)))
  // }

  //to fetch updated state from store

const {restuarantList} = useSelector((state)=>state.restListReducer)
console.log(restuarantList);

  //4.to load items or values when a component is created
  useEffect(()=>{
   // fetchData()
  },[])
  console.log(restuarantList);
  //5.find restuarant whose id is given in urlParams
 const restuarant = restuarantList.find(item=>(
    item.id==urlParams.id
 ))
console.log(restuarant);
  return (
    <div>
        {
            restuarant?(
          <>
                <Row className="my-3">
                <Col md={3}>
                <Image className="border rounded mx-4" src={restuarant.photograph}fluid>
                </Image>
                </Col>
                <Col className="mx-5" md={7} >
                <ListGroup>
                    <h2 className='py-4'>{restuarant.name}</h2>
                    <ListGroup.Item> <p>{restuarant.neighborhood}</p></ListGroup.Item>
                   
          <ListGroup.Item>
            <p>cuisine type: {restuarant.cuisine_type}</p>
            </ListGroup.Item>
          <ListGroup.Item>
            <p>Address : &nbsp;{restuarant.address}</p> 
            </ListGroup.Item>
          <ListGroup.Item>
            <RestuarantOP op={restuarant.operating_hours}/>
            </ListGroup.Item>
         
          
        </ListGroup>
        
                </Col>
            </Row>
                <ListGroup.Item>
                <Row>
                   <RestuarantReview data={restuarant.reviews}/>
                </Row>
              </ListGroup.Item>
          </>
            ): 'No Data to display'
        }
       
    </div>
  )
}

export default RestuarantDetails