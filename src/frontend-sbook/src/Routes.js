import React from 'react';
import {Switch, Link, Route} from "react-router-dom";
import {List, ButtonBase} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

import Search from "./pages/Search";
import EventView from "./pages/RecordPreview";
import Account from "./pages/Record";
/* TEMPLATES */

const templates =[
    {route: "/home", title: "Domů", icon: faHome, component: null},
    {route: "/search", title: "Seznam", icon: faHome, component: Search},
    ];


/* COMPONENTS */

/**
 * An item in sidebar menu
 * @name SidebarMenuItem
 * @prop {string} route
 * @prop {string} title
 * @prop {icon} icon
 * @prop {function} menu function to toggle application sidebar
 */
class SidebarMenuItem extends React.Component {
    render() {
        if (!this.props.component) {
            return (<Link to={this.props.route} className="notA" onClick={() => {
                window.location.href = "./";
            }}>
                <ButtonBase className="menuButton">
                    <div className="menuItem">
                        <FontAwesomeIcon icon={this.props.icon} style={{width: "1em"}}/>
                        &nbsp;&nbsp;{this.props.title}
                    </div>
                </ButtonBase>
            </Link>)
        }
        return <Link to={this.props.route} className="notA" onClick={() => this.props.menu()}>
            <ButtonBase className="menuButton">
                <div className="menuItem">
                    <FontAwesomeIcon icon={this.props.icon} style={{width: "1em"}}/>
                    &nbsp;&nbsp;{this.props.title}
                </div>
            </ButtonBase>
        </Link>
    }
}


/* EXPORTS */

/**
 * Application pages switch
 * @param {string} role defines which router to use
 */
export class MySwitch extends React.Component {
    render() {
        return <Switch>
            <Route path="/event/:id"><EventView/></Route>
            <Route path="/search/:what"><Search/></Route>
            <Route path="/createService"><Account/></Route>
            <Route path="/search"><Search/></Route>
            <Route path="/"><Search/></Route>
        </Switch>
    }
}


/**
 * List of items in sidebar menu
 * @param {function} menu function to toggle application sidebar
 * @param {string} role defines which router to use
 */
export class MyList extends React.Component {
    render() {
        return <List>
            {templates.map(item => <SidebarMenuItem route={item.route} title={item.title}
                                                                     icon={item.icon} menu={this.props.menu}
                                                                     component={item.component}
            />)}
        </List>
    }
}





