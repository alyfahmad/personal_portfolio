import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import A_logo from '../assets/img/A_logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/download.png';
import mailIcon from '../assets/img/mail.ico';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true); 
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img style={{  width:60, height:60}} src={A_logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span class="navbar-text">
              <div className="social-icon">
                  <a href="https://www.linkedin.com/in/alifahmad/" target="_blank"><img src={navIcon1} alt="LinkedIn"/></a>
                  {/* <a href="https://www.facebook.com/AlyfAhmad/" target="_blank"><img src={navIcon2} alt="Facebook"/></a> */}
                  <a href="https://www.instagram.com/alyf_ahmad/" target="_blank"><img src={navIcon3} alt="Instagram"/></a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alif.ahmad.personal@gmail.com" target="_blank"><img src={mailIcon} alt="Send an Email"/></a>
                  <a href="https://drive.google.com/uc?export=download&id=1RbhBXcDIzRPRYtDWJFPqY832h7_b5iby" target="_blank"><img src={navIcon4} alt="Download CV"/></a>
              </div>
              <Router>
                <HashLink to='#connect'>
                <button className="vvd"><span>Let's connect</span></button>
                </HashLink>
              </Router>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}