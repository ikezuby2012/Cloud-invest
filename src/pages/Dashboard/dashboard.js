import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashLayout from "../../components/dashboard/Dashboard";

//icons
import {
    BrandingWatermark, CallToAction, Euro
} from "@material-ui/icons";

const Dashboard = (props) => {
    const userObj = useSelector(state => state.user);
    console.log(userObj);

    const value = 0;

    const { email, name } = userObj.user;
    const year = new Date().getFullYear();

    return (
        <DashLayout name={name}>
            <div className="dashlayout">
                <div className="dashlayout-boxs">
                    <div className="dashlayout-box">
                        <span><BrandingWatermark className="dashlayout-icon" /></span>
                        <h2 className="dashlayout-box-hdtext">
                            total investment
                        </h2>
                        <div className="dashlayout-box-spans">
                            <span>value</span>
                            <span>{value}</span>
                        </div>
                    </div>

                    <div className="dashlayout-box">
                        <span><CallToAction className="dashlayout-icon" /></span>
                        <h2 className="dashlayout-box-hdtext">
                            total withdrawals
                        </h2>
                        <div className="dashlayout-box-spans">
                            <span>value</span>
                            <span>{value}</span>
                        </div>
                    </div>

                    <div className="dashlayout-box">
                        <span><Euro className="dashlayout-icon" /></span>
                        <h2 className="dashlayout-box-hdtext">
                            portfolio
                        </h2>
                        <div className="dashlayout-box-spans">
                            <span>value</span>
                            <span>{value}</span>
                        </div>
                    </div>
                </div>
                <div className="dashlayout-activity">
                    <h2 className="dashlayout-activity-text">
                        recent activity
                    </h2>
                    <ul>
                        <li className="dashlayout-activity-list">no recent activity</li>
                    </ul>
                </div>
            </div>
            <footer className="dashlayout-footer">
                <p>&copy; {year} cloudInvest</p>
            </footer>
        </DashLayout>
    );
}

export default Dashboard;
