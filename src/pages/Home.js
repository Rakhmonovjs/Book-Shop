import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import "./Home.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Servis from '../Servis/Servis';


const Home = () => {

    const year = new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero_content'>
                            <p className='hero_subtitle'>Trend Book of the {year}</p>
                            <h2>Make your knowledge more Minimalistic & Modern</h2>
                            <p>Knowledge is often understood as awareness of facts or as practical skills, and may also mean familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification</p>
                            <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'><Link to='shop'>Shop NOW !</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='hero_img'>
                            <img src={heroImg} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Servis />
    </Helmet>
  )
}

export default Home