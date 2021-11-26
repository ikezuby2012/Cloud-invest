import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="about">
            <div className="about-padding">
                <div className="about-bg-img" >&nbsp;</div>
                <div className="about-text">
                    <h6 className="about-text-hd">invest now!</h6>
                    <h4 className="about-text-bg">buy/sell and trade bitcoins</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
                    </p>
                    <Link to="/signup" className="about-btn">get started</Link>
                </div>
            </div>
        </section>
    );
}

export default About;
