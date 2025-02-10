import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/guillermocortes.png";
import editor from "../../Assets/Projects/assets.png";
import chatify from "../../Assets/Projects/duñas.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rodengray"
              description="I worked on the team that developed the Rodengray Shopify store, focusing on creating a seamless user experience with a responsive design. My role involved optimizing site speed and accessibility, ensuring smooth navigation and an easy shopping process."
              demoLink="https://rodengray.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Guillermo Cortés Inmobiliaria"
              description="I contributed to the development of the Guillermo Cortés real estate advisor website, using JavaScript, HTML, and CSS. My focus was on building a user-friendly, responsive site with smooth navigation, optimized for both desktop and mobile devices, ensuring a seamless browsing experience for potential clients."
              demoLink="https://guillermocortes.com.ar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Assetly"
              description="I developed an ERP system for managing fixed assets using React, Material UI, and Node.js with Express. The backend integrates with SQL Server (via Workbench) to manage and store asset data. I also deployed the application on AWS, ensuring scalability and reliability. The system provides a seamless user experience, allowing users to easily track and manage assets in real time."
              ghLink="https://github.com/Khornegor96/assets"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
