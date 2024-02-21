import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github-mark-white.png';
import navIcon4 from '../assets/img/download.png';
import mailIcon from '../assets/img/mail.ico';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container class="row no-gutters">
            <Row className="justify-content-center">
                <Col xs={12} sm={6} className="text-center">
                        <div className="social-icon">
                        <a href="https://github.com/alyfahmad/" target="_blank"><img src={github} alt="Github"/></a>
                        <a href="https://www.linkedin.com/in/alifahmad/" target="_blank"><img src={navIcon1} alt="LinkedIn"/></a>
                        {/* <a href="https://www.facebook.com/AlyfAhmad/" target="_blank"><img src={navIcon2} alt="Facebook"/></a> */}
                        {/* <a href="https://www.instagram.com/alyf_ahmad/" target="_blank"><img src={navIcon3} alt="Instagram"/></a> */}
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alif.ahmad.personal@gmail.com" target="_blank"><img src={mailIcon} alt="Send an Email"/></a>
                        <a href="https://drive.google.com/uc?export=download&id=1xHZWkdjU5laF4-Z4RRD4oPtmzzaEo5hI" target="_blank"><img src={navIcon4} alt="Download CV"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}