import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import workspaceImg from "../assets/img/11.png";
import titleImage from "../assets/img/title_image.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software QA Engineer", "Automation Engineer", "Data Engineer", "Web Developer" ];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])
    
    const tick = () => {
        let i  = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
    }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center"> 
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility partialVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn animate_slow" : "" }>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Alif Ahmad`}<br/><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Quality Assurance Engineer", "Automation Engineer", "Data Engineer", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Seasoned experience in automation, data quality assurance, white box and manual testing for one of the leading Cloud based Practice Management Software provider 
                     in the US and Canada. Possessing web development experience in national scale projects with millions of users.</p>
                  <Router>
                  <HashLink to='#connect' style={{ textDecoration: 'none' }}>
                  <button>Contact Me <ArrowRightCircle size={25} /></button>
                  </HashLink>
                  </Router>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn animate_slow" : ""}>
                  <img src={titleImage} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
