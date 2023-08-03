import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './MyPage.css'

const MyPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [password, setPassword] = useState('*');

    const Navigate = useNavigate();
    const Dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("https://port-0-dma-server-eu1k2llkuxbztt.sel4.cloudtype.app/user/getUserInfo", { withCredentials: true })
            .then((response) => {
                if (response.data == null) {
                    console.log("response data is null")
                } else {
                    setUserInfo(response.data)
                    console.log(response);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // userInfo가 변경될 때에만 setPassword 호출
    useEffect(() => {
        if (userInfo) {
            setPassword('*'.repeat(userInfo.password.length))
        }
    }, [userInfo]);

    const logout = () => {
        axios.get("https://port-0-dma-server-eu1k2llkuxbztt.sel4.cloudtype.app/user/logout", { withCredentials: true })
            .then((response) => {
                Dispatch({ type: 'logout' });
            })
        Navigate('/');
    }

    const deleteAccout = () => {
        axios.get("https://port-0-dma-server-eu1k2llkuxbztt.sel4.cloudtype.app/user/delete", { withCredentials: true })
            .then((response) => {
                Dispatch({ type: 'logout' });
            })
        Navigate('/');
    }

    if (userInfo === null) {
        return null; // 로딩 중이므로 빈 화면을 표시하거나 로딩 스피너 등을 넣을 수 있습니다.
    }

    return (
        <>
            <div className="MyInfoDiv">
                <h1 className="MyInfoLogo">내정보</h1>
                <p>Name : {userInfo.name}</p>
                <p>Email : {userInfo.email}</p>
                <p>Password : {password}</p>
                <button onClick={logout} style={{float : "left", marginLeft : "10%"}}> log out </button>
                <button onClick={deleteAccout} style={{float : "right", marginRight : "10%"}}> delete accout</button>
            </div>
        </>
    )
}

export default MyPage;
