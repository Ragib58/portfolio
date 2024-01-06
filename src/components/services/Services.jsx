import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web <br/> Development </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}
                    >View More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>

                        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Software Engineer</h3>
                                <p className="services__modal-description">Service with More
                                than 3 years of experience. Providing quality work to clients 
                                and companies</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Frontend Development</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Backend Development</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Full-stack Development</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-apps services__icon"></i>
                        <h3 className="services__title">Mobile Apps <br/> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Mobile Developer</h3>
                                <p className="services__modal-description">Service with More
                                than 1 years of experience. Providing quality work to clients 
                                and companies</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Native Apps</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Web Apps</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Hybrid Apps</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-robot services__icon"></i>
                        <h3 className="services__title">Machine Learning <br/> Development </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">ML Developer</h3>
                                <p className="services__modal-description">Service with More
                                than 1 years of experience. Providing quality work to clients 
                                and companies</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Chatbot Development</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Prediction App</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Analysis App</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Services;