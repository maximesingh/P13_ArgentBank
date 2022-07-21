import React from 'react'
import './Nav.scss';
import logo from '../../assets/img/argentBankLogo.png';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../action';

export default function Nav() {
    const user = useSelector((state) => state.user); //get user state
    const dispatch = useDispatch();

    const disconnect = (event) => {
        event.preventDefault();
        dispatch(logOut())
    }

    return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!user.logged ?(
                <div>
                    <Link className='main-nav-item' to='/login'>
                        <i className='fa fa-user-circle'></i>
                        Sign In
                    </Link>
                </div>
                ):(
                <div>
                <Link to="/user">
                    <span className='main-nav-item'>
                        <i className='fa fa-user-circle'></i>
                        {user.firstName}
                    </span>
                </Link>
                    <Link className='main-nav-item' onClick={disconnect} to='/' >
                        <i className='fa fa-sign-out'></i>
                        Sign Out
                    </Link>
                </div>)
                }
            </nav>
    )
}
