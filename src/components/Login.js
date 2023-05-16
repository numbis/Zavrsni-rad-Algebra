import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = (props) => {
    const [usernameText, setUserNameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/");

    }
    return <div ClassName="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label for='title'>
                <h1>Login</h1>
            </label>
            <input 
             type="text"
             id="title" 
             placeholder="Enter your username" required value={usernameText}
             onChange={(e)=> setUserNameText(e.target.value)}></input>
            <button className="login-btn">Login</button>
        </form>
    </div>
}

export default Login;