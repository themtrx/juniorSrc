import React from 'react'
import {Container, Col, Row, Navbar, Nav} from 'react-bootstrap'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import logo from '../../img/logo.png'
import style from './index.module.css'

const Header = () => {
    return (
        <>
        <Container fluid className={style.container}>
            <Row>
                <Col>
                    <header className={style.header}>
                        <Navbar className={style['custom-mobile']}>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    width="200"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="Junior Script Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav>
                                    <Nav.Link href="https://github.com/themtrx" target="_blank" className={style['nav-link']}>
                                        <FontAwesomeIcon
                                            icon={faGithubSquare}
                                            color='#000'
                                            className={style.icons}
                                        />    
                                    </Nav.Link>
                                    <Nav.Link href="https://www.linkedin.com/in/d-st-dimitrov/" target="_blank">
                                        <FontAwesomeIcon 
                                            icon={faLinkedin}
                                            color='#000'
                                            className={style.icons}
                                        />
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Header