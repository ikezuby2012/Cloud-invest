import React from 'react';
import { Link } from "react-router-dom";

const Referral = () => {
    return (
        <section className="referral">
            <div className="referral-padding">
                <div className="referral-box">
                    <h1 className="referral-box-hdText">get started for free</h1>
                    <p className="referral-box-p">
                        <span>you can get commission of 15%, if you can promote our services,</span>
                        <span>it just takes only few minutes to setup</span> </p>
                </div>
                <div className="referral-button">
                    <Link className={"referral-btn"} to="/signup">sign up for free</Link>
                </div>
            </div>
        </section>
    );
}
export default Referral;