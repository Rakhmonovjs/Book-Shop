import React from 'react';   
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import "./Home.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Servis from '../Servis/Servis';
import Productlist from '../components/ProductDesign/Productlist';
import products from '../assets/data/products';

const Home = () => {
    const year = new Date().getFullYear()
    const [trendbook, setTrendbook] = useState([]);
    const [bestbook, setBestbook] = useState([]);

    useEffect(() => {
        const filterTrendBook = products.filter(
        (item) => item.category === "Hell of a BOOK"
        );

        const filterBestBook = products.filter(
            (item) => item.category === "bestbook"
            );

        setTrendbook(filterTrendBook);
        setBestbook(filterBestBook);
    }, []);

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
        <section className='trend_book'>
            <Container>
                <Row>
                    <Col lg="12" className='text-center'>
                        <h2 className='section_title'>Trend Book</h2>
                    </Col>
                    <Productlist data={trendbook}/>
                </Row>
            </Container>
        </section>
        <section className='best_book'>
            <Container>
                <Row>
                    <Col lg="12" className='text'>
                        <h2 className='section-title'>Best Book</h2>
                    </Col>
                    <Productlist data={bestbook} />
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Home