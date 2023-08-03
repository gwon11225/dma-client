import './Navigation.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {
    const isLogin = useSelector( (state) => state );
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:8080/user/check", { withCredentials: true })
            .then((response) => {
                if(response.data === true) {
                    dispatch({type : 'login'})
                } else {
                    dispatch({type : 'logout'})
                }
            })
    }, [isLogin, dispatch]);

    console.log(isLogin)
    return(
        <>
            <nav className='Nav'>
                <a href='/' className='Logo'>DMA</a>
                { isLogin === true ? (
                    <div>
                        <a href='/MyPage' className='Login'>MyPage</a>
                        <a href='/write' className='Signup'>Write</a>
                    </div>
                ) : (
                    <div>
                        <a href='/login' className='Login'>LOGIN</a>
                        <a href='/signup' className='Signup'>SIGNUP</a>
                    </div>
                )}
                
                
            </nav>
        </>

    )
}

export default Navigation;