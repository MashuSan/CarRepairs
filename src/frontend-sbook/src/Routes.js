import React from 'react';
import {Switch, Route} from "react-router-dom";

import Search from "./pages/Search";
import EventView from "./pages/RecordPreview";
import Account from "./pages/Record";

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
