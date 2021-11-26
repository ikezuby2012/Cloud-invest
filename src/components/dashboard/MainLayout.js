import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderDash from "./HeaderDash";

//icons
import {
    AccountCircle, AssignmentReturn, Store, Poll, Payment, Dashboard
} from "@material-ui/icons";

const MainLayout = (props) => {
    return (
        <section className="dashboard">
            <div className="dashboard-container">
                <nav className="dashboard-side_bar">
                    <h1 className="header-logo" style={{ marginTop: "25px" }}>
                        cloud
                        <span>Invest</span>
                    </h1>

                    <ul className="dashboard-sideNav">
                        <li className="dashboard-sideNav-item dashboard-sideNav-item--active">
                            <NavLink className="dashboard-sideNav-link" activeClassName="" to="/dashboard">
                                <span><Store className="dashboard-sideNav-logo" /></span>
                                <span>dashboard</span>
                            </NavLink>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" to="/dashboard/wallet">
                                <span><Dashboard className="dashboard-sideNav-logo" /></span>
                                <span>my wallet</span>
                            </NavLink>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" to="/dashboard/market">
                                <span><Poll className="dashboard-sideNav-logo" /></span>
                                <span>metrices</span>
                            </NavLink>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" to="/dashboard/billing">
                                <span><Payment className="dashboard-sideNav-logo" /></span>
                                <span>billing</span>
                            </NavLink>
                        </li>
                    </ul>

                    <footer>
                        <ul>
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/profile">
                                    <span><AccountCircle className="dashboard-sideNav-logo" /></span>
                                    <span>profile</span>
                                </NavLink>
                            </li>
                        </ul>

                        <ul>
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="#">
                                    <span><AssignmentReturn className="dashboard-sideNav-logo" /></span>
                                    <span>logout</span>
                                </NavLink>
                            </li>
                        </ul>
                    </footer>

                </nav>
                <div className="dashboard-content">
                    {/* header component */}
                    <HeaderDash username={props.username} />
                    <>
                        {props.children}
                    </>
                </div>
            </div>
        </section>
    );
}

export default MainLayout;