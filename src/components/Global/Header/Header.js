import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from "@blueprintjs/core";
import './header.css'
import {withRouter} from 'react-router'
import appConstants from "../../app/appConstants";

const Header = ({user, logout}) => (
    <div>
        <nav className='pt-navbar pt-fixed-top'>
            <div className='pt-navbar-group pt-align-left'>
                <Link to='/' className='ml1 no-underline black'>
                    <div className='pt-navbar-heading'>{appConstants.MY_BEAN}</div>
                </Link>
            </div>
            <div className='pt-navbar-group pt-align-right'>
                <Link to='/' className='ml1 no-underline black'>
                    <button className='pt-button pt-minimal'>Home</button>
                </Link>
                <Link to='/todo' className='ml1 no-underline black'>
                    <button className='pt-button pt-minimal'>Todo</button>
                </Link>
                <Link to='/about' className='ml1 no-underline black'>
                    <button className='pt-button pt-minimal'>About</button>
                </Link>
                <span className='pt-navbar-divider'/>
                {!user &&
                <Link to='/login' className='ml1 no-underline black'>
                    <button className='pt-button pt-minimal'>{appConstants.LOGIN}</button>
                </Link>
                }
                {user &&
                <Button
                    iconName='user'
                    onClick={logout}
                    text={user.name}
                />
                }
            </div>
        </nav>
    </div>
);
export default withRouter(Header)