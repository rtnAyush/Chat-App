import "./Login.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";


function Login() {

    const navigate = useNavigate();
    const [{ apiUrl }, dispacher] = useStateValue();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const signIn = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${apiUrl}/login`, { email, password });

            dispacher({
                type: 'SET_USER',
                user: res.data
            });

            navigate('/')
        } catch (err) {
            setErr(err.response.data);
        }
    }

    return (
        <div className="login">

            <div className="login__container">
                <h2>Sign In</h2>

                <form onSubmit={signIn}>
                    <h6>Email address</h6>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" />
                    <h6>Password</h6>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />
                    <button type="submit" className="btn">Sign in</button>
                </form>
                <div style={{ color: "red", fontSize: "10px" }}>{err}</div>

                <p>Don't Have an Account? <Link to="/register" >Create Account</Link></p>
            </div>
        </div>
    )

}

export default Login;