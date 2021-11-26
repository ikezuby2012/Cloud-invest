import React, { Component } from 'react';
import { connect } from "react-redux";
import waValidator from "wallet-address-validator";
import validator from "validator";
import { Redirect, Link } from "react-router-dom";

import { signUp } from "../actions/auth";
import Popup from "../components/utils/Popup";

import AuthLayout from "../components/auth/authLayout";

class signup extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            nameError: false,
            nameCheckError: false,
            nameMsg: "",
            email: "",
            emailError: false,
            password: "",
            passwordError: false,
            passwordConfirm: "",
            passwordConfirmError: false,
            bitAccount: "",
            bitAccountError: false,
            ethAccount: "",
            phoneNumber: null,
            phoneNumberError: false,
            ethAccountError: false,
            loading: false,
            showPopup: false,
            isDisabled: true
        }
    }

    validateEmail = (email) => {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if (result === true) {
            this.setState({
                emailError: false,
                email
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }

    onChange = (e) => {
        const {
            name, nameError, emailError, passwordError, passwordConfirmError, ethAccountError, bitAccountError
        } = this.state;
        let namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
        this.setState({
            [e.target.id]: e.target.value
        });
        if (e.target.name === "name") {
            if (e.target.value !== "" && e.target.value !== null && isNaN(e.target.value)) {
                if (namePattern.test(e.target.value)) {
                    this.setState({
                        nameError: false,
                        name: e.target.value
                    });
                } else {
                    this.setState({
                        nameError: true,
                        nameMsg: "field must only contain string e.g john doe"
                    })
                }
                this.setState({
                    nameCheckError: false,
                    name: e.target.value
                });
            } else {
                this.setState({
                    nameCheckError: true,
                    nameMsg: "field is required!"
                })
            }
        }
        if (e.target.name === "email") {
            this.validateEmail(e.target.value);
        }
        if (e.target.name === "password" && e.target.name === "passwordConfirm") {
            if (e.target.value === "" || e.target.value === null) {
                this.setState({
                    passwordError: true,
                    passwordConfirm: true
                })
            } else {
                this.setState({
                    passwordError: false,
                    passwordConfirmError: false,
                    password: e.target.value,
                    passwordConfirm: e.target.value
                });
            }
        }
        // validate bitcoin address
        if (e.target.name === "bitAccount") {
            if (waValidator.validate(e.target.value, "BTC")) {
                this.setState({
                    bitAccount: e.target.value,
                    bitAccountError: false
                });
            } else {
                this.setState({
                    bitAccountError: true
                })
            }
        }

        // validate ethereum address
        if (e.target.name === "ethAccount") {
            console.log(e.target.value);
            if (waValidator.validate(e.target.value, "ethereum")) {
                this.setState({
                    ethAccount: e.target.value,
                    ethAccountError: false
                });
            } else {
                this.setState({
                    ethAccountError: true
                })
            }
        }

        //validate phone number
        if (e.target.name === "phoneNumber") {
            if (validator.isNumeric(e.target.value) && !isNaN(e.target.value)) {
                this.setState({
                    phoneNumber: e.target.value,
                    phoneNumberError: false
                });
            } else {
                this.setState({
                    phoneNumberError: true
                })
            }
        }

        if (
            nameError === false &&
            passwordError === false &&
            emailError === false &&
            bitAccountError === false &&
            ethAccountError === false &&
            passwordConfirmError === false) {
            this.setState({
                isDisabled: false
            })
        }
    }

    onSubmit = (e) => {
        const {
            name, email, bitAccount, ethAccount, phoneNumber, password, passwordConfirm, nameError, passwordError,
            emailError, phoneNumberError, passwordConfirmError, bitAccountError, ethAccountError
        } = this.state;
        const { dispatch, history, message, signUpUser } = this.props;
        console.log(name, email, ethAccount, bitAccount, phoneNumber, password, passwordConfirm);
        // console.log(this.props);
        e.preventDefault();
        this.setState({
            loading: true
        });
        if (
            nameError === false &&
            passwordError === false &&
            emailError === false &&
            passwordConfirmError === false &&
            phoneNumberError === false &&
            bitAccountError === false &&
            ethAccountError === false
        ) {
            //console.log(name, email, ethAccount, bitAccount, phoneNumber, password, passwordConfirm);
            const data = {
                name,
                email,
                password,
                passwordConfirm,
                phoneNumber,
                ethereum: ethAccount,
                bitcoin: bitAccount


            }
            console.log(data);
            signUpUser(data);
            this.setState({
                loading: false
            });
            if (message) {
                this.setState({
                    showPopup: true
                })
            }
        }
    }
    handleClose = () => {
        this.setState({
            showPopup: false
        })
    }
    render() {
        const {
            password, passwordConfirm, nameError, nameMsg, nameCheckError, ethAccountError, showPopup,
            emailError, phoneNumberError, bitAccountError, passwordError, passwordConfirmError, loading,
            isDisabled
        } = this.state;

        const { message, loggedIn, history } = this.props;
        if (loggedIn) {
            history.push("/login");
        }
        return (
            <section className="signup">
                <AuthLayout>
                    <form noValidate className={"signup-form"} onSubmit={(e) => this.onSubmit(e)}>
                        <h2 className="signup-heading_text" style={{ marginBottom: "15px" }}>create account</h2>
                        {/* {loading && <div className="loading-spinner" />} */}
                        {showPopup && <Popup content={message} handleClose={() => this.handleClose()} />}
                        <div className="signup-div">
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="Full name" id="name"
                                    name={"name"}
                                    required={true} />
                                <label htmlFor="name" className="signup-form_label">Full name</label>
                                {
                                    nameError ? (<p className="login-warningText">
                                        {nameMsg}
                                    </p>) : ""
                                }
                                {
                                    nameCheckError ? (<p className="login-warningText">
                                        {nameMsg}
                                    </p>) : ""
                                }
                            </div>
                            <div className="signup-form_group">
                                <input type="email"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="email address"
                                    id="email"
                                    name={"email"}
                                    required={true} />
                                <label htmlFor="email" className="signup-form_label">email address</label>
                                {
                                    emailError ? (<p className="signup-warningText">
                                        please input a valid email address
                                    </p>) : ""
                                }
                            </div>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="bitcoin account"
                                    id="bitAccount"
                                    name={"bitAccount"}
                                    required={true} />
                                <label htmlFor="bitAccount" className="signup-form_label">Bitcoin account</label>
                                {
                                    bitAccountError && (<p className="signup-warningText">
                                        please input a valid bitcoin address
                                    </p>)
                                }
                            </div>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="ethereum account"
                                    id="ethAccount"
                                    name={"ethAccount"}
                                    required={true} />
                                <label htmlFor="ethAccount" className="signup-form_label">Ethereum account</label>
                                {ethAccountError && (<p className="signup-warningText">
                                    please input a valid ethereum address
                                </p>)}
                            </div>
                            <div className="signup-form_group">
                                <input type="number"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="phone"
                                    id="phoneNumber"
                                    name={"phoneNumber"}
                                    required={true} />
                                <label htmlFor="phoneNumber" className="signup-form_label">phone</label>
                                {phoneNumberError && (<p className="signup-warningText">
                                    please input a valid phone number
                                </p>)}
                            </div>
                            <div className="signup-form_group">
                                <input type="password"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="Password"
                                    id="password"
                                    name={"password"}
                                    required={true} />
                                <label htmlFor="password" className="signup-form_label">password</label>
                            </div>
                            <div className="signup-form_group">
                                <input type="password"
                                    onChange={this.onChange}
                                    className="signup-form_input"
                                    placeholder="confirm Password"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    required={true} />
                                <label htmlFor="passwordConfirm" className="signup-form_label">confirm password</label>
                                {
                                    password !== passwordConfirm && (<p className="signup-warningText">
                                        both password does not match!
                                    </p>)
                                }
                            </div>
                            <div className="signup-form_buttons">
                                <button className={`${isDisabled && "signup-disabled"} signup-form_btn`} type={"submit"} disabled={isDisabled}>
                                    {loading ? <div className="loading-button" /> : "signup"}
                                </button>
                            </div>
                        </div>
                        <div className="signup-alt_buttons">
                            <h4 className={"signup-text"}>
                                already have an account? &nbsp;
                                <Link className={`signup-textLink`} to={"/login"}>sign in</Link>
                            </h4>
                        </div>
                    </form>
                </AuthLayout>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    const { loggedIn, user, message } = state.user;
    // console.log(state.user);
    // console.log(user);
    return {
        loggedIn, user, message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (data) =>
            dispatch(signUp(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signup);