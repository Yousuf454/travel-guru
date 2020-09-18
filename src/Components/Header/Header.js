import React, { useContext } from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../Image/Logo-white.png'
import './Header.scss'
const Header = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    return (
        <div id="navbar">
            <Container>
                <Navbar expand="lg">
                    <Link to="/home/" className="navbar-brand">
                        <img src={Logo} alt=""/>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>News</Nav.Link>
                            <Nav.Link>Destination</Nav.Link>
                            <Nav.Link>Blog</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            {
                                !loggedinUser.email && <Link to="/login" className="nav-link btn btn-warning">Log in</Link>
                            }
                            {
                                loggedinUser.email && <Nav.Link className="btn btn-warning" onClick={() => setLoggedinUser({})}>Sign out</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;