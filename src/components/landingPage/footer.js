import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className="footer">
            <div className="footer-div">
                <div className="footer-desc_box">
                    <h1 className="header-logo" style={{color: "black", fontSize: "17px"}}>
                        cloud
                        <span>Invest</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quaerat ut
                    </p>
                </div>
                <div className="footer-policy footer-box">
                    <h3 className="footer-box-headtd">
                        policy info
                    </h3>
                    <nav className={"footer-nav"}>
                        <ul className={"footer-list"}>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    privacy policy
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    terms of sale
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    terms of use
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    report abuse and takedown policy
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    csr policy
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-company footer-box">
                    <h3 className="footer-box-headtd">
                        company
                    </h3>
                    <nav className={"footer-nav"}>
                        <ul className={"footer-list"}>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    about us
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    blog
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    sitemap
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    faq
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-business footer-box">
                    <h3 className="footer-box-headtd">
                        business
                    </h3>
                    <nav className={"footer-nav"}>
                        <ul className={"footer-list"}>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    sell on shopio
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    advertise on shopio
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    media inquiries
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    be an affliate
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link className={"footer-link"} to={"#"}>
                                    deal of the day
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-subscribe">
                    <h3 className="footer-subscribe-text">
                        subscribe
                    </h3>
                    <form noValidate className="footer-subscribe-form">
                        <div className="footer-subscribe-div">
                            <input type="text" id="sub" className="footer-subscribe-input" />
                            <label htmlFor="sub" value="" className="footer-subscribe-label" />
                        </div>
                        <button className="footer-subscribe-button">subscribe now</button>
                    </form>
                </div>
            </div>
            <div className="footer-copyright">
                <p>copyright zedxog &copy; 2019-{year}</p>
            </div>
        </section>
    );
}
export default Footer;