import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {Link, withRouter} from 'react-router-dom';

export class DeleteSection extends React.Component {
    render() {
        return (
            <div style={{marginTop: "1em", marginBottom: "1em"}}>
                <Button color="primary" variant="contained"
                        onClick={this.props.deleteData}>Vymazať</Button>&nbsp;
            </div>
        )
    }
}

export class ModifySection extends React.Component {
    render() {
        return (
            <div style={{marginTop: "1em", marginBottom: "1em"}}>
                <Link to={'../modifyAccount/' + this.props.id} className="notA">
                    <Button color="primary" variant="contained"
                        >Upraviť</Button>&nbsp;
                </Link>
            </div>
        )
    }
}