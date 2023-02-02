import React from 'react';
import "./Header.css";
import { Container, Row } from 'reactstrap';

import {motion} from 'framer-motion';

// import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Link, NavLink } from 'react-router-dom';

const nav_links = [
    {
        path:'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]


const Header = () => {
  return <header className='header'>
    <Container>
        <Row>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <Link to="/">
                    <h2><i class="ri-book-mark-line"></i></h2>
                    </Link>
                    {/* <img src={logo} alt="logo" /> */}
                    <div>
                        <Link to="/">
                        <h1>Book Shop</h1>
                        </Link>
                        {/* <p>Libraries</p> */}
                    </div>
                </div>
                <div className='navigation'>
                    <ul className='menu'>
                        {nav_links.map((item, index) => (
                            <li className='nav_item' key={index}>
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ""}>
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                        {/* <li className='nav_item'>
                            <NavLink to='home'>Shop</NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink to='home'>Cart</NavLink>
                        </li> */}
                    </ul>
                </div>

                <div className='nav_icons'>
                    <span className='fav_icon'>
                        <i class="ri-heart-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    <span className='cart_icon'>
                        <i class="ri-shopping-bag-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    <span>
                        <motion.img whileTap={{scale: 1.2}} src={userIcon} alt='' />
                    </span>
                </div>
                <div className='mobil_menu'>
                    <span><i class="ri-menu-fill"></i></span>
                </div>
            </div>
        </Row>
    </Container>
  </header>
}

export default Header