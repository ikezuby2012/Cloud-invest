import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <h1 className="header-logo">
                    cloud
                    <span>Invest</span>
                </h1>

                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li className="header-nav-item"><Link className="header-nav-link" to="/">home</Link></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="#case">about us</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="#hire">testimonial</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="#hire">plans</a></li>
                        <li className="header-nav-item"><Link className="header-nav-link" href="/login">sign in</Link></li>
                        <li className="header-nav-item"><Link className="header-nav-link header-btns-2" to="/signup">sign up free</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header_text">
                <h1 className="header_text-h1">
                    <span className={"header_text-primary"}>
                        <span>Best bitcoin solution</span>
                        <span>that actually works 😉</span>
                    </span>
                    <span className={"header_text-secondary"}>
                        a platform that allows you to pay with a simple
                        <span>two step scan and pay,anywhere in the world</span>
                    </span>
                </h1>

                <div className={"header-btns"}>
                    <a className={"header-btns-1"} href="#works">how it works</a>
                    <Link className={"header-btns-2"} to="/signup">sign up for free</Link>
                </div>
            </div>

        </header>
    );
}

export default Header;
