import React from 'react'
import './Footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem, List} from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const  year = new Date().getFullYear()
  return ( <footer className='footer'>
    <Container>
      <Row>
        <Col lg="4">
        <div className='logo'>
                    <Link to="/">
                    <h2><i class="ri-book-mark-line"></i></h2>
                    </Link>
                    <div>
                        <Link to="/">
                        <h1>Book Shop</h1>
                        <p className='footer_text mt-4'>
                        В сентябре 1969 года несколько студентов одного из американских колледжей опубликовали ряд статей, где утверждали, что ключи к подобной теории могут быть найдены в творчестве The Beatles
                        </p>
                        </Link>
                    </div>
                </div>
        </Col>
        <Col lg="3">
          <div className='footer_links'>
            <h4 className='links_title'>Top Category</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <List to='#'>Mobile Book</List>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <List to='#'>Mobile Book</List>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <List to='#'>Mobile Book</List>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <List to='#'>Mobile Book</List>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="2">
        <div className='footer_links'>
            <h4 className='links_title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <List to='shop'>Shop</List>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <List to='/cart'>Cart</List>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <List to='/login'>Login</List>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <List to='#'>Privacy Policy</List>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="3">
        <div className='footer_links'>
            <h4 className='links_title'>Contact</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-map-pin-5-line"></i></span>
                <p>Tashken Uzbekistan</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <span><i class="ri-phone-line"></i></span>
                <p>+123456789</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <span><i class="ri-mail-line"></i></span>
                <p>asadbek@gmail.com</p>
              </ListGroupItem>
              {/*  */}
            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <p className='footer_copy'>Copyright {year} developed by Rakhmonov Asadbek </p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer