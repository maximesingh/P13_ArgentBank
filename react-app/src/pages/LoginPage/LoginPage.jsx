import React, {useState} from 'react'
import './LoginPage.scss'
import { Redirect } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { loginRequest } from '../../action';

export default function LoginPage() {
    const user = useSelector((state) => state.user); //get user state
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        event.target.id === 'username' 
        ? setEmail(event.target.value) 
        : setPassword(event.target.value) 
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(loginRequest(email,password))
    }

    if (user.logged) {return <Redirect to='/user'/>}
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {user.error ? <p className="login-error">Mauvais mail/mot de passe</p> : ""}
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Email</label>
                        <input type="text" id="username" value={email} onChange={handleInputChange} autoComplete="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={handleInputChange} autoComplete="current-password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"  />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button> 
                </form>
            </section>
        </main>
    )
}
