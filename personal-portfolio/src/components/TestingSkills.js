import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const TestingSkills = () =>  {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0 },
            items: 1
        },
    };
 
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx-testing">
                            <h2>
                                Software Testing Skills 
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>90%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation90" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Python Automation</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>85%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation85" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Selenium Webdriver</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>80%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation80" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Robot Framework</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>80%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation80" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Java Automation</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>65%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation65" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Azure Pipeline integration and Parallel Execution </h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>80%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation80" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>API Testing</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>90%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation90" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>UI Testing</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>95%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation95" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Manual Testing</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>85%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation85" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>Datebase and Data Conversion Testing</h5>
                                </div>
                                <div className="item">
                                    <div class="gauge">
                                        <div class="outer">
                                            <div class="inner">
                                                <div class="number">
                                                    <h3>85%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle class="circle circle-animation85" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                    <h5>ETL Testing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}