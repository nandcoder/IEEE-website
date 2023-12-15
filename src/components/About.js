import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <div className="carousel-and-content">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "3.5%",
            paddingTop: "2%",
          }}
        >
          About Us
        </h2>
        <Container fluid>
          <Row xs={1} md={2} lg={2}>
            <Col
              style={{
                marginBottom: "7%",
                borderRadius: "10%",
                // marginLeft: 1,
              }}
            >
              <div
                style={{
                  backgroundColor: "#d4e3ed", // Gray background color
                  color: "#000",
                  fontSize: "20px",
                  padding: "7%",
                  paddingTop: "12%",
                  marginRight: "3%", // Adjust padding as needed
                  // width: '50%',            // Adjust width as needed
                  float: "left", // Align to the left
                  clear: "both", // Clear the float
                  boxSizing: "border-box",
                  borderRadius: "2%", // Include padding in width
                }}
              >
                <p>
                  The IEEE Student Branch at NIT Jamshedpur fosters technical
                  knowledge and expertise among students in electrical &
                  electronics engineering and computer science. It cultivates
                  research skills through paper readings and writing. Conducting
                  webinars and training sessions with IEEE experts, the student
                  branch is dedicated to providing quality exposure. With a
                  dynamic team of 10+ students and faculty coordinators, we aim
                  to inspire students to engage in research and contribute to
                  the country's crucial need for a skilled R&D workforce.
                </p>
              </div>
            </Col>
            <Col
              style={{
                marginBottom: "7%",
                borderRadius: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <iframe
                style={{
                  maxHeight: "500px",
                  maxWidth: "1000px",
                  height: "100%",
                  width: "100%",
                  borderRadius: "2%",
                }}
                src="https://www.youtube.com/embed/ERHPw_OaVI4?si=ZHcyIIQ2xNjotHC8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
