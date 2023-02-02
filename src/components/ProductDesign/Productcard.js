import React from 'react'
import productImg from '../../assets/images/trendbook1.jpg'
import { motion } from 'framer-motion';
import "./Productcard.css";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";


const Productcard = ({item}) => {
  return (
    <Col lg='3' md='4'  className='mb-2'>
      <div className='product_item'>  
        <div className='product_img'>
          <Link to={`/shop/${item.id}`}>
              <motion.img width={200} height={430} whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </Link>  
        </div>
        <div className='p-3 product_info'>
          <Link to={`/shop/${item.id}`}>
            <h3 className='product_name'>{item.productName}</h3>
          </Link>
        
        <span className='text-cent d-block'>{item.category}</span>
        </div>
        {/* <span>Robin</span> */}
        <div className='product_card_bottom d-flex align-items-center'>
            <span className='price' >${item.price}</span>
            <motion.span whileHover={{scale: 1.3}}>
            <i class="ri-shopping-cart-line">+</i>
            </motion.span>
        </div>
    </div>
    </Col>
  )
}

export default Productcard