import React from "react";
import {Button, ButtonGroup, Card, Grid, InputAdornment, TextField, Typography} from "@material-ui/core";

export class AboutUsPrivateSection extends React.Component {
    render() {
        return (
            <div>
                <h2>Popis závady</h2>
                <div>
                    <TextField
                        style={{width: "100%"}}
                        multiline
                        rows="4"
                        name="aboutUs"
                        onChange={e => this.props.updateInput(e)}
                    />
                </div>
            </div>
        );
    }
}

export class OurVissionPrivateSection extends React.Component {
    render() {
        return (
            <div>
                <h2>Použité materiály</h2>
                <div>
                    <TextField
                        style={{width: "100%"}}
                        multiline
                        rows="4"
                        name="ourVission"
                        value={this.props.ourVission}
                        onChange={e => this.props.updateInput(e)}
                    />
                </div>
            </div>)
    }
}

export class ContactPrivateSection extends React.Component {
    render() {
        return (<div>
            <h2>Kontaktné údaje</h2>
            <Grid container spacing={4} sm={6} xs={12}>
                <Grid item sm={6} xs={12}>
                    <TextField label="Dátum"
                               value={this.props.personName}
                               name={"personName"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField label="Technik"
                               value={this.props.email}
                               name={"email"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField label="Telefonní číslo"
                               value={this.props.phone}
                               name={"phone"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField label="Odkaz na web"
                               value={this.props.websiteUrl}
                               name={"websiteUrl"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
            </Grid>
        </div>)
    }
}

export class SavePrivateSection extends React.Component {
    render() {
        return (
            <div style={{marginTop: "1em", textAlign: "right"}}>
                Před zobrazením uložte změny.<br/><br/>
                <Button color="primary" variant="contained"
                        onClick={this.props.saveData}>Uložit</Button>&nbsp;
            </div>
        )
    }
}