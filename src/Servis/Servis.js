

import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import "./Servis.css"
import serviceData from "../assets/data/serviceData";

const Servis = () => {
  return <section className='servis'>
        <Container>
            <Row>

                {
                    serviceData.map((item, index) => (
                        <Col lg='3' md ='4' key={index}>
                    <div className='servis_item'>
                        <span><i class={item.icon}></i></span>

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                </Col>
                    ))
                }
                
            </Row>
        </Container>
  </section>
}

export default Servis
