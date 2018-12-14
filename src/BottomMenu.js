import React from 'react';
import {Link} from "react-router-dom"


const BottomMenu = function(){

        return (
            <div className="bottomMenu">
                {/* <h5 className="bottomMenuHeading"> Website Guide </h5> */}
                <div className="bottomMenuMain">
                    <div className="bottomMenuHeading"> Website Guide </div>
                    <Link to="/" className="bottomMenuItem"> Home Page </Link>
                    <Link to="/AboutUs" className="bottomMenuItem"> Our Doctors </Link>
                    <Link to="/DrFajardo" className="bottomMenuItemInner"> Dr. Fajardo </Link>
                    <Link to="/DrCremonini" className="bottomMenuItemInner"> Dr. Cremonini </Link>
                    <Link to="/Services" className="bottomMenuItem"> Services </Link>
                    <Link to="/ColonoscopyCancerScreening" className="bottomMenuItemInner"> Colonoscopy </Link>
                    <Link to="/UpperEndoscopy" className="bottomMenuItemInner"> Upper Endoscopy (EGD) </Link>
                    {/* <Link to="/Laboratory" className="bottomMenuItemInner"> Our Laboratory </Link> */}
                    <Link to="/Awards" className="bottomMenuItem"> Awards </Link>
                    <Link to="/Location" className="bottomMenuItem"> Location and Contact Information </Link>
                </div>
            </div>
        )
}

export default BottomMenu