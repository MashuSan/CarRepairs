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
            newPrice: "",
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
        await fetch('http://localhost:5000/services', requestOptions)
        window.location.reload();
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
                    onChangeMaterial={(e, index) => this.onChangeMaterial(e, index)}
                    onChangePrice={(e, index) => this.onChangePrice(e, index)}
                    newMaterial={this.state.newMaterial}
                    newPrice={this.state.newPrice}
                    onNewChangeMaterial={e => this.setState({newMaterial: e.target.value})}
                    onNewChangePrice={e => this.setState({newPrice: e.target.value})}
                    addQuestion={(e) => this.addMotivationLetterQuestion(e)}/>
                <ContactPrivateSection
                    updateInput={this.updateInput}
                    handleDayClick={this.handleDayClick}
                    date={this.state.date}/>
                <SavePrivateSection
                    pushToHistory={(path) => this.props.history.push(path)}
                    databaseId={""}
                    saveData={this.saveData}
                />
            </Card>
        </main>)
    }

    onChangeMaterial = (e, index) => {
        let materials = this.state.materials;
            materials[index] = {
                material: e.target.value,
                price: materials[index].price
            };
            this.setState({materials: materials});
    }

    onChangePrice = (e, index) => {
        let materials = this.state.materials;
            materials[index] = {
                material: materials[index].material,
                price: e.target.value
            };
            this.setState({materials: materials});
    }

    addMotivationLetterQuestion = (e) => {
        var materials = this.state.materials;
        var item = {
            material: this.state.newMaterial,
            price: this.state.newPrice
        }
        materials.push(item);
        this.setState({materials: materials, newMaterial: "", newPrice: ""});
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