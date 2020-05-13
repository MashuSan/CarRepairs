import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import "./Record.css"
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
                                return <div>
                                    <input size="15"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => this.props.onChangeMaterial(e, index)}
                                    value={question.material}
                                    />
                                    <input size="5" style={{marginLeft: "1em"}}
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => this.props.onChangePrice(e, index)}
                                    value={question.price} />
                                    <Button onClick={this.props.deleteQuestion(index)}>x</Button></div>
                            })
                        }
                        <input size="15"
                            type="text"
                            name="newMotivationLetterQuestion"
                            placeholder="material"
                            onChange={this.props.onNewChangeMaterial}
                            value={this.props.newMaterial}
                        />
                        <input size="5" style={{marginLeft: "1em"}}
                            type="text"
                            name="newMotivationLetterQuestion"
                            placeholder="price"
                            onChange={this.props.onNewChangePrice}
                            value={this.props.newPrice}
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
                <Grid item sm={3} xs={12}>
                    <TextField label="ŠPZ"
                               name={"spz"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />

                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="Najazdené kilometre"
                               name={"kmStatus"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />

                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="Technik"
                               name={"technicsName"}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />

            </Grid>

            <div>
                <DayPicker
                onDayClick={this.props.handleDayClick}
                />
                {this.props.date ? (
                    <p>{this.props.date}</p>
                ) : (
                    <p>Please select a date.</p>
        )}
            </div>

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
