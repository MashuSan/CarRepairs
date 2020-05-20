import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export class DescriptionSection extends React.Component {
    render() {
        return (
        <div>
            <Grid container xs={12}>
                <Grid item sm={3} xs={12} />
                <Grid item sm={6} xs={12}>
                    <TextField id="something"
                               label="Popis závady"
                               multiline
                               value={this.props.desc}
                               name="description"
                               onChange={e => this.props.updateInput(e)}
                    />
                </Grid>
                <Grid item sm={3} xs={12} />
            </Grid>
        </div>)
    }
}

export class MaterialsSection extends React.Component {
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
                                    <Button onClick={this.props.deleteEntry(index)}>x</Button></div>
                            })
                        }
                        <input size="15"
                            type="text"
                            placeholder="Materiál"
                            onChange={this.props.onNewChangeMaterial}
                            value={this.props.newMaterial}
                        />
                        <input size="5" style={{marginLeft: "1em"}}
                            type="text"
                            placeholder="Cena"
                            onChange={this.props.onNewChangePrice}
                            value={this.props.newPrice}
                        />
                        <Button onClick={this.props.addEntry}>
                            +
                        </Button>
                    </label>
                </Grid>
            </div>)
    }
}

export class BasicInfoSection extends React.Component {
    render() {
        return (
        <div>
            <Grid container xs={12}>

                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="ŠPZ"
                               name={"spz"}
                               value={this.props.spzIN}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />

                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="Najazdené kilometre"
                               name={"kmStatus"}
                               value={this.props.kmIN}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />

                <Grid item sm={3} xs={12} />
                <Grid item sm={3} xs={12}>
                    <TextField label="Technik"
                               name={"technicsName"}
                               value={this.props.nameIN}
                               onChange={(e) => this.props.updateInput(e)}/>
                </Grid>
                <Grid item sm={6} xs={12} />

            </Grid>

            <div>
                <DayPicker onDayClick={this.props.handleDayClick}/>
                {this.props.date ? (
                    <p>{this.props.date}</p>
                ) : (
                    <p>Zvoľte dátum.</p>
                )}
            </div>

        </div>)
    }
}


export class SaveSection extends React.Component {
    render() {
        return (
            <div style={{marginTop: "1em", marginBottom: "1em"}}>
                <Button color="primary" variant="contained"
                        onClick={this.props.saveData}>Uložit</Button>&nbsp;
            </div>
        )
    }
}
