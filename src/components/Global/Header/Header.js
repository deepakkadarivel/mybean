import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import {withRouter} from 'react-router'
import {MW_USER_ID} from "../../../constants";

const userId = localStorage.getItem(MW_USER_ID);

class Header extends Component {

    render() {
        return (
            <div>
                <nav className='pt-navbar pt-fixed-top'>
                    <div className='pt-navbar-group pt-align-left'>
                        <Link to='/' className='ml1 no-underline black'>
                            <div className='pt-navbar-heading'>Medwall</div>
                        </Link>
                    </div>
                    <div className='pt-navbar-group pt-align-right'>
                        <Link to='/' className='ml1 no-underline black'>
                            <button className='pt-button pt-minimal'>Home</button>
                        </Link>
                        <Link to='/about' className='ml1 no-underline black'>
                            <button className='pt-button pt-minimal'>About</button>
                        </Link>
                        <span className='pt-navbar-divider'/>
                        {!userId &&
                        <Link to='/login' className='ml1 no-underline black'>
                            <button className='pt-button pt-minimal'>Login</button>
                        </Link>
                        }
                    </div>
                </nav>
            </div>
        );
    }

}

export default withRouter(Header)