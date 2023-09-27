import logo from "./resources/logo.png";
import ieeeLogo from "./resources/ieee_logo.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />

      <div className="heading">
        <h1>IEEE Student Branch NIT Jamshedpur</h1>
        <p style={{marginTop: '-2%'}}>
          The professional home for the engineering <br></br> and technology community at
          NIT Jamshedpur
        </p>
      </div>
      <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />

      <div className="buttons">
        <button><u style={{textUnderlinePosition : 'under'}}>About</u></button>
        <button><u style={{textUnderlinePosition : 'under'}}>Events</u></button>
        <button><u style={{textUnderlinePosition : 'under'}}>Branch Chapters</u></button>
        <button><u style={{textUnderlinePosition : 'under'}}>Resources</u></button>
        <button><u style={{textUnderlinePosition : 'under'}}>Membership</u></button>
        <button><u style={{textUnderlinePosition : 'under'}}>Contact Us</u></button>
      </div>

      <div className="carousel-and-content">

        <h2 style={{marginLeft: '5%'}}>About Us</h2>

        <div
        style={{
          backgroundColor: '#d4e3ed',  // Gray background color
          color: '#000',
          fontSize: '20px',
          padding: '1%',
          marginLeft: '3%',
          marginRight: '3%',         // Adjust padding as needed
          width: '50%',            // Adjust width as needed
          float: 'left',           // Align to the left
          clear: 'both',           // Clear the float
          boxSizing: 'border-box',  // Include padding in width
        }}
      >

        <p>The IEEE Systems Council, known as the Institute of Electrical and Electronics Engineers, represents the pinnacle of technical professionalism and innovation globally. With a membership that encompasses engineers, scientists, and allied professionals from diverse domains, including computer science, software development, information technology, physics, and medicine, the Systems Council epitomizes the pursuit of technological excellence. It is regarded as an institution that empowers every student to confront intricate challenges and drive innovation.</p>
      </div>

      <iframe width="40%" height="250em" src="https://www.youtube.com/embed/ERHPw_OaVI4?si=ZHcyIIQ2xNjotHC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
    </div>
  );
}

export default App;
