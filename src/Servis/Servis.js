

import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import "./Servis.css"

const Servis = () => {
  return <section className='servis'>
        <Container>
            <Row>
                <Col lg='3' md ='4'>
                    <div className='servis_item'>
                        <span><i class="ri-truck-line"></i></span>

                        <div>
                            <h3>Free Shipping</h3>
                            <p>The book will be delivered to any address</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
  </section>
}

export default Servis
