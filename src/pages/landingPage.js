import React from 'react';

//components
import Header from "../components/landingPage/header";
import Work from "../components/landingPage/work";
import About from "../components/landingPage/about";
import Plan from "../components/landingPage/plan";
import Testimony from "../components/landingPage/testimony";
import Refferal from "../components/landingPage/referral";
import Footer from "../components/landingPage/footer";

const landingPage = () => {
    return (
        <div className="container">
            {/* header */}
            <Header />
            {/* how it work section */}
            <Work />
            {/* try for free section */}
            <About />
            {/* plan section */}
            <Plan />
            {/* testimony section */}
            <Testimony />
            {/* refferal */}
            <Refferal />
            {/* footer section */}
            <Footer />
        </div>
    );
}

export default landingPage;
