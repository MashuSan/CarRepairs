import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import {withRouter, Link} from 'react-router-dom';

import {If} from './Lib';


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
        }
    }

    render() {
        return <AppBar position="sticky" className="header">
            <Toolbar className="toolbar">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => this.props.toggleMenu()}>
                    <FontAwesomeIcon icon={faBars}/>
                </IconButton>
                <Typography variant="h6" className="title pcDisplay">
                    <a href="/" className="notA" style={{color: "white"}}><img style={{height: "2.5em"}} alt="logo"
                                                                               src=""/></a>
                </Typography>
                <div style={{flexGrow: 1}}/>

                <div className="links">
                    <Link to="/search/events" className="notA headerLink">
                        Akce
                    </Link>
                    <Link to="/createService" className="notA headerLink">
                        Vytvořit Záznam
                    </Link>
                </div>

                <div style={{marginLeft: "1em"}}>
                    <If if={true}>
                        <Link to="/account"><IconButton style={{color: "white"}}>
                            <FontAwesomeIcon icon={faUserAlt}/>
                        </IconButton></Link>
                    </If>
                </div>
            </Toolbar>
        </AppBar>
    }
}

export default withRouter(Header);
