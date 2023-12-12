import React, { useState, useEffect } from "react";
import PreviewCard from "./PreviewCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Event = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://ieee-1vzv.onrender.com/api/events"
        );
        setEvent(response.data.events);
        console.log("Successfully fetched ", response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSeeMore = () => {
    alert("Button see more clicked with data:");
  };
  return (
    <div id="event" className="p-4">
      <div className="text-4xl font-semibold p-4 flex justify-center items-center h-full">
        Recent events
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        {event.map((event, index) => (
          <PreviewCard key={index} event={event} />
          
        ))}
      
        {/* </div> */}
      </div>
      <Link to="/events" style={{ textDecoration: "none" }}>
        <div className="flex justify-center items-center">
          <button
            className="cursor-pointer bg-sky-700 text-slate-100 w-40 h-8 rounded-md mt-1 flex justify-center items-center"
            style={{
              borderRadius: "17px",
              padding: "1em 1em 1em 1em",
            }}
          >
            <div className="flex font-light">Events Archive</div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Event;

// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";

// const About = () => {
//   return (
//     <div className='container'>
//       <div className='carousel-and-content'>
//         <h2
//           style={{ marginLeft: '45%', paddingBottom: '3.5%', paddingTop: '2%' }}
//         >
//           About Us
//         </h2>
//         <Container fluid>
//           <Row xs={1} md={2} lg={2}>
//             <Col
//               style={{
//                 marginBottom: '7%',
//                 borderRadius: '10%',
//                 // marginLeft: 1,
//               }}
//             >
//               <div
//                 style={{
//                   backgroundColor: '#d4e3ed', // Gray background color
//                   color: '#000',
//                   fontSize: '20px',
//                   padding: '7%',
//                   paddingTop: '12%',
//                   //   marginLeft: '%',
//                   marginRight: '3%', // Adjust padding as needed
//                   // width: '50%',            // Adjust width as needed
//                   float: 'left', // Align to the left
//                   clear: 'both', // Clear the float
//                   boxSizing: 'border-box',
//                   borderRadius: '2%', // Include padding in width
//                 }}
//               >
//                 <p>
//                   The IEEE Systems Council, known as the Institute of Electrical
//                   and Electronics Engineers, represents the pinnacle of
//                   technical professionalism and innovation globally. With a
//                   membership that encompasses engineers, scientists, and allied
//                   professionals from diverse domains, including computer
//                   science, software development, information technology,
//                   physics, and medicine, the Systems Council epitomizes the
//                   pursuit of technological excellence. It is regarded as an
//                   institution that empowers every student to confront intricate
//                   challenges and drive innovation.
//                 </p>
//               </div>
//             </Col>
//             <Col style={{ marginBottom: '7%', borderRadius: '10%' }}>
//               <iframe
//                 style={{
//                   maxHeight: '500px',
//                   maxWidth: '1000px',
//                   height: '100%',
//                   width: '100%',
//                   borderRadius: '2%',
//                 }}
//                 src='https://www.youtube.com/embed/ERHPw_OaVI4?si=ZHcyIIQ2xNjotHC8'
//                 title='YouTube video player'
//                 frameborder='0'
//                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//                 allowfullscreen
//               ></iframe>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default About;
