import React from 'react'
// import { useEffect, useState } from 'react'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'
//// import products from '../products'
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice'

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
   
  // useEffect(() => {
  //   const fetchProducts = async() => {
  //     const {data} = await axios.get('/api/products');
  //     setProducts(data)

  //   };
  //   fetchProducts();
  // }, []);

const {data: products, isLoading, error} = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : ( <>
      <h1>Latest Products</h1>
       <Row>
        {products.map((product)=> {
          return(  
            <>
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
            </>
        )}) }
      </Row></>
      )}
      </>
        );
};
      
      {/* // <>
      // <h1>Latest Products</h1>
      // <Row>
      //   {products.map((product)=> {
      //     return(  
      //       <>
      //       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      //           <Product product={product} />
      //       </Col>
      //       </>
      //   )}) }
      // </Row>
      //</>  */}



export default HomeScreen
