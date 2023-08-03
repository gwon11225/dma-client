import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../LoginPage/LoginPage.css'

const SignupPage = () => {
    const isLogin = useSelector( (state) => state )

    const Navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPW] = useState('');

    const nameUpdateHandler = (e) => {
        setName(e.target.value);
    }
    const emailUpdateHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordUpdateHandler = (e) => {
        setPW(e.target.value);
    }

    const signup = () => {
        const signupData = {
            name : name,
            email : email,
            password : password
        }

        axios.post('https://port-0-dma-server-eu1k2llkuxbztt.sel4.cloudtype.app/user/signup', signupData)
            .then((response) => {
                if(response.data === "회원가입 성공"){
                    alert('회원가입에 성공하셨습니다!');
                    Navigate('/')
                }
            })
    }

    return (
        <>
            { isLogin === true ? (
                <div>이미 로그인이 되어있습니다.</div>
            ) : (
                <div className="LoginDiv">
                    <h1 className="LoginLogo">SignUp</h1>
                    <div className="LoginInputDiv">
                        <input type="name" placeholder="이름" onChange={nameUpdateHandler} className="LoginInput"/>
                        <input type="email" placeholder="이메일" onChange={emailUpdateHandler} className="LoginInput"/>
                        <input type="password" placeholder="비밀번호" onChange={passwordUpdateHandler} className="LoginInput"/>
                    </div>
                    
                    <button onClick={signup} className="LoginButton">signup</button>
                </div>
            )}
        </>
    )
}

export default SignupPage;