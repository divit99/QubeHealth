import React from 'react'
import { Link } from 'react-router-dom'
import app from './firebase'
import '../App.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useHistory } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function SignUpPage() {
    const [value, setValue] = React.useState()

    const history = useHistory()

    const handleClick = () => {


        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container')
        let number = value;
        app.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {

            let code = prompt("enter otp");


            e.confirm(code).then((res) => {
                history.push("/master");
                console.log(res, ".......")
            }).catch(() => {
                console.log("error")
            })
        })
    }

    return (


        <div className="text-center m-5-auto">
            <h2>Welcome My Lord</h2>
            <div>

                <p style={{ backgroundColor: "lightblue", textAlign: "center", width: "1000px", marginLeft: "40%" }}>

                    <PhoneInput style={{ backgroundColor: "lightblue", textAlign: "center" }}
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} />

                </p>
                <div className='text-center m-5-auto' style={{ marginleft: "500px", textAlign: "center" }}>
                    <div id="recaptcha-container" ></div>
                    <button onClick={handleClick}>Send OTP</button>

                </div>

            </div>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
