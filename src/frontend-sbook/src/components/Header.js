import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import './Header.scss';
import {withRouter, Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return <AppBar position="sticky" className="header">
            <Toolbar className="toolbar">
                <div style={{flexGrow: 1}}/>

                <div className="links">
                    <Link to="/search/events" className="notA headerLink">
                        Zobraziť opravy
                    </Link>
                    <Link to="/createService" className="notA headerLink">
                        Vytvoriť záznam
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    }
}

export default withRouter(Header);
