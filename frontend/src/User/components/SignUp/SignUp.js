import React from "react";
import "./SignUp.css";

export default class SignUp extends React.Component {

    render() {
        return (
            <form action="" className="signup-form">
                <div className="signup-img-container">
                </div>
                <div className="signup-container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                        
                    <label for="psw-confirm"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="psw-confirm" required />

                    <button type="submit" className="signup-btn">Sign Up</button>
                </div>
            </form>
        );
    }
}