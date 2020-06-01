import React from 'react';
import {Switch, Route} from "react-router-dom";

import Search from "./pages/Search/Search";
import EventView from "./pages/RecordPreview/RecordPreview";
import CreateRecord from "./pages/CreateRecord/Record";
import ModifyAccount from "./pages/CreateRecord/ModifyRecord"

/**
 * Application pages switch
 * @param {string} role defines which router to use
 */
export class MySwitch extends React.Component {
    render() {
        return <Switch>
            <Route path="/event/:id"><EventView/></Route>
            <Route path="/search/:what"><Search/></Route>
            <Route path="/createService"><CreateRecord/></Route>
            <Route path="/search"><Search/></Route>
            <Route path="/modifyAccount/:id"><ModifyAccount/></Route>
            <Route path="/"><Search/></Route>
        </Switch>
    }
}
