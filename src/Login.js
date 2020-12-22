import React from 'react'
import './Login.css'

import {auth, provider} from './firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'
import {Link, useHistory} from 'react-router-dom'

function Login() {

    const [{}, dispatch]  = useStateValue();
    const history = useHistory();

    const signIn = e => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }, 
            history.push('/'));
        }).catch(error => alert(error.message));
    };

    return ( 
    
    <div className="login">
        <div className="login__container">
            <Link to='/'>
                <img className="login__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google__logo"/>
            </Link>
            <div className="login__message">
                <h2 className="login__container__h2">Sign in</h2>
                <h3 className="login__container__h3">Use your Google Account</h3>
            </div>

            <button type="submit" onClick={signIn}>
                Sign in to Google
            </button>
            <p className="login__container__p">disclaimer: this is not the official website</p>
            <p>nor is it trying to claim the name</p>
        </div>
    </div>
    )
}

export default Login