import React, { useState, useRef } from 'react';

const Plan = () => {
    let btns = useRef(null);
    const [personalActive, setPersonalActive] = useState(true);
    const [businessActive, setBusinessActive] = useState(false);
    const personal = [
        {
            "name": "starter",
            "price": "1,999"
        },
        {
            "name": "premium",
            "price": "3,999"
        },
        {
            "name": "enthusiast",
            "price": "6,999"
        }
    ]
    const business = [
        {
            "name": "intermediate",
            "price": "5,999"
        },
        {
            "name": "premium",
            "price": "7,999"
        },
        {
            "name": "families",
            "price": "9,999"
        }
    ]
    const changeActive = () => {
        if (btns.children[0].classList.contains("active")) {
            setPersonalActive(false);
            setBusinessActive(true);
        } else if (btns.children[1].classList.contains("active")) {
            setPersonalActive(true);
            setBusinessActive(false);
        }
    }


    return (
        <section className="plan">
            <h1 className="plan-hd-text">
                Choose a plan that works for you!
            </h1>

            <div className="plan-chooser" ref={el => (btns = el)}>
                {console.log(btns)}
                <button onClick={changeActive} className={`plan-chooser-btn ${personalActive && "active"}`}>personal</button>
                <button onClick={changeActive} className={`plan-chooser-btn ${businessActive && "active"}`}>business</button>
            </div>

            {personalActive && (
                <div className="plan-cards">
                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[0].name}</h1>
                        <h5 className="plan-cardPlan">${personal[0].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur  rtlStyle weight keys dku form
                                adipisicing elit. Reiciendis commodi  distinctio!
                                market
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card plan-card-diff">
                        <h1 className="plan-cardText">{personal[1].name}</h1>
                        <h5 className="plan-cardPlan">${personal[1].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[2].name}</h1>
                        <h5 className="plan-cardPlan">${personal[2].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn" style={{ marginTop: "30px" }}>start now</button>
                        </div>
                    </div>
                </div>
            )}

            {businessActive && (
                <div className="plan-cards">
                    <div className="plan-card">
                        <h1 className="plan-cardText">{business[0].name}</h1>
                        <h5 className="plan-cardPlan">${business[0].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur  rtlStyle weight keys dku form
                                adipisicing elit. Reiciendis commodi  distinctio!
                                market
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card plan-card-diff">
                        <h1 className="plan-cardText">{business[1].name}</h1>
                        <h5 className="plan-cardPlan">${business[1].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{business[2].name}</h1>
                        <h5 className="plan-cardPlan">${business[2].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn" style={{ marginTop: "30px" }}>start now</button>
                        </div>
                    </div>
                </div>
            )}






        </section>
    );
}

export default Plan;
