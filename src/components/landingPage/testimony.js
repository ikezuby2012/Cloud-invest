import React, { useRef, useState, useEffect } from 'react';
import { TweenLite, Power3 } from "gsap";

//photo
import photo1 from "../../utils/user-1.jpg";
import photo2 from "../../utils/user-2.jpg";
import photo3 from "../../utils/user-3.jpg";

//icons 
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


const testimonials = [
    {
        name: "jane cowell",
        job: "Bitcoin Investor",
        image: photo1,
        quote: "i've completely switched my entire portfolio to cloudinvest, after spending days researching and testing it, also invested in it, and i will say it's worth the investment"
    },
    {
        name: "Li Jonas",
        job: "Bitcoin Trader",
        image: photo2,
        quote:
            "The rebranding has really helped our business. Definitely worth the investment."
    },
    {
        name: "Felix Joelle",
        job: "System Analyst",
        image: photo3,
        quote:
            "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
    }
];

const Testimony = () => {
    let imageList = useRef(null);
    let testimonialList = useRef(null);
    let testimonialQuote = useRef(null);
    const imageWidth = 150;

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });

    useEffect(() => {
        TweenLite.to(testimonialList.children[0], 0, {
            opacity: 1
        });
        TweenLite.to(testimonialQuote.children[0], 0, {
            opacity: 1
        });
    }, []);

    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: -imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {
            scale: 1.2,
            ease: Power3.easeOut
        });
    };

    const fadeOut = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 0
        });

        TweenLite.to(testimonialQuote.children[index], duration, {
            opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 1,
            delay: 1
        });

        TweenLite.to(testimonialQuote.children[index], duration, {
            opacity: 1,
            delay: 1
        });
    };

    const nextSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive2: true });
            //Image transition
            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            fadeOut(0, 1);
            fadeIn(1, 1);
        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive3: true });
            //Image transition
            slideRight(0, 1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            //content transition
            fadeOut(1, 1);
            fadeIn(2, 1);
        } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive1: true, isActive3: false });
            //Image transition
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            //content transition
            fadeOut(2, 1);
            fadeIn(0, 1);
        }
    };

    const prevSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive3: true });
            //Image transition
            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideRight(0, 1);
            slideRight(1, 1);
            //content transtion
            fadeOut(0, 1);
            fadeIn(2, 1);
        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive1: true });
            //Image transition
            slideLeft(0, 0);
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1);
            //content transtion
            fadeOut(1, 1);
            fadeIn(0, 1);
        } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive2: true, isActive3: false });
            slideLeft(2, 1);
            slideLeft(1, 0, 2);
            slideLeft(1, 1);
            scale(1, 1);
            //content transtion
            fadeOut(2, 1);
            fadeIn(1, 1);
        }
    };

    return (
        <section className="testimony">
            <h2 className="testimony-hdText">trusted by experts.</h2>
            <div className="testimony-width">
                <div className="testimony-button">
                    <button className="testimony-btn" onClick={prevSlide}>
                        <ArrowBackIos className="testimony-icon" />
                    </button>
                </div>
                <div className="">
                    <div className="testimony-content">
                        <ul ref={el => {
                            (testimonialQuote = el)
                            console.log(el)
                        }}>
                            <li className={state.isActive1 ? "testimony-quoteList active" : "testimony-quoteList"}>
                                <p className="testimony-comment">
                                    "{testimonials[0].quote}"
                                </p>
                            </li>
                            <li className={state.isActive2 ? "testimony-quoteList active" : "testimony-quoteList"}>
                                <p className="testimony-comment">
                                    "{testimonials[1].quote}"
                                </p>
                            </li>
                            <li className={state.isActive3 ? "testimony-quoteList active" : "testimony-quoteList"}>
                                <p className="testimony-comment">
                                    {testimonials[2].quote}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="testimony-div">
                        <div className="testimony-images">
                            <ul ref={el => (imageList = el)}>
                                <li className={state.isActive1 ? "testimony-imageList active" : "testimony-imageList"}>
                                    <img src={testimonials[0].image} alt={testimonials[0].name} className="testimony-photo" />
                                </li>
                                <li className={state.isActive2 ? "testimony-imageList active" : "testimony-imageList"}>
                                    <img src={testimonials[1].image} alt={testimonials[0].name} className="testimony-photo" />
                                </li>
                                <li className={state.isActive3 ? "testimony-imageList active" : "testimony-imageList"}>
                                    <img src={testimonials[2].image} alt={testimonials[0].name} className="testimony-photo" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="testimony-inner">
                        <ul ref={el => {
                            (testimonialList = el)
                            console.log(el)
                        }}>
                            <li className={state.isActive1 ? "testimony-captionList active" : "testimony-captionList"}>
                                <h3 className="testimony-name">{testimonials[0].name}</h3>
                                <h4 className="testimony-job">{testimonials[0].job}</h4>
                            </li>
                            <li className={state.isActive2 ? "testimony-captionList active" : "testimony-captionList"}>
                                <h3 className="testimony-name">{testimonials[1].name}</h3>
                                <h4 className="testimony-job">{testimonials[1].job}</h4>
                            </li>
                            <li className={state.isActive3 ? "testimony-captionList active" : "testimony-captionList"}>
                                <h3 className="testimony-name">{testimonials[2].name}</h3>
                                <h4 className="testimony-job">{testimonials[2].job}</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="testimony-button">
                    <button className="testimony-btn" onClick={nextSlide}>
                        <ArrowForwardIos className="testimony-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimony;
