import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { useDispatch } from "react-redux";

const LoginPage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPW] = useState('');
    const navigate = useNavigate();
    const Dispatch = useDispatch();

    const emailUpdateHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordUpdateHandler = (e) => {
        setPW(e.target.value);
    }

    const handleSubmit = () => {
        const loginData = {
            email : email,
            password : password
        }

        axios.post('https://port-0-dma-server-eu1k2llkuxbztt.sel4.cloudtype.app/user/login', loginData, {withCredentials: true })
            .then((response) => {
                console.log(response);
                Dispatch({type : 'login'});
                navigate('/');
            })
    }

    return (
        <div className="LoginDiv">
            <h1 className="LoginLogo">Login</h1>
            <div className="LoginInputDiv">
                <input type="email" onChange={emailUpdateHandler} placeholder="이메일" className="LoginInput"/>
                <input type="password" onChange={passwordUpdateHandler} placeholder="비밀번호" className="LoginInput"/>
            </div>
            <button onClick={handleSubmit} className="LoginButton">login</button>
        </div>
    )
}

export default LoginPage