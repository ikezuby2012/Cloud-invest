import React from 'react';

import {
    Https, HowToReg, Poll, Style, Subtitles, Store
} from '@material-ui/icons';

const Work = () => {
    return (
        <section className="works" id="works">
            <div className="work">
                <div className="work-icon">
                    <Https className="work-logo" />
                </div>
                <h4 className="work-heading-4">
                    log in and go
                </h4>
                <p className="work-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet repudiandae atque providen
                </p>
            </div>

            <div className="work">
                <div className="work-icon">
                    <HowToReg className="work-logo"/>
                </div>
                <h4 className="work-heading-4">
                    generate strong password
                </h4>
                <p className="work-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet repudiandae atque providen
                </p>
            </div>

            <div className="work">
                <div className="work-icon">
                    <Store className="work-logo"/>
                </div>
                <h4 className="work-heading-4">
                    securely store bitcoin
                </h4>
                <p className="work-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet repudiandae atque providen
                </p>
            </div>

            <div className="work">
                <div className="work-icon">
                    <Style className="work-logo"/>
                </div>
                <h4 className="work-heading-4">
                    store digital records
                </h4>
                <p className="work-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet repudiandae atque providen
                </p>
            </div>

            <div className="work">
                <div className="work-icon">
                    < Poll className="work-logo"/>
                </div>
                <h4 className="work-heading-4">
                    trade and exchange bitcoin
                </h4>
                <p className="work-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet repudiandae atque providen
                </p>
            </div>

            <div className="work">
                <div className="work-icon">
                    <Subtitles className="work-logo"/>
                </div>
                <h4 className="work-heading-4">
                    spend anywhere
                </h4>
                <p className="work-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet repudiandae atque providen
                </p>
            </div>
        </section>
    );
}

export default Work;