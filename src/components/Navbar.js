import React from 'react'
import logo from "../resources/logo.png";
import ieeeLogo from "../resources/ieee_logo.png";
import { CardText, CardTitle } from 'react-bootstrap';
const Navbar = () => {
    return (
        <React.Fragment>
            <div className='head-wrapper'>
                <img src={logo} alt="Logo" className="logo" />
                <div className="heading">
                    <CardTitle className="fs-1">IEEE Student Branch NIT Jamshedpur</CardTitle>
                    <CardText style={{ marginTop: '-2%' }} className="fs-3">
                        The professional home for the engineering <br></br> and technology community at
                        NIT Jamshedpur
                    </CardText>
                </div>
                <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />
            </div>
            <div className="container buttons">
                <button><u style={{ textUnderlinePosition: 'under' }}>About</u></button>
                <button><u style={{ textUnderlinePosition: 'under' }}>Events</u></button>
                <button><u style={{ textUnderlinePosition: 'under' }}>Branch Chapters</u></button>
                <button><u style={{ textUnderlinePosition: 'under' }}>Resources</u></button>
                <button><u style={{ textUnderlinePosition: 'under' }}>Membership</u></button>
                <button><u style={{ textUnderlinePosition: 'under' }}>Contact Us</u></button>
            </div>
        </React.Fragment>

    )
}

export default Navbar