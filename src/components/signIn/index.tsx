import {useState} from "react";
import {isPending} from "@reduxjs/toolkit";
import Form from "./form";
import {useNavigate} from 'react-router-dom';
import "firebase/auth";
import firebase from "firebase/app";
import {setUser} from "../../store/userSlice";
import {useDispatch} from "react-redux";

export default function SignIn() {
    const [SignIn, setSignIn] = useState(false);
    const [RegLog, setregLog] = useState(true);
    const [error, setError] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleRegister = (email: string, pass: string) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                var user = userCredential.user;
                dispatch(setUser({
                    email: user?.email,
                    id: user?.uid,
                    token: user?.refreshToken,
                }))
                navigate('/about')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorMessage)
            });
    }


    const handleLogin = (email: string, pass: string) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                var user = userCredential.user;
                dispatch(setUser({
                    email: user?.email,
                    id: user?.uid,
                    token: user?.refreshToken,
                }))
                navigate('/about')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div>
            <div onClick={() => setSignIn(true)}>SignIn</div>
            {SignIn ?
                <div className='signIn-box'>
                    <div className='signIn-wrapper'>
                        <div className='signIn-content'>
                            <div className='signIn-content-body'>
                                <ul className='signIn-header'>
                                    <li onClick={() => setregLog(true)}
                                        className={`signIn-header-item ${RegLog ? 'active-signIn' : ''}`}><a
                                        href="#">Sign in</a></li>
                                    <li onClick={() => setregLog(false)}
                                        className={`signIn-header-item ${RegLog ? '1' : 'active-signIn'}`}><a href="#">New
                                        customer</a></li>
                                </ul>
                                {RegLog ? <Form error={error} handleClick={handleLogin} title='Sign in'/> :
                                    <Form error={error} handleClick={handleRegister} title='Create account'/>

                                }
                            </div>
                        </div>
                        <button className='signIn-box-close' onClick={() => setSignIn(false)}>X</button>
                    </div>
                </div> : ''}
        </div>

    )
}