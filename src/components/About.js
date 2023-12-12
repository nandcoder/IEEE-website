import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div className='container' id='about'>
      <div className='carousel-and-content'>
        <h2 style={{ marginLeft: '5%' }}>About Us</h2>
        <Container fluid>
          <Row xs={1} md={2} lg={2}>
            <Col style={{ marginBottom: 10, borderRadius: '10%' }}>
              <div
                style={{
                  backgroundColor: '#d4e3ed', // Gray background color
                  color: '#000',
                  fontSize: '20px',
                  padding: '1%',
                  marginLeft: '3%',
                  marginRight: '3%', // Adjust padding as needed
                  // width: '50%',            // Adjust width as needed
                  float: 'left', // Align to the left
                  clear: 'both', // Clear the float
                  boxSizing: 'border-box', // Include padding in width
                }}
              >
                <p>
                  The IEEE Systems Council, known as the Institute of Electrical
                  and Electronics Engineers, represents the pinnacle of
                  technical professionalism and innovation globally. With a
                  membership that encompasses engineers, scientists, and allied
                  professionals from diverse domains, including computer
                  science, software development, information technology,
                  physics, and medicine, the Systems Council epitomizes the
                  pursuit of technological excellence. It is regarded as an
                  institution that empowers every student to confront intricate
                  challenges and drive innovation.
                </p>
              </div>
            </Col>
            <Col style={{ marginBottom: 10, borderRadius: '10%' }}>
              <iframe
                style={{
                  maxHeight: '500px',
                  maxWidth: '1000px',
                  height: '100%',
                  width: '100%',
                }}
                src='https://www.youtube.com/embed/ERHPw_OaVI4?si=ZHcyIIQ2xNjotHC8'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
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
