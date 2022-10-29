import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
    const experience = [
        {
            time: "September 2022 - Present",
            title: "Senior Software Quality Assurance Engineer",
            subtitle: "Enosis Solutions",
            description: <ul>
                            <li><b><u>Technical Skills</u></b></li>
                            <ul>
                                <li>Web Automation testing with Selenium WebDriver, Robot Framework and Python.</li>
                                <li>Microsoft SQL Server & Azure Synapnse Database testing.</li>
                                <li>Manual Testing &#40;Black Box, Grey Box, White box, Sanity, Regression, Acceptance,Integration Testing&#41;.</li>
                                <li>UI Testing with BrowserStack.</li>
                                <li>API Testing with Postman and Custom Tools.</li>
                                <li>Microsoft PowerBI Testing.</li>
                                <li>White box testing of Stored Procedures & C# components.</li>
                                <li>Database performance, transfer, archival and restructure testing.</li>
                                <li>ETL Testing for Data Conversion.</li>
                            </ul>
                            <br/>
                            <li><b><u>Soft Skills</u></b></li>
                            <ul>
                                <li>Point of Contact for Data Testing Team with 3+ Members.</li>
                                <li>Point of Contact for API Testing Team with 3 Members.</li>
                                <li>Maintained project dependencies throught Jira & Confluence.</li>
                                <li>Lead daily communication and requirement gathering for Offshore Clients &#40;US&#41;.</li>
                                <li>Provided timely reports on automation progress and execution status.</li>
                                <li>Delivered quality software through quality control test reports, determining software quality and readiness for release.</li>
                            </ul>
                        </ul>
        },
        {
            time: "March 2020 - August 2020",
            title: "Junior Programmer",
            subtitle: "Synesis IT",
            description: <ul>
                            <li><b><u>Technical Skills</u></b></li>
                            <ul>
                                <li>Front End Development using Angular 9.</li>
                                <li>Back End Development using Spring boot, hibernate, MySQL.</li>
                                <li>API development.</li>
                                <li>Windows Server Deployment.</li>
                                <li>Part of National Level Projects with millions of users - 
                                    <ul>
                                        <li>Shastho Batayon &#40;National HealthTelecommunication Helpline&#41;</li>
                                        <li>National Equipment Identity Register &#40;NIER&#41;</li>
                                        <li>BRAC Moner Jotno &#40;Mental Counselling Helpline&#41;</li>
                                        <li>Telenor Health &#40;Health Care Registration Services&#41;</li>
                                    </ul>
                                </li>
                            </ul>
                            <br/>
                            <li><b><u>Soft Skills</u></b></li>
                            <ul>
                                <li>Daily communication and status preparation for team.</li>
                                <li>Project Management through ClickUp.</li>
                                <li>Delivered quality software maintaining deadlines and thorough assesment of the requirement with minimal supervision.</li>
                                <li>Task breakdown and component distribution.</li>
                            </ul>
                        </ul>
        },
        {
            time: "Januray 2019 - December 2019",
            title: "Teaching Assistant",
            subtitle: "BRAC University",
            description: <ul>
                                <li>Conducted tutorial services for students to provide academic support in
                                computer programming and data structure concepts..</li>
                                <li>Evaluated student progress in coding methodologies and developed plan of
                                action for achievement.</li>
                                <li>Evaluated and monitored lab activities.</li>
                                <li>Evaluated assignments and exams.</li>
                        </ul>
        },
    ];
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return(
        <section className="experience" id="experience">
            <Container>
                <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__zoomInDown " : "" }>   
                        <Row>
                            <Col>
                            <h2>Work Experience</h2><br/>
                                {/* <div className="experience2-bx"> */}
                                <div className="accordion-wrap">
                                    <div className="accordion">
                                        {experience.map((item,i) => (
                                            <div className="teaser">
                                                <div className="time">
                                                    <h5>{item.time}</h5>
                                                </div>
                                                <div className="title" onClick={() => toggle(i)}>
                                                    <h3>{item.title}</h3>
                                                    <h6 className="theme">{item.subtitle}</h6>
                                                    <div className={selected === i ? 'content show' : 'content'}>
                                                        {item.description}
                                                    </div>
                                                </div>
                                                <div className="accordion-toggle" onClick={() => toggle(i)}>
                                                    <span className={selected === i ? 'one' : 'two'}>
                                                    </span>
                                                    <span className='one'>
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* </div> */}
                            </Col>
                        </Row>
                    </div>
                }
                </TrackVisibility>
            </Container>
        </section>
    )
}