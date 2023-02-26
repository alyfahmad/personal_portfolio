import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import csharp from "../assets/img/csharp.png";
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.png";
import sql from "../assets/img/sql.png";
import spring from "../assets/img/spring.png";
import angular from "../assets/img/angular.png";
import react from "../assets/img/react.png";

export const Skills = () =>  {
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
                        <div className="skill-bx">
                            <h2>
                                Programming Skills 
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={python} alt="Python"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={java} alt="Java"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={csharp} alt="C#"/>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={javascript} alt="JavaScript"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={typescript} alt="TypeScript"/>
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={sql} alt="SQL"/>
                                    <h5>SQL (MSSQL, MySQL)</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={spring} alt="Spring Boot"/>
                                    <h5>Spring Boot</h5>
                                </div>
                                {/* <div className="item">
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
                                    <h5>MSSQL/MYSQL</h5>
                                </div> */}
                                <div className="item">
                                    {/* <div class="gauge">
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
                                        <circle class="circle circle-animation80" cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg> */}
                                    <img src={angular} alt="Angular"/>
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={react} alt="React"/>
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}