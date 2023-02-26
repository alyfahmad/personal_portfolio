import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import underDevelopment from "../assets/img/underDevelopment.gif";
import underDevelopment2 from "../assets/img/underDevelopment2.gif";
import underDevelopment3 from "../assets/img/underDevelopment3.gif";
import cypress from "../assets/img/cypress.gif";
import ecommerce from "../assets/img/ecommerce.gif";

export const Projects = () => {
    const projects1 = [
        {
            title: "HRM Test Automation",
            description: "Test Automation Project on a Single Page Human Resource Management App using Cypress following Page Object Model",
            imgUrl: cypress,
            link: "https://github.com/alyfahmad/cypress_automation"
        },
        {
            title: "E-Commerce Test Automation",
            description: "Test Automation Project on a test ecommerce site using python, selenium and robotframework following Page Object Model",
            imgUrl: ecommerce,
            link: "https://github.com/alyfahmad/robot_framework_automation"
        },
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment3,
        }
    ];
    const projects2 = [
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment2,
        },
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment,
        },
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment3,
        }
    ];
    const projects3 = [
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment3,
        },
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment2,
        },
        {
            title: "Under Development",
            description: "Coming Soon",
            imgUrl: underDevelopment,
        }
    ];
    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2><br/>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Software Test Automation</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Data Quality Assurance</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Web Development</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}