import Table from 'react-bootstrap/Table';
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import img1 from "../component/Closed Stores-rafiki.png"
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { remove,RemoveAll } from '../rtk/CartSlice';
import { Link } from 'react-router-dom';

export const Cart = (props) => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const total =cart.reduce((acc,product) => {
      acc += product.price * product.quantaty;
      return acc
    },0)

    const [product,setProduct] = useState(false)
    const [empty,setEmpty] = useState(false)
    const [clear,setClear] = useState(false)

    useEffect(() => {
        if(cart.length > 0){
          setProduct(true)
          setEmpty(false)
          setClear(true)
      }else{
        setEmpty(true)
        setProduct(false)
        setClear(false)
      }
    },[cart,setEmpty,setProduct])
  return (
    <Container className='height'>
     { product && <Table className='mt-3'  striped bordered hover>
    <thead>
      <tr className={props.modeThree ? "link-white" : "link-black "}>
        <th>Title</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantati</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    { cart.map((product) => (

        <tr key={product.id}>
          <td className={props.modeThree ? "link-white" : "link-black"}>{product.title}</td>
          <td><img className='img-fluid' style={{maxWidth:"30%"}} src={product.image} alt=""/></td>
          <td className={props.modeThree ? "link-white" : "link-black"}>{product.price}$</td>
          <td className={props.modeThree ? "link-white" : "link-black"}>{product.quantaty}</td>
          <td><Button onClick={() => dispatch(remove(product))} variant='danger'>Remove</Button></td>
        </tr>
    ))  }
    </tbody>
  </Table>}
  {clear && 
    <Container className='pb-4' style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddinBottom: "50px"}}>
     <Button onClick={() => dispatch(RemoveAll())} variant='danger'>Remove All</Button>
     <h5>Total:{total.toFixed(2)}$</h5>
     </Container>
  }
  {empty && 
    <Container className='text-center'>
    <h1 style={{fontSize:"50px",marginTop:"30px"}}>Cart Is Empty</h1>
    <Link to="/" className="mt-2 pb-3 d-block text-center">Go Shopping</Link>
    <img src={img1} className="img-fluid" style={{width:"92%",height: "516px"}} alt="" />
    </Container>
  }
    </Container>
  )
}
