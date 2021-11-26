import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { login } from "../actions/auth";

import AuthLayout from "../components/auth/authLayout";
import Popup from "../components/utils/Popup";

//icon
// import WarningIcon from '@material-ui/icons/Warning';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loading: false,
            emailError: false,
            passwordError: false,
            emailErrMsg: "",
            passErrMsg: "",
            isDisabled: true,
            loginError: false,
            showPopup: false
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
        let { emailError, passwordError } = this.state;
        this.setState({
            [e.target.id]: e.target.value
        });

        if (e.target.name === 'email') {
            this.validateEmail(e.target.value);
        }
        if (e.target.name === "password") {
            if (e.target.value < 6) {
                this.setState({
                    passwordError: true,
                    passErrMsg: "password too short"
                })
            } else {
                this.setState({
                    passwordError: false
                })
            }
        }
        if (emailError === false && passwordError === false) {
            this.setState({
                isDisabled: false
            });
        }
    }

    onSubmit = (e) => {
        const { email, password, emailError, passwordError } = this.state;
        const { dispatch, history, message, loginUser } = this.props;
        e.preventDefault();
        this.setState({
            loading: true
        })
        if (emailError === false && passwordError === false) {

            const data = {
                email,
                password
            }
            //console.log(data);
            loginUser(data);
            //history.push("/dashboard");
            this.setState({
                loading: false
            });
        }
        if (message) {
            this.setState({
                showPopup: true
            })
        }
    }

    handleClose = () => {
        this.setState({
            showPopup: false
        })
    }

    render() {
        const {
            email, password, emailError, passwordError, passErrMsg, isDisabled, loading, loginError, showPopup
        } = this.state;
        const { message, loggedIn, history } = this.props;
        if (loggedIn) {
            // <Link to="/dashboard" />
            history.push("/dashboard");
        }
        return (
            <section className="signup">
                <AuthLayout>

                    <form noValidate className={"login-form"} onSubmit={(e) => this.onSubmit(e)}>
                        <h2 className="signup-heading_text">Login</h2>
                        {/* {loading && <div className="loading-spinner" />} */}

                        {/* {loginError && <div className="warning">
                            // <span ><WarningIcon className="warning-icon" /></span>
                            // <h1 className="warning-text">incorrect email or password!</h1>
                        // </div>
                        } */}
                        {showPopup && <Popup content={message} handleClose={() => this.handleClose()} />}
                        <div className="login-div">
                            <div className="login-form_group">
                                <input type="text"
                                    onChange={this.onChange}
                                    className="login-form_input"
                                    placeholder="email" id="email"
                                    name={"email"}
                                    required={true} />
                                <label htmlFor="email" className="login-form_label">email address</label>
                                {
                                    emailError ? (<p className="login-warningText">
                                        please input a valid email address
                                    </p>) : ""
                                }
                            </div>
                            <div className="login-form_group">
                                <input type="password"
                                    onChange={this.onChange}
                                    className="login-form_input"
                                    name={"password"}
                                    placeholder="Password"
                                    id="password"
                                    required={true} />
                                <label htmlFor="password" className="login-form_label">password</label>
                                {
                                    passwordError ? (<p className="login-warningText">
                                        {passErrMsg}
                                    </p>) : ""
                                }
                            </div>
                            <div className="login-form_buttons">
                                <button className={`${isDisabled && "login-disabled"} login-form_btn`} type={"submit"} disabled={isDisabled}>
                                    {loading ? <div className="loading-button" /> : "login"}
                                </button>
                            </div>
                        </div>
                    </form>
                </AuthLayout>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    const { loggedIn, user, message } = state.user;
    // console.log(loggedIn);
    return {
        loggedIn, user, message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (data) =>
            dispatch(login(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
