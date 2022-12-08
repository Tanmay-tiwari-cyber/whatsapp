import React from 'react'
import '../style/Login.css'
import {auth, provider} from '../fireBase'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login (){
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert((error.message)));
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__text">
                    <img src="data:image/png;base64,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"
                    alt=""/>
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <button onClick={signIn} >Sign in With Google</button>
            </div>
            
          
        </div>
    );
}

export default Login
