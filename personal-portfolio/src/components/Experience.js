import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  const experience = [
    {
      time: "September 2023 - Present",
      title: "Software Development Engineer in Test",
      subtitle: "Populate EMR",
      description: (
        <ul>
          <li>
            <b>
              <u>Technical Skills</u>
            </b>
          </li>
          <ul>
            <li>
              Designed and implemented Nightwatch.js (TypeScript) automation
              framework, reducing regression effort and saving 250+ hours of
              manual QA annually.
            </li>
            <li>
              Performed white-box testing, database and data integrity
              validation, and backend verification for mission-critical EMR
              workflows.
            </li>
            <li>
              Executed integration and API testing using Postman and
              custom-built scripts to ensure robust backend service reliability.
            </li>
            <li>
              Built and maintained data-driven reporting modules using MSSQL,
              C#, and .NET for real-time product and test metrics.
            </li>
            <li>
              Conducted performance testing to benchmark features and identify
              system bottlenecks for improved scalability.
            </li>
            <li>
              Generated advanced dashboards using Microsoft PowerBI to
              communicate automation insights and data quality trends.
            </li>
          </ul>
          <br />
          <li>
            <b>
              <u>Soft Skills</u>
            </b>
          </li>
          <ul>
            <li>
              Point of Contact for the SDET team, leading QA planning,
              coordination, and stakeholder communication.
            </li>
            <li>
              Led and mentored a team of 4 SDETs, conducting code reviews and
              promoting automation best practices.
            </li>
            <li>
              Managed project tracking and sprint coordination via Asana to
              ensure timely, high-quality deliveries.
            </li>
            <li>
              Collaborated with cross-functional teams to lead root cause
              analysis of defects, driving improvements in product stability.
            </li>
            <li>
              Delivered comprehensive reports to assess product metrics and 
              user journeys.
            </li>
          </ul>
        </ul>
      ),
    },
    {
      time: "September 2020 - September 2023",
      title: "Senior Software Quality Assurance Engineer (Level II)",
      subtitle: "Enosis Solutions",
      description: (
        <ul>
          <li>
            <b>
              <u>Technical Skills</u>
            </b>
          </li>
          <ul>
            <li>
              Architected a scalable Python-Selenium automation framework with
              Robot Framework integration for CI/CD pipelines.
            </li>
            <li>
              Led parallel execution strategies in multi-VM environments,
              reducing test cycle time by ~70%.
            </li>
            <li>
              Performed SQL Server and Azure Synapse testing, including stored
              procedure validation and ETL pipeline analysis.
            </li>
            <li>
              Executed manual testing across Black Box, Grey Box, White Box,
              Sanity, Regression, Acceptance, and Integration levels.
            </li>
            <li>
              Conducted end-to-end API testing using Postman and internal
              validation tools to ensure service continuity.
            </li>
            <li>
              Tested UI workflows (30+ screens, 25+ features) using BrowserStack
              to ensure cross-platform functionality.
            </li>
            <li>
              Performed data warehouse, archival, and restructuring validation
              for enterprise clients.
            </li>
          </ul>
          <br />
          <li>
            <b>
              <u>Soft Skills</u>
            </b>
          </li>
          <ul>
            <li>
              Point of Contact for Data Testing Team (3+ members) and API
              Testing Team (3 members), managing workflows and deliverables.
            </li>
            <li>
              Maintained test management, documentation, and project planning
              using Jira and Confluence.
            </li>
            <li>
              Led daily communications and requirements gathering with offshore
              US-based clients.
            </li>
            <li>
              Mentored junior QA engineers, contributing to skill development
              and knowledge sharing initiatives.
            </li>
            <li>
              Provided QA sign-off via detailed test reports, ensuring software
              met functional and data accuracy standards before release.
            </li>
          </ul>
        </ul>
      ),
    },
    {
      time: "January 2020 - August 2020",
      title: "Junior Programmer",
      subtitle: "Synesis IT",
      description: (
        <ul>
          <li>
            <b>
              <u>Technical Skills</u>
            </b>
          </li>
          <ul>
            <li>Front End Development using Angular 9.</li>
            <li>Back End Development using Spring boot, hibernate, MySQL.</li>
            <li>API development.</li>
            <li>Windows Server Deployment.</li>
            <li>
              Part of National Level Projects with millions of users -
              <ul>
                <li>
                  Shastho Batayon &#40;National HealthTelecommunication
                  Helpline&#41;
                </li>
                <li>National Equipment Identity Register &#40;NIER&#41;</li>
                <li>BRAC Moner Jotno &#40;Mental Counselling Helpline&#41;</li>
                <li>
                  Telenor Health &#40;Health Care Registration Services&#41;
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <li>
            <b>
              <u>Soft Skills</u>
            </b>
          </li>
          <ul>
            <li>Daily communication and status preparation for team.</li>
            <li>Project Management through ClickUp.</li>
            <li>
              Delivered quality software maintaining deadlines and thorough
              assesment of the requirement with minimal supervision.
            </li>
            <li>Task breakdown and component distribution.</li>
          </ul>
        </ul>
      ),
    },
    {
      time: "Januray 2019 - December 2019",
      title: "Teaching Assistant",
      subtitle: "BRAC University",
      description: (
        <ul>
          <li>
            Conducted tutorial services for students to provide academic support
            in computer programming and data structure concepts..
          </li>
          <li>
            Evaluated student progress in coding methodologies and developed
            plan of action for achievement.
          </li>
          <li>Evaluated and monitored lab activities.</li>
          <li>Evaluated assignments and exams.</li>
        </ul>
      ),
    },
  ];
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section className="experience" id="experience">
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__zoomIn animate_slow"
                  : ""
              }
            >
              <Row>
                <Col>
                  <h2>Work Experience</h2>
                  <br />
                  {/* <div className="experience2-bx"> */}
                  <div className="accordion-wrap">
                    <div className="accordion">
                      {experience.map((item, i) => (
                        <div className="teaser">
                          <div className="time">
                            <h5>{item.time}</h5>
                          </div>
                          <div className="title" onClick={() => toggle(i)}>
                            <h3>{item.title}</h3>
                            <h6 className="theme">{item.subtitle}</h6>
                            <div
                              className={
                                selected === i ? "content show" : "content"
                              }
                            >
                              <p>{item.description}</p>
                            </div>
                          </div>
                          <div
                            className="accordion-toggle"
                            onClick={() => toggle(i)}
                          >
                            <span
                              className={selected === i ? "one" : "two"}
                            ></span>
                            <span className="one"></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* </div> */}
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
