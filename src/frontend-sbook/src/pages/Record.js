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
                spz: this.state.spz,
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
            <h1>Vytvor záznam</h1>
            <Card className="profileBase">
                <AboutUsPrivateSection
                    updateInput={this.updateInput}
                />
                <OurVissionPrivateSection
                    materials={this.state.materials}
                    deleteQuestion={(index) => this.deleteMotivationLetterQuestion(index)}
                    onChangeQuestion={(e, index) => {
                        var materials = this.state.materials;
                        materials[index] = e.target.value;
                        this.setState({materials: materials});
                    }}
                    newMaterial={this.state.newMaterial}
                    onChangeNewQuestion={e => this.setState({newMaterial: e.target.value})}
                    addQuestion={(e) => this.addMotivationLetterQuestion(e)}/>
                <ContactPrivateSection
                    updateInput={this.updateInput}
                    handleDayClick={this.handleDayClick}/>
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
    handleDayClick = day => {
        day = day.toLocaleDateString();
        this.setState({ date: day });
    };
}
export default withRouter(CompanyAccount);