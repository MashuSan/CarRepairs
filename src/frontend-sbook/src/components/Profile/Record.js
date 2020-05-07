import React from "react";
import {Button, ButtonGroup, Card, Grid, InputAdornment, TextField, Typography} from "@material-ui/core";
import "./Record.css"

export class AboutUsPrivateSection extends React.Component {
    render() {
        return (
        <div>
            <Grid container xs={12}>
                <Grid item sm={3} xs={12} />
                <Grid item sm={6} xs={12}>
                    <TextField label="Popis závady"
                               multiline
                               name="description"
                               value={this.props.description}
                               onChange={e => this.props.updateInput(e)}
                    />
                </Grid>
                <Grid item sm={3} xs={12} />
            </Grid>
        </div>)
    }
}

export class OurVissionPrivateSection extends React.Component {
    render() {
        return (
            <div style={{marginTop: "2em"}}>
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
                            placeholder="material - price"
                            onChange={this.props.onChangeNewQuestion}
                            value={this.props.newMaterial}
                        />
                        <Button onClick={this.props.addQuestion}>
                            +
                        </Button>
                    </label>
                </Grid>
            </div>)
    }
}

export class ContactPrivateSection extends React.Component {
    render() {
        return (
        <div>
            <Grid container xs={12}>
                <Grid item sm={3} xs={12} />
                <Grid item sm={6} xs={12}>
                    <TextField label="Najazdené kilometre"
                               value={this.props.kmStatus}
                               name={"kmStatus"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={3} xs={12} />

                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="Dátum"
                               value={this.props.date}
                               name={"date"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />
                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="Technik"
                               value={this.props.technicsName}
                               name={"technicsName"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
            </Grid>
        </div>)
    }
}

export class SavePrivateSection extends React.Component {
    render() {
        return (
            <div style={{marginTop: "1em", marginBottom: "1em"}}>
                <Button color="primary" variant="contained"
                        onClick={this.props.saveData}>Uložit</Button>&nbsp;
            </div>
        )
    }
}
