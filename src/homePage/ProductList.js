import { useState,useEffect } from "react";
import { Container, Row } from "react-bootstrap";


import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';





export function Productlist(props){
    const [products,setProduct] = useState([])
    const urlApi = "https://fakestoreapi.com/products"
    
    const getProducts = () => {
        fetch(urlApi)
        .then(res => res.json())
        .then((data) => setProduct(data))
    }
        useEffect(() => {
                getProducts()
            
        },[])
    return(
        <div className="products">
        <h1 className="text-center my-5">Products</h1>
        <Container>
        
        <Row>
           {products.map((product) => {
            return(
                <div style={{borderRadius:"3px",marginBottom:"25px"}} className="col-lg-4 col-md-4 col-sm-6 col-xs-6" key={product.id}>
                <Card className={props.moded ? "black-two" : "white-two"} style={{border:"none"}}>
                <Card.Body style={{borderRadius:"3px",padding:"0px",textAlign:"center"}}>
                <Link className="link-product"  style={{textDecoration:"none"}} to={`/${product.id}`}>
                <img src={product.image} className="img-fluid" style={{borderRadius:"3px",height:"200px"}} title={product.title} alt={product.title}/>
                <h5 className={props.moded ? "link-white" : "link-black"} style={{marginTop:"15px",marginBottom:"15px",fontSize:"23px",paddingLeft:"10px"}}>{product.title}</h5>
                </Link>
                <p style={{paddingLeft:"10px"}}>{product.price}$</p>
                </Card.Body>
              </Card>
                </div>
            )
           } )}
        </Row>
        </Container>
        
        
        </div>
        
    )
}

