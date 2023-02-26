import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.png";
import selenium from "../assets/img/selenium.png";
import robot from "../assets/img/robot.png";
import java from "../assets/img/java.png";
import cypress from "../assets/img/cypress.png";
import azure from "../assets/img/azure.png";
import postman from "../assets/img/postman.png";
import jmeter from "../assets/img/jmeter.png";
import synapse from "../assets/img/synapse.png";
import mssql from "../assets/img/mssql.png";
import zephyr from "../assets/img/zephyr.png";
import atlassian from "../assets/img/atlassian.png";
import manual from "../assets/img/manual.png";

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
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={python} alt="Python Automation"/>
                                    <h5>Python Automation</h5>
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
                                    <img src={selenium} alt="Selenium Webdriver"/>
                                    <h5>Selenium Webdriver</h5>
                                </div>
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
                                    <img src={robot} alt="Robot Framework"/>
                                    <h5>Robot Framework</h5>
                                </div>
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
                                    <img src={java} alt="Java Automation"/>
                                    <h5>Java Automation</h5>
                                </div>
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
                                    <img src={cypress} alt="Cypress Automation"/>
                                    <h5>Cypress Automation</h5>
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
                                    <img src={azure} alt="Azure Pipeline integration and Parallel Execution"/>
                                    <h5>Azure Pipeline integration and<br/> Parallel Execution </h5>
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
                                    <img src={synapse} alt="Azure Synapse Data Warehouse ETL Testing"/>
                                    <h5>Azure Synapse Data Warehouse ETL Testing</h5>
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
                                    <img src={mssql} alt="Microsoft SQL Server Database and Data Conversion Testing"/>
                                    <h5>Microsoft SQL Server Datebase and <br/>Data Conversion Testing</h5>
                                </div>
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
                                    <img src={postman} alt="Postman API Testing"/>
                                    <h5>Postman API Testing</h5>
                                </div>
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
                                    <img src={jmeter} alt="Jmeter Load Testing"/>
                                    <h5>JMeter Load Testing</h5>
                                </div>
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
                                    <img src={zephyr} alt="Postman API Testing"/>
                                    <h5>Zephyr Scale Test Case Management</h5>
                                </div>
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
                                    <img src={atlassian} alt="Atlassian Jira & Confluence based agile testing"/>
                                    <h5>Atlassian Jira & Confluence based Agile Testing</h5>
                                </div>
                                <div className="item">
                                    {/* <div class="gauge">
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
                                    </svg> */}
                                    <img src={manual} alt="Manual Testing"/>
                                    <h5>Manual Testing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}