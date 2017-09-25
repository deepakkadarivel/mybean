import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, MenuDivider, MenuItem, Popover, Position, Button} from "@blueprintjs/core";
import './header.css'
import {withRouter} from 'react-router'
import appConstants from "../../app/appConstants";

const userId = localStorage.getItem(appConstants.MW_USER_ID);
const userName = localStorage.getItem(appConstants.MW_USER_NAME);

const compassMenu = (
    <Menu>
        <MenuItem iconName="graph" text="Graph"/>
        <MenuItem iconName="map" text="Map"/>
        <MenuItem iconName="th" text="Table" shouldDismissPopover={false}/>
        <MenuItem iconName="zoom-to-fit" text="Nucleus" disabled={true}/>
        <MenuDivider/>
        <MenuItem iconName="cog" text="Settings...">
            <MenuItem iconName="add" text="Add new application" disabled={true}/>
            <MenuItem iconName="remove" text="Remove application"/>
        </MenuItem>
    </Menu>
);

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
                        {userId &&
                        <Popover content={compassMenu} position={Position.BOTTOM_RIGHT}>
                            <Button
                                iconName='user'
                                onClick={() => ({})}
                                text={userName}
                            />
                        </Popover>
                        }
                    </div>
                </nav>
            </div>
        );
    }

}

export default withRouter(Header)