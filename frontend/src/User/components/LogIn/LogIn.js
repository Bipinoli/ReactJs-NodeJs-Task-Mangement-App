import React from "react";
import "./LogIn.css";

export default class LogIn extends React.Component {

    render() {
        return (
            <form action="" className="login-form">
                <div className="login-img-container">
                </div>
                <div className="login-container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                        
                    <button type="submit" className="login-btn">Log In</button>
                </div>
            </form>
        );
    }
}