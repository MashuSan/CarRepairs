import React from "react";
import {Button, ButtonGroup, Card, Grid, InputAdornment, TextField, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faFacebookSquare,
    faInstagram,
    faLinkedin,
    faLinkedinIn,
    faYoutube, faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

export class NamePrivateSection extends React.Component {
    render() {
        return (
            <TextField
                value={this.props.name}
                name={"name"}
                onChange={e => this.props.updateInput(e)}
                className="title"
            />)
    }
}

export class AboutUsPrivateSection extends React.Component {
    render() {
        return (
            <div>
                <h2>O nás</h2>
                <div>
                    <TextField
                        style={{width: "100%"}}
                        multiline
                        rows="4"
                        name="aboutUs"
                        value={this.props.aboutUs}
                        onChange={e => this.props.updateInput(e)}
                    />

                </div>
            </div>
        );
    }
}

export class FoundingYearPrivateSection extends React.Component {
    render() {
        var foundingYear = this.props.foundingYear;
        if (!foundingYear) {
            foundingYear = "";
        }
        return (<TextField
            label="Rok založení"
            type="number"
            name="foundingYear"
            value={foundingYear}
            onChange={e => this.props.updateInput(e)}
        />)
    }
}

export class OurVissionPrivateSection extends React.Component {
    render() {
        return (
            <div>
                <h2>Naše vize</h2>
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
            <h2>Kontaktní údaje</h2>
            <Grid container spacing={4} sm={6} xs={12}>
                <Grid item sm={6} xs={12}>
                    <TextField label="Kontatktní osoba"
                               value={this.props.personName}
                               name={"personName"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField label="Kontatktní email"
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

export class SitesPrivateSection extends React.Component {
    render() {
        return (<div>
            <h2>Sociální sítě</h2><Grid container spacing="4">
            <Grid item>
                <TextField label="Instagram" defaultValue="" value={this.props.socialSites.ig}
                           name={"ig"}
                           onChange={(e) => this.props.changeSocialSitesLinks(e)}
                           InputProps={{
                               startAdornment: <InputAdornment position="start"><FontAwesomeIcon
                                   icon={faInstagram}/></InputAdornment>
                           }}
                />
            </Grid>
            <Grid item>
                <TextField label="Facebook" defaultValue="" value={this.props.socialSites.fb}
                           name={"fb"}
                           onChange={(e) => this.props.changeSocialSitesLinks(e)}
                           InputProps={{
                               startAdornment: <InputAdornment position="start"><FontAwesomeIcon
                                   icon={faFacebookSquare}/></InputAdornment>
                           }}
                />
            </Grid>
            <Grid item>
                <TextField label="Linked In" defaultValue="" value={this.props.socialSites.linkedin}
                           name={"linkedin"}
                           onChange={(e) => this.props.changeSocialSitesLinks(e)}
                           InputProps={{
                               startAdornment: <InputAdornment position="start"><FontAwesomeIcon
                                   icon={faLinkedin}/></InputAdornment>
                           }}
                />
            </Grid>
            <Grid item>
                <TextField label="YouTube" defaultValue="" value={this.props.socialSites.yt}
                           name={"yt"}
                           onChange={(e) => this.props.changeSocialSitesLinks(e)}
                           InputProps={{
                               startAdornment: <InputAdornment position="start"><FontAwesomeIcon
                                   icon={faYoutubeSquare}/></InputAdornment>
                           }}
                />
            </Grid>
        </Grid></div>)
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