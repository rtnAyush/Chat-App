import "./Login.css"
import ProImg from "../img/blank-picture.png"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";
import { convertToBase64 } from "../context/reducer";


function Login() {

    const navigate = useNavigate();
    const [{ apiUrl }, dispacher] = useStateValue();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [postImage, setPostImage] = useState('');
    const [err, setErr] = useState('');

    const signUp = async (e) => {

        e.preventDefault();

        try {
            const res = await axios.post(`${apiUrl}/register`, { name, email, password, picture: postImage });
            dispacher({
                type: 'SET_USER',
                user: res.data
            });
            navigate('/')
        } catch (err) {
            setErr(err.response.data);
        }
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (file.size <= 10000) {
            setErr("")
            const base64 = await convertToBase64(file);
            setPostImage(base64);
        } else {
            console.log("file too big", file.size);
            setErr("file too big")
        }
    }
    return (
        <div className="login">
            <div className="login__container">
                <h2>Sign Up</h2>
                <form onSubmit={signUp}>
                    <label htmlFor="file-upload">
                        <img src={postImage ? postImage : ProImg} alt="" />
                        <p style={{ fontSize: "10px", color: "green" }}>file formate -- .jpeg, .png, .jpg</p>
                    </label>
                    <input
                        type="file"
                        lable="Image"
                        name="myFile"
                        id='file-upload'
                        accept=".jpeg, .png, .jpg"
                        onChange={(e) => handleFileUpload(e)}
                    />
                    <h6>Name</h6>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" />
                    <h6>Email address</h6>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" />
                    <h6>Password</h6>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />


                    <button type="submit" className="btn">Create account</button>
                </form>
                <div style={{ color: "red", fontSize: "10px" }}>{err}</div>


                <p>Already have an Account? <Link to="/login" >Login</Link></p>
            </div>
        </div>
    )

}

export default Login;