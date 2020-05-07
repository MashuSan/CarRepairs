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
                        name="description"
                        value={this.props.description}
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
                <Grid item>

                    <label>
                        {
                            this.props.materials.map((question, index) => {
                                return <div><input
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => this.props.onChangeQuestion(e, index)}
                                    value={question}
                                />
                                    <Button onClick={this.props.deleteQuestion(index)}>x</Button></div>
                            })
                        }
                        <input
                            type="text"
                            name="newMotivationLetterQuestion"
                            placeholder="[Proč se chceš úšastnit této stáže? (300 slov)]"
                            onChange={this.props.onChangeNewQuestion}
                            value={this.props.newMaterial}
                        />
                        <Button onClick={this.props.addQuestion}>
                            přidat nový materiál
                        </Button>
                    </label>
                </Grid>
            </div>)
    }
}

export class ContactPrivateSection extends React.Component {
    render() {
        return (<div>
            <h2>Dátum a podpis</h2>
            <Grid container spacing={4} sm={6} xs={12}>
                <Grid item sm={6} xs={12}>
                    <TextField label="Dátum"
                               value={this.props.date}
                               name={"date"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField label="Technik"
                               value={this.props.technicsName}
                               name={"technicsName"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField label="km"
                               value={this.props.kmStatus}
                               name={"kmStatus"}
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
/*
<Grid item sm={6} xs={12}>
    <TextField label="Odkaz na web"
    value={this.props.websiteUrl}
    name={"websiteUrl"}
    onChange={(e) => this.props.updateInput(e)}/>
</Grid>*/