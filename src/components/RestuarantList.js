import React from 'react';
import { useState,useEffect } from 'react';
import RestuarantCard from './RestuarantCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { allRestuarants } from '../actions/restuarantListAction';
import { useDispatch, useSelector } from 'react-redux';

function RestuarantList() {
  //create a state for holding restaurantlist
  //const [restuarantList,setRestuarantList]= useState([])

  //api call
  // const fetchData = async()=>{
  //   await fetch('/restaurants.json')
  //   .then((data)=>data.json()
  //   .then(res=>setRestuarantList(res.restaurants)))
  // }
//to use useDispatch hook

const dispatch = useDispatch()

//to fetch updated state from store

const {restuarantList} = useSelector((state)=>state.restListReducer)
console.log(restuarantList);



  //to load items or values when a component is created
  useEffect(()=>{
    //fetchData()
    //dispatch action
    dispatch(allRestuarants())
  },[])
  //console.log(restuarantList);

  return (
    //RestuarantCard
    <Row>
{
  restuarantList.map(restuarant=>(
    <Col md={6} lg={4} xl={3}>
    {/* child*/}
    <RestuarantCard item={restuarant}/>
    </Col>
  ))
}
    </Row>
  )
}

export default RestuarantList
