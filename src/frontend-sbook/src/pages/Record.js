import React from "react";
import {
    Card,

} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import "./Record.css";
import {
    AboutUsPrivateSection, ContactPrivateSection,
    OurVissionPrivateSection, SavePrivateSection
} from "../components/Profile/Record";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class CompanyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMaterial: "",
            materials: []
        };
    }

    async componentDidMount() {
    }

    saveData = async (event) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: this.state.date,
                kmStatus: this.state.kmStatus,
                description: this.state.description,
                materials: this.state.materials,
                technicsName: this.state.technicsName
            })
        }
        fetch('http://localhost:5000/services', requestOptions)
        event.preventDefault()
    };

    render() {
        return (<main>
            <Card className="profileBase">
                <AboutUsPrivateSection
                    updateInput={this.updateInput}
                />
                <OurVissionPrivateSection
                    updateInput={this.updateInput}/>
                <MotivationLetterQuestions
                    materials={this.state.materials}
                    deleteQuestion={(index) => this.deleteMotivationLetterQuestion(index)}
                    onChangeQuestion={(e, index) => {
                        var materials = this.state.materials;
                        materials[index] = e.target.value;
                        this.setState({materials: materials});
                    }}
                    newQuestion={this.state.newMaterial}
                    onChangeNewQuestion={e => this.setState({newMaterial: e.target.value})}
                    addQuestion={(e) => this.addMotivationLetterQuestion(e)}
                />
                <ContactPrivateSection
                    updateInput={this.updateInput}/>
                <SavePrivateSection
                    pushToHistory={(path) => this.props.history.push(path)}
                    databaseId={""}
                    saveData={this.saveData}
                />
            </Card>
        </main>)
    }


    addMotivationLetterQuestion = (e) => {
        var materials = this.state.materials;
        materials.push(this.state.newMaterial);
        this.setState({materials: materials, newMaterial: ""});
    };
    deleteMotivationLetterQuestion = (index) => (e) => {
        var materials = this.state.materials;
        materials.splice(index, 1);
        this.setState({materials: materials});
    };
    updateInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };
}


class MotivationLetterQuestions extends React.Component {

    render() {
        return (<Grid item>
            <label>
                Otázky motivačního dopisu
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
                    přidat novou otázku
                </Button>
            </label>
        </Grid>);
    }
}

export default withRouter(CompanyAccount);