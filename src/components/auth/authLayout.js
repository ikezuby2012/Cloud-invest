import React from 'react';
import { Link, NavLink } from "react-router-dom";

const AuthLayout = (props) => {
    const year = new Date().getFullYear();
    return (
        <main className="signup-bg">
            <div className="signup-nav">
                <Link className={"signup-logoLink"} to="/">
                    <h1 className="header-logo">
                        cloud
                        <span>Invest</span>
                    </h1>
                </Link>
                <nav>
                    <ul className="signup-list">
                        <li className="signup-nav-item"><NavLink className="signup-nav-link" to="/login" activeClassName="signup-nav-link-active">sign in</NavLink></li>
                        <li className="signup-nav-item"><NavLink className="signup-nav-link" to="/signup" activeClassName="signup-nav-link-active">sign up</NavLink></li>
                    </ul>
                </nav>
            </div>
            {props.children}
            <footer className="signup-footer">
                <p>copyright cloudinvest &copy; 2019-{year}</p>
            </footer>
        </main>
    );
}

export default AuthLayout;
