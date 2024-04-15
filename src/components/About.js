import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
  return (
    <div
      id="about"
      className=" container "
      style={{
        minWidth: "100vw",
        margin: "0px",
        boxSizing: "border-box",
        padding: "0px",
        marginTop: "2em",
      }}
    >
      <div
        className="carousel-and-content smscreen"
        style={{ margin: "0px", boxSizing: "border-box", padding: "0px" }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "3.5%",
            paddingTop: "2%",
          }}
        >
          About Us
        </h2>
        <style jsx>{`
          @media screen and (max-width: 500px) {
            h2 {
              font-size: 20px; // Font size for screens less than 737px wide
              margin: 0px;
            }
          }
        `}</style>
        <Container fluid className="smscreen">
          <Row xs={1} md={2} lg={2}>
            <Col
              style={{
                marginBottom: "7%",
                borderRadius: "10%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#d4e3ed", // Gray background color
                  color: "#000",
                  fontSize: "20px",
                  padding: "5%",
                  marginRight: "3%", // Adjust padding as needed
                  float: "left", // Align to the left
                  clear: "both", // Clear the float
                  boxSizing: "border-box",
                  borderRadius: "2%", // Include padding in width
                  textAlign: "justify",
                }}
                className="aboutCard"
              >
                <p className="aboutText">
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
              <style jsx>{`
                @media screen and (max-width: 500px) {
                  .aboutText {
                    font-size: 14px; // Font size for screens less than 737px wide
                    margin: 0px;
                  }
                  .aboutCard {
                    padding: 0%;
                    padding-top: 0%;
                    boxsizing: border-box;
                  }
                  .container {
                  }
                }
              `}</style>
            </Col>
            <Col
              style={{
                marginBottom: "7%",
                borderRadius: "10%",
                // width: "100vw",
                padding: "0px",
              }}
              className="youtube"
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
        <style jsx>{`
          @media screen and (max-width: 500px) {
            .youtube {
              margin: 0px;
              min-height: 15em;
              padding: 0px;
            }
            .smscreen {
              width: 100%;
            }
            Container {
              width: 100vw;
            }
          }
        `}</style>
      </div>
    </div>
    // </div>
  );
};

export default About;
