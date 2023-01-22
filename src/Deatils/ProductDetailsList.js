import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap"
import {Row} from "react-bootstrap"
import { addtocart } from "../rtk/CartSlice";

import ConsecutiveSnackbars from "../component/MessageAddCart";






export const ProductDetailsList = (props) => {
   const dispatch = useDispatch()
    const [product,setProduct] = useState({})
    const params = useParams()
    const urlApi = "https://fakestoreapi.com/products"
    useEffect(() => {
        fetch(`${urlApi}/${params.productId}`)
            .then(res=>res.json())
            .then((product) => setProduct(product))
    },[])
    
  return (
    <>
          <div >
          <Container className="mt-4 details">
          <Row>
             <div className=" mb-5 col-xxl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src={product.image} className="img-fluid mb-4" alt=""/>
             </div>
             <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h4 className="mb-4">{product.title}</h4>
                <h6 className="mb-3">Category : {product.categorie}</h6>
                <p>Brand:</p>
                <p>Description:</p>
             </div>
             <div className="col-xxl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 box-details">
                <div style={{padding:"30px 20px 40px 20px",borderRadius:"3px"}} className={props.modeTwo ? "black-details" : "white-details"}>
                <h5 style={{marginBottom:"25px"}}>price : {product.price}$</h5>
                <ConsecutiveSnackbars button={<Button  className="btn-details" onClick={() => dispatch(addtocart(product))}>Add To Cart</Button>}/>
                </div>
             </div>
             <Link to="/" className="mt-2 pb-3 text-center">Go Shopping</Link>
          </Row>
       </Container>
          </div>
    </>
  )
}
